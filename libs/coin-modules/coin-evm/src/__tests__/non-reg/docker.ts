import { v2 as compose } from "docker-compose";

const cwd = __dirname;

const delay = (timing: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, timing));

export const spawnAnvil = async (rpc: string): Promise<void> => {
  console.log("Starting anvil...");
  await compose.upOne("anvil", {
    log: true,
    cwd,
    env: {
      ...process.env,
      RPC: rpc,
    },
  });

  const checkAnvilLogs = async (): Promise<void> => {
    const { out } = await compose.logs("anvil", { cwd });

    if (out.includes("Listening on 0.0.0.0:")) {
      console.log(" -  ANVIL READY ✅  - ");
      return;
    }

    await delay(200);
    return checkAnvilLogs();
  };

  await checkAnvilLogs();
};

export const killAnvil = async (): Promise<void> => {
  await compose.down({ cwd });
};

["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException"].map(e =>
  process.on(e, async () => {
    await killAnvil();
  }),
);
