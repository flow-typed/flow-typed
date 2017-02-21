// @flow

import * as node_child_process from 'child_process';
import * as node_fs from 'fs';
import * as node_https from "https";
import * as node_os from "os";
import * as node_path from 'path';
import * as node_url from "url";

type execP$Result = {stdout: Buffer, stderr: Buffer};
type spawnP$Result = {stdout: string, stderr: string, exitCode: number};

export const child_process = {
  exec: node_child_process.exec,
  execP: function(
    command: string,
    options?: child_process$execOpts
  ): Promise<execP$Result> {
    return new Promise((res, rej) => {
      node_child_process.exec(command, options, (err, stdout, stderr) => {
        if (err) {
          rej(err);
        } else {
          res( {stdout: new Buffer(stdout), stderr: new Buffer(stderr), } );
        }
      });
    });
  },
  execFileP: function(
    command: string,
    argsOrOptions?: Array<string> | child_process$execFileOpts,
    options?: child_process$execFileOpts
  ): Promise<execP$Result> {
    let _args: Array<string>;
    let _opts: child_process$execFileOpts;

    if(Array.isArray(argsOrOptions)) {
      _args = argsOrOptions;
      _opts = (options) ? options : {};
    } else {
      _args = [];
      _opts = (argsOrOptions) ? argsOrOptions : {};
    }

    return new Promise((res, rej) => {
      node_child_process.execFile(command, _args, _opts, (err, stdout, stderr) => {
        if (err) { rej(err); } else { res( {stdout: stdout, stderr: stderr, } ); }
      });
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
  }
};

export const fs = {
  appendFile: function(path: string, data: string): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.appendFile(path, data, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  close: function(fd: number): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.close(fd, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  createReadStream: node_fs.createReadStream,
  createWriteStream: node_fs.createWriteStream,
  exists: async function(path: string): Promise<boolean> {
    let exists = true;
    try { await fs.stat(path); } catch(e) { exists = false; }
    return exists;
  },
  mkdir: function(path: string, mode?: number): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.mkdir(path, mode, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  open: function(path: string, flags: string, mode?: number): Promise<number> {
    return new Promise((res, rej) => {
      node_fs.open(path, flags, mode, (err, fd) => {
        if (err) { rej(err); } else { res(fd); }
      });
    });
  },
  readdir: function(path: string): Promise<Array<string>> {
    return new Promise((res, rej) => {
      node_fs.readdir(path, (err, items) => {
        if (err) { rej(err); } else { res(items); }
      });
    });
  },
  readFile: function(f: string, opts?: Object): Promise<Buffer> {
    return new Promise((res, rej) => {
      node_fs.readFile(f, opts || {}, (err, data) => {
        if (err) { rej(err); } else { res(data); }
      });
    });
  },
  rename: function(oldPath: string, newPath: string): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.rename(oldPath, newPath, function(err) {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  rmdir: function(path: string): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.rmdir(path, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  stat: function(path: string): Promise<fs.Stats> {
    return new Promise((res, rej) => {
      node_fs.stat(path, (err, stats) => {
        if (err) { rej(err); } else { res(stats); }
      });
    });
  },
  statSync: node_fs.statSync,
  Stats: node_fs.Stats,
  unlink: function(path: string): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.unlink(path, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
  writeFile: function(f: string, data: string, opts?: Object): Promise<void> {
    return new Promise((res, rej) => {
      node_fs.writeFile(f, data, opts, (err) => {
        if (err) { rej(err); } else { res(); }
      });
    });
  },
};
export const https = node_https;
export const os = node_os;
export const path = node_path;
export const url = node_url;
