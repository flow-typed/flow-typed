// @flow
import {gitHubClient} from "./github.js";
import {os, fs, path, child_process} from "./node.js";
import {recursiveRmdir} from './fileUtils';
import * as semver from "semver";
import request from "request";

const PKG_ROOT_DIR = path.join(__dirname, "..", "..");
const BIN_DIR = path.join(PKG_ROOT_DIR, "flow-bins");
const P = Promise;

// Used to decide which binary to fetch for each version of Flow
const BIN_PLATFORM = (_ => {
  switch (os.type()) {
    case "Linux": return "linux64";
    case "Darwin": return "osx";

    default: throw new Error(
      "Unsupported os.type()! " + os.type()
    );
  }
})();

let _flowBinVersionPromise = null;
export async function getOrderedFlowBinVersions(): Promise<Array<string>> {
  if (_flowBinVersionPromise === null) {
    _flowBinVersionPromise = (async function() {
      console.log("Fetching all Flow binaries...");
      const FLOW_BIN_VERSION_ORDER = [];
      const GH_CLIENT = gitHubClient();
      const QUERY_PAGE_SIZE = 100;
      const OS_ARCH_FILTER_RE = new RegExp(BIN_PLATFORM);

      let binURLs = new Map();
      let releases = new Map();
      let apiPayload = null;
      let page = 0;
      while (apiPayload === null || apiPayload.length === QUERY_PAGE_SIZE) {
        apiPayload = await new Promise((res, rej) => {
          GH_CLIENT.releases.listReleases({
            owner: "facebook",
            repo: "flow",
            page: page++,
            per_page: QUERY_PAGE_SIZE,
          }, (err, result) => { if (err) { rej(err); } else { res(result); } });
        });

        apiPayload.forEach(rel => {
          // We only test against versions since 0.15.0 because it has proper
          // [ignore] fixes (which are necessary to run tests)
          if (semver.lt(rel.tag_name, "0.15.0")) {
            return;
          }

          // Find the binary zip in the list of assets
          const binZip = rel.assets.filter(({name}) => {
            return OS_ARCH_FILTER_RE.test(name) && !/-latest.zip$/.test(name);
          }).map(asset => asset.browser_download_url);

          if (binZip.length !== 1) {
            throw new Error(
              "Unexpected number of " + BIN_PLATFORM + " assets for flow-" +
              rel.tag_name + "! " + JSON.stringify(binZip)
            );
          } else {
            const version =
              rel.tag_name[0] === "v"
              ? rel.tag_name
              : "v" + rel.tag_name;

            FLOW_BIN_VERSION_ORDER.push(version);
            binURLs.set(version, binZip[0]);
          }
        });
      }

      FLOW_BIN_VERSION_ORDER.sort((a, b) => {
        return semver.lt(a, b) ? -1 : 1;
      });

      if (!await fs.exists(BIN_DIR)) {
        await fs.mkdir(BIN_DIR);
      }

      await P.all(Array.from(binURLs).map(async ([version, binURL]) => {
        const zipPath = path.join(BIN_DIR, "flow-" + version + ".zip");

        if (await fs.exists(path.join(BIN_DIR, "flow-" + version))) {
          return;
        }

        // Download the zip file
        await new Promise((res, rej) => {
          console.log("  Fetching flow-%s...", version)
          const fileRequest = request({
            url: binURL,
            headers: {
              "User-Agent": "flow-typed Test Runner " +
                            "(github.com/flowtype/flow-typed)"
            }
          }).on("error", err => rej(err));;

          fileRequest.pipe(fs.createWriteStream(zipPath).on("close", _ => {
            console.log("    flow-%s finished downloading.", version);
            res();
          }));
        });

        // Extract the flow binary
        const flowBinDirPath = path.join(BIN_DIR, "TMP-flow-" + version);
        await fs.mkdir(flowBinDirPath);
        console.log("  Extracting flow-%s...", version);
        await new Promise((res, rej) => {
          const child = child_process.exec(
            "unzip " + zipPath + " flow/flow -d " + flowBinDirPath
          );
          let stdErrOut = "";
          child.stdout.on("data", data => stdErrOut += data);
          child.stderr.on("data", data => stdErrOut += data);
          child.on("error", err => rej(err));
          child.on("close", code => {
            if (code === 0) { res(); } else { rej(stdErrOut); }
          });
        });
        await fs.rename(
          path.join(flowBinDirPath, "flow", "flow"),
          path.join(BIN_DIR, "flow-" + version)
        );
        console.log("  Removing flow-%s artifacts...", version);
        await P.all([
          recursiveRmdir(flowBinDirPath),
          fs.unlink(zipPath)
        ]);
        console.log("    flow-%s complete!", version);
      }));

      console.log("Finished fetching Flow binaries.\n");

      return FLOW_BIN_VERSION_ORDER;
    })();
  }
  return _flowBinVersionPromise;
}
