#!/usr/bin/env zx
import { basename } from "path";

let [platform, deploy, bundle] = [undefined, false, false]

const usage = (exitCode = 1) => {
  console.error(chalk.red(
    `Usage: ${basename(
      __filename,
    )} -p --platform <ios|android> [-b --bundle] [-d --deploy] [-h --help]`,
  ));
  process.exit(exitCode);
};

const bundle_js = async () => {
  await $`rm -rf CodePush`.nothrow()
  await $`mkdir CodePush`.nothrow()
  await $`pnpm react-native bundle --platform ${platform} --entry-file index.js --bundle-output ./CodePush/index.${platform}.bundle --assets-dest ./CodePush --dev false`;
};

const deploy_cp = async () => {
  await $`appcenter codepush release -a jalil.dabbech-ledger.fr/Ledger-Live-Android -c ./CodePush -t 3.34.1 -d "Develop"`
}

for (const argName in argv) {
  switch (argName) {
    case "help":
    case "h":
      usage(0);
      break;
    case "platform":
    case "p":
      if (argv[argName] !== "ios" && argv[argName] !== "android") {
        usage(1);
      } else {
        platform = argv[argName];
      }
      break;
    case "bundle":
    case "b":
      bundle = true;
      break;
    case "deploy":
    case "d":
      deploy = true;
      break;
    case "_":
      break;
    default:
      usage(42);
      break;
  }
}

within(async () => {
  if (!platform) {
    usage(2);
  }

  if (bundle) {
    await bundle_js();
  }
  if (deploy) {
    await deploy_cp()
  }
});
