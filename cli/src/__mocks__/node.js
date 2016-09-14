// @flow

// Mocks for the node modules
import * as node_child_process from 'child_process';
const node_fs = jest.genMockFromModule('fs');
import * as node_https from "https";
import * as node_os from "os";
import * as node_path from 'path';
import * as node_url from "url";

export const child_process = node_child_process;
export const fs = {
  // This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
  mockFiles: {},

  __setMockFiles: function(newMockFiles: { [key:string]: string } ) {
    fs.mockFiles = newMockFiles;
  },

  createReadStream: node_fs.createReadStream,
  createWriteStream: node_fs.createWriteStream,
  exists: jest.fn(async (dirOrFilePath: string) : Promise<boolean> => {
    return new Promise((resolve) => {
      process.nextTick(() => resolve(fs.mockFiles[dirOrFilePath] !== undefined));
    });
  }),
  mkdir: node_fs.mkdir,
  readdir: node_fs.readdir,
  readFile: jest.fn(async (filePath: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      process.nextTick(()=>{
        if(fs.mockFiles[filePath]) { 
          resolve(fs.mockFiles[filePath]); 
        } else {
          reject(new Error(`ENOENT: no such file or directory, open '${filePath}'`)); 
        }
      });
    });
  }),
  rename: node_fs.rename,
  rmdir: node_fs.rmdir,
  stat: node_fs.stat,
  statSync: node_fs.statSync,
  Stats: node_fs.Stats,
  unlink: node_fs.unlink,
  writeFile: node_fs.writeFile,
};

export const https = node_https;
export const os = node_os;
export const path = node_path;
export const url = node_url;
