// @flow

import * as node_fs from 'fs';
import * as node_https from "https";
import * as node_path from 'path';

export const fs = {
  exists: async function(path: string): Promise<boolean> {
    let exists = true;
    try { await fs.stat(path); } catch(e) { exists = false; }
    return exists;
  },
  readdir: function(path: string): Promise<Array<string>> {
    return new Promise((res, rej) => {
      node_fs.readdir(path, (err, items) => {
        if (err) {
          rej(err);
        } else {
          res(items);
        }
      });
    });
  },
  stat: function(path: string): Promise<node_fs.Stats> {
    return new Promise((res, rej) => {
      node_fs.stat(path, (err, stats) => {
        if (err) {
          throw err;
        } else {
          res(stats);
        }
      });
    });
  },
};
export const https = node_https;
export const path = node_path;
