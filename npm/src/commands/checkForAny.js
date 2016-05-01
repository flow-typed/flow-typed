import {getLocalLibDefs, getLocalLibDefFlowVersions} from "../lib/libDef.js";
import {recursiveRmdir, copyFile} from '../lib/fileUtils'
import {getOrderedFlowBinVersions} from '../lib/flowVersions.js';
import {child_process, path, fs} from "../lib/node.js";
import {versionToString} from "../lib/semver.js";

const PKG_ROOT_DIR = path.join(__dirname, "..", "..");
const BIN_DIR = path.join(PKG_ROOT_DIR, "flow-bins");
const TEST_DIR = path.join(PKG_ROOT_DIR, "test-dir");

export const name = "checkForAny";
export const description =
"Checks if the libdef contains the any Type";

export async function run() {
  try {
    // const flowVersions = await getOrderedFlowBinVersions();
    // const newestFlowVersion = flowVersions[flowVersions.length - 1];
    const newestFlowVersion = 'v0.24.0';
    const localLibDefs = await getLocalLibDefs();
    const localLibDefFlowVersions = await getLocalLibDefFlowVersions(localLibDefs);

    while (localLibDefFlowVersions.length > 0) {
      var testBatch = localLibDefFlowVersions.slice(0, Math.min(localLibDefFlowVersions.length, 5))
      .map(t => localLibDefFlowVersions.pop());

      try {
        await fs.mkdir(TEST_DIR);
      } catch (e) {

      }

      const allTypes = await Promise.all(testBatch.map(t => check(t, newestFlowVersion)));
      const libDefsWithAny = [];
      allTypes.forEach(typeResult => {
        const types = JSON.parse(typeResult.stdOut);
        types.forEach(type => {
          if (type.type.includes('any') && (!type.reasons.length || type.reasons[0].desc !== `module \`${typeResult.name}\``)) {
            libDefsWithAny.push({
              type,
              name: typeResult.name,
            });
          }
        });
      });
      if (libDefsWithAny.length > 0) {
        libDefsWithAny.forEach(error => {
          console.error(`${error.name} contains any as type`);
          console.error(`${error.type.line}:${error.type.start}-${error.type.endline}:${error.type.end}   ${error.type.type}`);
        })
      }
    }
  } finally {
    if (await fs.exists(TEST_DIR)) {
      await recursiveRmdir(TEST_DIR);
    }
  }
}

async function check(t, newestFlowVersion) {
  const id = `${t.libDef.pkgName}_${t.libDef.pkgVersionStr}--flow_` +
  `${versionToString(t.flowVersion)}`;
  const testDirName = id
  .replace(/>/g, "gt")
  .replace(/</g, "lt")
  .replace(/=/g, "eq");
  const testDirPath = path.join(TEST_DIR, testDirName);
  return new Promise(async res => {
    try {
      await fs.mkdir(testDirPath);

      // Copy files into the test dir
      const destLibDefPath = path.join(
        testDirPath,
        path.basename(t.libDefPath)
      );
      await Promise.all(
        [
          Promise.all(t.testFiles.map(async (filePath, idx) => {
            const destBasename = idx + "-" + path.basename(filePath);
            await copyFile(filePath, path.join(testDirPath, destBasename));
          })),
          copyFile(t.libDefPath, destLibDefPath),
        ]
      );

      const destFlowConfigPath = path.join(testDirPath, ".flowconfig");
      const flowConfigData = [
        "[libs]",
        path.basename(t.libDefPath),
        "",
        "[options]",
        "suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$ExpectError",
        "",

        // Be sure to ignore stuff in the node_modules directory of the flow-typed
        // CLI repository!
        "[ignore]",
        path.join(testDirPath, "..", "..", "node_modules"),
      ].join("\n");
      await fs.writeFile(destFlowConfigPath, flowConfigData);

      const child = child_process.exec([
        path.join(BIN_DIR, `flow-${newestFlowVersion}`),
        "dump-types",
        "--json",
        `"${destLibDefPath}"`
      ].join(" "), {
        cwd: PKG_ROOT_DIR,
      });
      let stdOut = '';
      child.stdout.on("data", data => stdOut += data);
      child.on("error", execError => {
        res({errCode: null, execError});
      });

      child.on("close", errCode => {
        res({
          name: t.libDef.pkgName,
          stdOut,
        });
      });
    } catch (e) {
      console.log(e);
      res();
    }
  });
}
