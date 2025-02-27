import { Context, Probot } from "probot";
import { monitorWorkflow } from "../tools/monitorWorkflow";
import { commands } from "./tools";

// Keep this in sync with the workflow file
const ACTION_ID = "regen_doc";

/**
 * Slash commands `/regen-doc`
 * regenerates documentation files for LedgerJS libraries
 *
 * @param app The Probot application.
 */
export function regenDoc(app: Probot) {
  async function triggerWorkflow({
    context,
    number,
    login,
    commentId,
  }: {
    context: Context<"issue_comment.created" | "check_run.requested_action">;
    number: string;
    login: string;
    comment?: boolean;
    commentId?: number;
  }) {
    const { payload } = context;
    let ref;
    if ("check_run" in payload) {
      ref = payload.check_run.pull_requests[0]?.base.ref;
    } else {
      const { data: prData } = await context.octokit.rest.pulls.get({
        ...context.repo(),
        pull_number: payload.issue.number,
      });
      ref = prData.head.repo?.fork ? prData.base.ref : prData.head.ref;
    }

    await context.octokit.actions.createWorkflowDispatch({
      ...context.repo(),
      workflow_id: "regen-doc.yml",
      ref,
      inputs: {
        number,
        login,
        ...(commentId ? { commentId: `${commentId}` } : {}),
      },
    });
  }

  commands(app, "regen-doc", async (context, data) => {
    const { payload } = context;

    if (context.isBot) return;

    await triggerWorkflow({
      context,
      number: `${data.number}`,
      login: `${payload.comment.user.login}`,
      commentId: data?.commentId,
    });
  });

  app.on("check_run.requested_action", async context => {
    const { payload } = context;

    if (payload.requested_action.identifier !== ACTION_ID) return;

    const number = payload.check_run.pull_requests[0]?.number;
    const login = payload.sender.login;

    const res = await context.octokit.orgs.checkMembershipForUser({
      org: "LedgerHQ",
      username: login,
    });

    if (res.status >= 300) return;

    if (!number) return;

    await triggerWorkflow({
      context,
      number: `${number}`,
      login,
    });
  });

  monitorWorkflow(app, {
    file: "regen-doc.yml",
    checkRunName: "@Libs • Regen Doc Files",
    description: "Regenerates documentation files for LedgerJS libraries",
    summaryFile: "summary.json",
    getInputs: payload => ({
      ref: payload.check_run.head_sha,
      login: payload.sender.login,
    }),
  });
}
