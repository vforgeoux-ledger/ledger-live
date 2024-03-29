import { v2 as compose } from "docker-compose";

export const spawnAnvil = async (rpc = "https://rpc.ankr.com/eth"): Promise<void> => {
  await compose.upOne("anvil", {
    log: true,
    env: {
      ...process.env,
      RPC: rpc,
    },
  });
};

export const killDocker = async () => {
  await compose.stop({ log: true });
  await compose.rm({ log: true });
};

["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException"].map(e =>
  process.on(e, async () => {
    await killDocker();
  }),
);
