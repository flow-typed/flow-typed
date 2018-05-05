// @flow
import octokitBuilder from '@octokit/rest';
import got from 'got';
import semver from 'semver';
import fs from 'fs-extra';
import yauzl from 'yauzl-promise';
import path from 'path';
import os from 'os';
import {child_process} from './node';

type Releases = {
  data: Array<{
    tag_name: string,
    assets: Array<{
      name: string,
      browser_download_url: string,
    }>,
  }>,
};

type Octokit = {
  repos: {
    getReleases(args: {
      owner: string,
      repo: string,
      page: number,
      per_page: number,
    }): Releases,
  },
};

const octokit: Octokit = octokitBuilder();

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

class Flow {
  _binPath: string;
  _version: string;
  constructor(binPath: string) {
    this._binPath = binPath;
    this._version = path.parse(binPath).name;
  }

  get version(): string {
    return this._version;
  }

  get binPath(): string {
    return this._binPath;
  }

  runTest(testDir: string) {
    return new Promise(res => {
      const child = child_process.exec(
        `${this._binPath} check --strip-root --all ${testDir}`,
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

const isWindows = os.type() === 'Windows_NT';
function createBinFilename(cacheDir, filename) {
  return isWindows
    ? path.resolve(cacheDir, `${filename}.exe`)
    : path.resolve(cacheDir, filename);
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
    throw new Error('Flow binary not found in zip file');
  }
  const readStream = await zipFile.openReadStream(entry);
  readStream.pipe(fs.createWriteStream(filepath));
  await zipFile.close();
  console.log(`'${flowname}' unzipped to cache`);
}

async function downloadBin(url, filepath, flowname) {
  console.log(`Start '${flowname}' downloading`);
  const response = await got(url, {encoding: null});
  console.log(`'${flowname}' downloaded`);
  await extractZip(response.body, filepath, flowname);
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

function filterActualVersions(releases, count, cacheDir) {
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
          filename: createBinFilename(cacheDir, release.tag_name),
          binUrl: getBinUrl(release.assets, release.tag_name),
        });
  }, []);
}

async function getActualVersions(count, cacheDir) {
  console.log('Fetch data from github');
  const dataFromGithub = await octokit.repos.getReleases({
    owner: 'facebook',
    repo: 'flow',
    page: 0,
    per_page: 100,
  });
  console.log('Data fetched');
  return filterActualVersions(dataFromGithub.data, count, cacheDir);
}

async function getCached(cacheLocation): Promise<Array<Flow>> {
  console.log(`Get data from cache`);
  const files: Array<string> = await fs.readdir(cacheLocation);
  return files.map(file => new Flow(path.resolve(cacheLocation, file)));
}

async function removeFile(binPath, filename): Promise<void> {
  try {
    await fs.unlink(binPath);
    console.log(`${filename} removed from cache`);
  } catch (_) {
    console.error(`Remove '${filename}' failed`);
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

let flows = null;
export async function getOrderedFlowBins(
  cacheDir: string,
  latestVersionsNumber: number,
): Promise<Array<Flow>> {
  if (flows) {
    return flows;
  }
  await fs.mkdirp(cacheDir);

  const [cached, actualVersions] = await Promise.all([
    getCached(cacheDir),
    getActualVersions(latestVersionsNumber, cacheDir),
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

  flows = nonCachedVersions.length ? await getCached(cacheDir) : cached;
  flows.sort((a, b) => (semver.lt(a.version, b.version) ? -1 : 1));
  return flows;
}
