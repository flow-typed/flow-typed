// @flow

import {searchUpDirPath} from '../fileUtils.js';

import type {FlowSpecificVer} from '../flowVersion.js';

import {fs, path} from '../node.js';

import {stringToVersion} from '../semver.js';
import type {Version} from '../semver.js';

import semver, {intersects} from 'semver';
import colors from 'colors/safe';

import glob from 'glob';

type PkgJson = {|
  pathStr: string,
  content: {
    name: string,
    version: string,
    private?: boolean,
    workspaces?: string[] | {packages: string[], ...},

    installConfig?: {pnp?: boolean},

    bundledDependencies?: {[pkgName: string]: string},
    dependencies?: {[pkgName: string]: string},
    devDependencies?: {[pkgName: string]: string},
    optionalDependencies?: {[pkgName: string]: string},
    peerDependencies?: {[pkgName: string]: string},
  },
|};

export type PnpResolver = {|
  resolveToUnqualified: (string, string) => string | null,
|};

const PKG_JSON_DEP_FIELDS = [
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'bundledDependencies',
];
export async function findPackageJsonDepVersionStr(
  pkgJson: PkgJson,
  depName: string,
): Promise<null | string> {
  let matchedFields = [];
  const deps = PKG_JSON_DEP_FIELDS.reduce((deps, section) => {
    const contentSection = pkgJson.content[section];
    if (contentSection && contentSection[depName]) {
      matchedFields.push(section);
      deps.push(contentSection[depName]);
    }
    return deps;
  }, []);

  if (deps.length === 0) {
    return null;
  } else if (deps.length === 1) {
    return deps.pop();
  } else {
    throw new Error(
      `Found ${depName} listed in ${String(deps.length)} places in ` +
        `${pkgJson.pathStr}!`,
    );
  }
}

export async function findPackageJsonPath(pathStr: string): Promise<string> {
  const pkgJsonPathStr = await searchUpDirPath(
    pathStr,
    async p => await fs.exists(path.join(p, 'package.json')),
  );
  if (pkgJsonPathStr === null) {
    throw new Error(`Unable to find a package.json for ${pathStr}!`);
  }
  return path.join(pkgJsonPathStr, 'package.json');
}

function getWorkspacePatterns(pkgJson: PkgJson): string[] {
  if (Array.isArray(pkgJson.content.workspaces)) {
    return pkgJson.content.workspaces;
  }

  if (
    pkgJson.content.workspaces &&
    Array.isArray(pkgJson.content.workspaces.packages)
  ) {
    return pkgJson.content.workspaces.packages;
  }

  return [];
}

export async function findWorkspacesPackagePaths(
  pkgJson: PkgJson,
): Promise<string[]> {
  const tasks = await Promise.all(
    getWorkspacePatterns(pkgJson).map(pattern => {
      return new Promise((resolve, reject) => {
        glob(
          `${path.dirname(pkgJson.pathStr)}/${pattern}/package.json`,
          {absolute: true},
          (err, files) => {
            if (err) {
              reject(err);
            } else {
              resolve(files);
            }
          },
        );
      });
    }),
  );

  return tasks.flat();
}

export async function findWorkspacesPackages(
  pkgJson: PkgJson,
): Promise<PkgJson[]> {
  const paths = await findWorkspacesPackagePaths(pkgJson);

  return Promise.all(
    paths.map(async pathStr => {
      const pkgJsonContent = await fs.readJson(pathStr);
      return {
        pathStr,
        content: pkgJsonContent,
      };
    }),
  );
}

// TODO: Write tests for this
export function getPackageJsonDependencies(
  pkgJson: PkgJson,
  /**
   * dependency groups to ignore
   */
  ignoreDeps: Array<string>,
  /**
   * dependencies or scopes of dependencies to be ignored
   */
  ignoreDefs: Array<string>,
): {[depName: string]: string} {
  const depFields = PKG_JSON_DEP_FIELDS.filter(field => {
    return ignoreDeps.indexOf(field.slice(0, -12)) === -1;
  });

  return depFields.reduce((deps, section) => {
    const contentSection = pkgJson.content[section];
    if (contentSection) {
      Object.keys(contentSection).forEach(pkgName => {
        if (deps[pkgName]) {
          console.warn(`Found ${pkgName} listed twice in package.json!`);
        }
        const pkgIgnored = ignoreDefs.some(cur => {
          const ignoreDef = cur.trim();
          if (ignoreDef === '') return false;
          // if we are looking to ignore a scope dir
          if (
            ignoreDef.charAt(0) === '@' &&
            (ignoreDef.indexOf('/') === -1 ||
              ignoreDef.indexOf('/') === ignoreDef.length - 1)
          ) {
            return pkgName.startsWith(ignoreDef);
          }
          return pkgName === ignoreDef;
        });
        if (pkgIgnored) return;

        deps[pkgName] = contentSection[pkgName];
      });
    }
    return deps;
  }, {});
}

export function mergePackageJsonDependencies(
  a: {[depName: string]: string},
  b: {[depName: string]: string},
): {[depName: string]: string} {
  const result = {...a};
  for (const dep of Object.keys(b)) {
    const version = b[dep];
    let doesIntersect;
    try {
      doesIntersect = intersects(result[dep], version);
    } catch (e) {
      doesIntersect = result[dep] === version;
    }

    if (a[dep] != null && !doesIntersect) {
      console.log(
        colors.yellow(
          "\t  Conflicting versions for '%s' between '%s' and '%s'",
        ),
        dep,
        a[dep],
        version,
      );
    } else {
      result[dep] = version;
    }
  }

  return result;
}

export async function getPackageJsonData(pathStr: string): Promise<PkgJson> {
  const pkgJsonPath = await findPackageJsonPath(pathStr);
  const pkgJsonContent = await fs.readJson(pkgJsonPath);
  return {
    pathStr: pkgJsonPath,
    content: pkgJsonContent,
  };
}

export async function determineFlowVersion(
  pathStr: string,
): Promise<null | Version> {
  const pkgJsonData = await getPackageJsonData(pathStr);
  const flowBinVersionStr = await findPackageJsonDepVersionStr(
    pkgJsonData,
    'flow-bin',
  );

  if (flowBinVersionStr !== null) {
    let flowVerStr;
    if (semver.valid(flowBinVersionStr)) {
      flowVerStr = flowBinVersionStr;
    } else {
      const flowVerRange = new semver.Range(flowBinVersionStr);
      if (flowVerRange.set[0].length !== 2) {
        const cliPkgJson = require('../../../package.json');
        const cliFlowVer = cliPkgJson.devDependencies['flow-bin'];
        throw new Error(
          `Unable to extract flow-bin version from package.json!\n` +
            `Never use a complex version range with flow-bin. Always use a ` +
            `specific version (i.e. "${cliFlowVer}").`,
        );
      }
      flowVerStr = flowVerRange.set[0][0].semver.version;
    }
    return stringToVersion('v' + flowVerStr);
  }

  return null;
}

export async function loadPnpResolver(
  pkgJson: PkgJson,
): Promise<PnpResolver | null> {
  if (!(pkgJson.content.installConfig && pkgJson.content.installConfig.pnp)) {
    return null;
  }
  const pnpJsFile = path.resolve(pkgJson.pathStr, '..', '.pnp.js');
  if (await fs.exists(pnpJsFile)) {
    // $FlowFixMe[unsupported-syntax]
    return require(pnpJsFile);
  }
  throw new Error(
    'Unable to find Yarn PNP resolver lib: `.pnp.js`! ' +
      'Did you forget to run `yarn install` before running `flow-typed install`?',
  );
}

export async function findFlowSpecificVer(
  startingPath: string,
): Promise<FlowSpecificVer> {
  const flowSemver = await determineFlowVersion(startingPath);
  if (flowSemver === null) {
    throw new Error(
      'Failed to find a flow-bin dependency in package.json.\n' +
        'Please install flow-bin: `npm install --save-dev flow-bin`',
    );
  }
  if (flowSemver.range !== undefined) {
    throw new Error(
      `Unable to extract flow-bin version from package.json!\n` +
        `Never use a complex version range with flow-bin. Always use a ` +
        `specific major/minor version (i.e. "^0.39").`,
    );
  }
  const major = flowSemver.major;
  if (major === 'x') {
    throw new Error(
      `Unable to extract flow-bin version from package.json!\n` +
        `Never use a wildcard major version with flow-bin!`,
    );
  }
  return {
    major,
    minor: flowSemver.minor,
    patch: flowSemver.patch,
    prerel: flowSemver.prerel == null ? null : flowSemver.prerel,
  };
}
