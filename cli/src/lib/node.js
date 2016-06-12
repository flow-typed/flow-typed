// @flow

import * as node_child_process from 'child_process';
import * as node_fs from 'fs';
import * as node_https from "https";
import * as node_os from "os";
import * as node_path from 'path';
import * as node_url from "url";

export const child_process = node_child_process;
export const fs = {
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
