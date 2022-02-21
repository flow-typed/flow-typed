// @flow

import * as node_child_process from 'child_process';
import * as node_https from 'https';
import * as node_os from 'os';
import * as node_path from 'path';
import * as node_url from 'url';
import fsExtra from 'fs-extra';

type execP$Result = {stdout: Buffer, stderr: Buffer};
type spawnP$Result = {stdout: string, stderr: string, exitCode: number};

export const child_process = {
  exec: node_child_process.exec,
  execP: function(
    command: string,
    options?: child_process$execOpts,
  ): Promise<execP$Result> {
    return new Promise((res, rej) => {
      node_child_process.exec(command, options, (err, stdout, stderr) => {
        if (err) {
          rej(err);
        } else {
          res({stdout: Buffer.from(stdout), stderr: Buffer.from(stderr)});
        }
      });
    });
  },
  execFileP: function(
    command: string,
    argsOrOptions?: Array<string> | child_process$execFileOpts,
    options?: child_process$execFileOpts,
  ): Promise<execP$Result> {
    let _args: Array<string>;
    let _opts: child_process$execFileOpts;

    if (Array.isArray(argsOrOptions)) {
      _args = argsOrOptions;
      _opts = options ? options : {};
    } else {
      _args = [];
      _opts = argsOrOptions ? argsOrOptions : {};
    }

    return new Promise((res, rej) => {
      node_child_process.execFile(
        command,
        _args,
        _opts,
        (err, stdout, stderr) => {
          if (err) {
            rej(err);
          } else {
            res({
              stdout: typeof stdout === 'string' ? Buffer.from(stdout) : stdout,
              stderr: typeof stderr === 'string' ? Buffer.from(stderr) : stderr,
            });
          }
        },
      );
    });
  },
  spawnP: function(
    command: string,
    args?: Array<string>,
    options?: child_process$spawnOpts,
  ): Promise<spawnP$Result> {
    return new Promise((res, rej) => {
      const process = node_child_process.spawn(command, args, options);
      let stderr = '';
      let stdout = '';
      process.stdout.on('data', chunk => (stdout += chunk));
      process.stderr.on('data', chunk => (stderr += chunk));
      process.on('close', exitCode => {
        if (exitCode === 0) {
          res({stderr, stdout, exitCode});
        } else {
          rej({stderr, stdout, exitCode});
        }
      });
    });
  },
};

export const fs = {
  appendFile: fsExtra.appendFile,
  close: fsExtra.close,
  copy: fsExtra.copy,
  copyFile: fsExtra.copyFile,
  createReadStream: fsExtra.createReadStream,
  createWriteStream: fsExtra.createWriteStream,
  exists: fsExtra.exists,
  mkdir: fsExtra.mkdir,
  open: fsExtra.open,
  readdir: fsExtra.readdir,
  readFile: fsExtra.readFile,
  readFileSync: fsExtra.readFileSync,
  readJson: fsExtra.readJson,
  rename: fsExtra.rename,
  rmdir: fsExtra.rmdir,
  stat: fsExtra.stat,
  statSync: fsExtra.statSync,
  Stats: fsExtra.Stats,
  unlink: fsExtra.unlink,
  writeFile: fsExtra.writeFile,
  writeJson: fsExtra.writeJson,
};
export const https = node_https;
export const os = node_os;
export const path = node_path;
export const url = node_url;
