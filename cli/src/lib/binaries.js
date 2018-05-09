// @flow
import {getGitHubClient} from './github';
import {child_process} from './node';
import os from 'os';
import got from 'got';
import semver from 'semver';
import fs from 'fs-extra';
import yauzl from 'yauzl-promise';
import path from 'path';

const githubClient = getGitHubClient();

function getOsType() {
  switch (os.type()) {
    case 'Linux':
      return 'linux64';
    case 'Darwin':
      return 'osx';
    case 'Windows_NT':
      return 'win64';

    default:
      throw new Error('Unsupported os.type()! ' + os.type());
  }
}

const isWindows = os.type() === 'Windows_NT';
export class Flow {
  binPath: string;
  version: string;

  constructor(binPath: string) {
    this.binPath = binPath;
    // linux/macos flow bins has no ext
    this.version = isWindows
      ? path.parse(binPath).name
      : path.parse(binPath).base;
  }

  runTests(
    testDirPath: string,
  ): Promise<{
    stdErrOut: string,
    errCode: ?number,
    execError: ?Error,
  }> {
    return new Promise(res => {
      const child = child_process.exec(
        `${this.binPath} check --strip-root --all ${testDirPath}`,
      );

      let stdErrOut = '';
      child.stdout.on('data', data => (stdErrOut += data));
      child.stderr.on('data', data => (stdErrOut += data));

      child.on('error', execError => {
        res({stdErrOut, errCode: null, execError});
      });

      child.on('close', errCode => {
        res({stdErrOut, errCode, execError: null});
      });
    });
  }
}

function createBinFilename(binRoot, filename) {
  return isWindows
    ? path.resolve(binRoot, `${filename}.exe`)
    : path.resolve(binRoot, filename);
}

function saveFileFromStream(stream, filepath) {
  return new Promise(res => {
    stream.pipe(
      fs.createWriteStream(filepath).on('close', () => {
        res();
      }),
    );
  });
}

async function extractZip(buffer, filepath, flowname) {
  console.log(`Start unzipping '${flowname}' file`);
  const zipFile = await yauzl.fromBuffer(buffer);
  let entry = null;
  while ((entry = await zipFile.readEntry())) {
    if (entry.fileName.startsWith('flow/flow')) {
      break;
    }
  }
  if (!entry) {
    throw new Error('flow binary not found in zip file');
  }
  const readStream = await zipFile.openReadStream(entry);
  await saveFileFromStream(readStream, filepath);
  await zipFile.close();
  console.log(`'${flowname}' unzipped to cache`);
}

async function downloadBin(url, filepath, flowname) {
  console.log(`start '${flowname}' downloading`);
  const response = await got(url, {encoding: null});
  console.log(`'${flowname}' downloaded`);
  await extractZip(response.body, filepath, flowname);
  if (!isWindows) {
    await child_process.execP(`chmod 755 ${filepath}`);
  }
  return new Flow(filepath);
}

const osType = getOsType();
function createFileName(version) {
  return `flow-${osType}-${version}.zip`;
}

function getBinUrl(assets, version) {
  const filename = createFileName(version);
  for (const asset of assets) {
    if (asset.name === filename) {
      return asset.browser_download_url;
    }
  }
}

function filterActualVersions(releases, count, binRoot) {
  function getKey(version) {
    const major = semver.major(version);
    const minor = semver.minor(version);
    return `${major}.${minor}`;
  }

  return releases.reduce((res, release) => {
    if (res.length === count) {
      return res;
    }
    const key = getKey(release.tag_name);
    return res.length && res[res.length - 1].key === key
      ? res
      : res.concat({
          key: key,
          version: release.tag_name,
          filename: createBinFilename(binRoot, release.tag_name),
          binUrl: getBinUrl(release.assets, release.tag_name),
        });
  }, []);
}

async function getActualVersions(count, binRoot) {
  console.log('fetch data from github');
  const dataFromGithub = await githubClient.repos.getReleases({
    owner: 'facebook',
    repo: 'flow',
    page: 0,
    per_page: 100,
  });
  console.log('data fetched');
  return filterActualVersions(dataFromGithub.data, count, binRoot);
}

async function getCached(cacheLocation) {
  console.log(`get data from cache`);
  const files: Array<string> = await fs.readdir(cacheLocation);
  return files.map(file => new Flow(path.resolve(cacheLocation, file)));
}

async function removeFile(binPath, filename) {
  try {
    await fs.unlink(binPath);
    console.log(`${filename} removed from cache`);
  } catch (_) {
    console.error(`remove '${filename}' failed`);
  }
}

function removeOutdatedVersionsFromCache(flows) {
  return Promise.all(flows.map(f => removeFile(f.binPath, f.version)));
}

function downloadActualVersionsToCache(versions) {
  return Promise.all(
    versions.map(v => downloadBin(v.binUrl, v.filename, v.version)),
  );
}

let memoizedFlowBinaries = null;
export async function getFlowBinaries(binRoot: string, count: number) {
  if (memoizedFlowBinaries) {
    return memoizedFlowBinaries;
  }
  await fs.mkdirp(binRoot);

  const [cached, actualVersions] = await Promise.all([
    getCached(binRoot),
    getActualVersions(count, binRoot),
  ]);

  const nonCachedVersions = actualVersions.filter(v =>
    cached.every(c => c.version !== v.version),
  );
  const outdatedVersions = cached.filter(c =>
    actualVersions.every(v => v.version !== c.version),
  );

  await Promise.all([
    removeOutdatedVersionsFromCache(outdatedVersions),
    downloadActualVersionsToCache(nonCachedVersions),
  ]);

  memoizedFlowBinaries = nonCachedVersions.length
    ? await getCached(binRoot)
    : cached;
  return memoizedFlowBinaries;
}
