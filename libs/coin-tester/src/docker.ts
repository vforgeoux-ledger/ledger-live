import path from "path";
import axios from "axios";
import chalk from "chalk";
import fs from "fs/promises";
import { v2 as compose } from "docker-compose";
import SpeculosTransportHttp from "@ledgerhq/hw-transport-node-speculos-http";
import { ENV } from "./types";

const { API_PORT } = process.env as ENV;
const cwd = path.join(__dirname);

const delay = (timing: number) => new Promise(resolve => setTimeout(resolve, timing));

// type SemanticVersion = `${number}.${number}.${number}`;
// type NanoAppEndpoint = `/${SemanticVersion}/${string}/app_${SemanticVersion}.elf`;

export const spawnSigner = async (
  service: "speculos",
  nanoAppEndpoint: string,
): Promise<SpeculosTransportHttp> => {
  console.log(`Starting ${service}...`);
  console.log(
    `https://raw.githubusercontent.com/LedgerHQ/coin-apps/raw/master/nanox${nanoAppEndpoint}`,
  );
  const { data: blob } = await axios({
    url: `https://raw.githubusercontent.com/LedgerHQ/coin-apps/master/nanox${nanoAppEndpoint}`,
    method: "GET",
    responseType: "stream",
    headers: {
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
    },
  });

  console.log(path.resolve(cwd, "tmp"));
  await fs.mkdir(path.resolve(cwd, "tmp"), { recursive: true });
  await fs.writeFile(path.resolve(cwd, "tmp/app.elf"), blob, "binary");
  await compose.upOne("speculos", {
    cwd,
    log: true,
    env: {
      ...process.env,
    },
  });

  const checkSpeculosLogs = async (): Promise<SpeculosTransportHttp> => {
    const { out } = await compose.logs("speculos", { cwd });

    if (out.includes("Running on all addresses (0.0.0.0)")) {
      console.log(chalk.bgYellowBright(" -  SPECULOS READY ✅  - "));
      return SpeculosTransportHttp.open({
        apiPort: API_PORT,
      });
    }

    await delay(200);
    return checkSpeculosLogs();
  };

  console.log(`${service} started ✓`);
  return checkSpeculosLogs().then(transport => transport);
};

export const killSpeculos = async () => {
  await compose.down({ cwd });
};

["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException"].map(e =>
  process.on(e, async () => {
    await killSpeculos();
  }),
);
