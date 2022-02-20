// @flow
import path from 'path';
import semver from 'semver';

import {getCacheRepoDir} from './cacheRepoUtils';
import {fs} from './node';
import {ValidationError} from './ValidationError';
import {
  disjointVersionsAll as disjointFlowVersionsAll,
  parseDirString as parseFlowDirString,
  toSemverString as flowVersionToSemver,
  type FlowVersion,
} from './flowVersion';
import {TEST_FILE_NAME_RE} from './libDefs';
import {findLatestFileCommitHash} from './git';

type CoreLibDef = {
  name: string,
  flowVersion: FlowVersion,
  path: string,
  testFilePaths: Array<string>,
};

export const getCoreDefs = async (): Promise<Array<CoreLibDef>> => {
  const definitionsDir = path.join(getCacheRepoDir(), 'definitions');
  const coreDefsDirPath = path.join(definitionsDir, 'core');

  const dirItems = await fs.readdir(coreDefsDirPath);
  const errors = [];
  const proms = dirItems.map(async itemName => {
    // If a user opens definitions dir in finder it will create `.DS_Store`
    // which will need to be excluded while parsing
    if (itemName === '.DS_Store') return;

    try {
      return await getSingleCoreDef(itemName, coreDefsDirPath);
    } catch (e) {
      errors.push(e);
    }
  });

  const settled = await Promise.all(proms);
  if (errors.length) {
    throw errors;
  }
  return [...settled].filter(Boolean);
};

const getSingleCoreDef = async (defName, coreDefPath) => {
  const itemPath = path.join(coreDefPath, defName);
  const itemStat = await fs.stat(itemPath);
  if (itemStat.isDirectory()) {
    // itemPath must be an env dir
    return await extractLibDefsFromNpmPkgDir(itemPath, defName);
  } else {
    throw new ValidationError(
      `Expected only directories to be present in this directory.`,
    );
  }
};

async function extractLibDefsFromNpmPkgDir(
  envDirPath: string,
  defName: string,
): Promise<Array<CoreLibDef>> {
  const coreDefFileName = `${defName}.js`;
  const envDirItems = await fs.readdir(envDirPath);

  const commonTestFiles = [];
  const parsedFlowDirs: Array<[string, FlowVersion]> = [];
  envDirItems.forEach(envDirItem => {
    const envDirItemPath = path.join(envDirPath, envDirItem);

    const envDirItemStat = fs.statSync(envDirItemPath);
    if (envDirItemStat.isFile()) {
      const isValidTestFile = TEST_FILE_NAME_RE.test(envDirItem);
      if (isValidTestFile) commonTestFiles.push(envDirItemPath);
    } else if (envDirItemStat.isDirectory()) {
      const parsedFlowDir = parseFlowDirString(envDirItem);
      parsedFlowDirs.push([envDirItemPath, parsedFlowDir]);
    } else {
      throw new ValidationError('Unexpected directory item');
    }
  });

  if (!disjointFlowVersionsAll(parsedFlowDirs.map(([_, ver]) => ver))) {
    throw new ValidationError('Flow versions not disjoint!');
  }

  if (parsedFlowDirs.length === 0) {
    throw new ValidationError('No libdef files found!');
  }

  const coreDefs = [];
  await Promise.all(
    parsedFlowDirs.map(async ([flowDirPath, flowVersion]) => {
      const testFilePaths = [...commonTestFiles];
      let libDefFilePath: null | string = null;
      (await fs.readdir(flowDirPath)).forEach(flowDirItem => {
        const flowDirItemPath = path.join(flowDirPath, flowDirItem);
        const flowDirItemStat = fs.statSync(flowDirItemPath);
        if (flowDirItemStat.isFile()) {
          if (path.extname(flowDirItem) === '.swp') {
            return;
          }

          // Is this the libdef file?
          if (flowDirItem === coreDefFileName) {
            libDefFilePath = path.join(flowDirPath, flowDirItem);
            return;
          }

          // Is this a test file?
          const isValidTestFile = TEST_FILE_NAME_RE.test(flowDirItem);

          if (isValidTestFile) {
            testFilePaths.push(flowDirItemPath);
            return;
          }

          throw new ValidationError(
            `Unexpected file: ${coreDefFileName}. This directory can only contain test files ` +
              `or a libdef file named \`${coreDefFileName}\`.`,
          );
        } else {
          throw new ValidationError(
            `Unexpected sub-directory. This directory can only contain test ` +
              `files or a libdef file named \`${coreDefFileName}\`.`,
          );
        }
      });

      if (libDefFilePath === null) {
        libDefFilePath = path.join(flowDirPath, coreDefFileName);
        throw new ValidationError(
          `No libdef file found. Looking for a file named ${coreDefFileName}`,
        );
      }

      coreDefs.push({
        name: defName,
        flowVersion,
        path: libDefFilePath,
        testFilePaths,
      });
    }),
  );

  return coreDefs;
}

export const findCoreDef = (
  defName: string,
  flowVersion: FlowVersion,
  useCacheUntil: number,
  coreDefs: Array<CoreLibDef>,
): CoreLibDef | void => {
  return coreDefs.filter(def => {
    let filterMatch = def.name === defName;

    if (!filterMatch) {
      return false;
    }

    switch (def.flowVersion.kind) {
      case 'all':
        return true;
      case 'ranged':
      case 'specific':
        return semver.satisfies(
          flowVersionToSemver(flowVersion),
          flowVersionToSemver(def.flowVersion),
        );
      default:
        return true;
    }
  })[0];
};

export async function getCoreDefVersionHash(
  repoDirPath: string,
  libDef: CoreLibDef,
): Promise<string> {
  const latestCommitHash = await findLatestFileCommitHash(
    repoDirPath,
    path.relative(repoDirPath, libDef.path),
  );
  return `${latestCommitHash.substr(0, 10)}/${
    libDef.name
  }/flow_${flowVersionToSemver(libDef.flowVersion)}`;
}
