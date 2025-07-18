// @flow

var fs = require("fs");

/* readFile */

fs.readFile("file.exp", (_, data) => {
  (data : Buffer);
});

fs.readFile("file.exp", "blah", (_, data) => {
  (data : string);
});

fs.readFile("file.exp", { encoding: "blah" }, (_, data) => {
  (data : string);
});

fs.readFile("file.exp", {}, (_, data) => {
  (data : Buffer);
});

fs.readFile(0, {}, (_, data) => {
  (data : Buffer);
});

/* readFileSync */

(fs.readFileSync("file.exp") : Buffer);
// $FlowExpectedError[incompatible-cast]
(fs.readFileSync("file.exp") : string); // error

(fs.readFileSync("file.exp", "blah") : string);
// $FlowExpectedError[incompatible-cast]
(fs.readFileSync("file.exp", "blah") : Buffer); // error

(fs.readFileSync("file.exp", { encoding: "blah" }) : string);
// $FlowExpectedError[incompatible-cast]
(fs.readFileSync("file.exp", { encoding: "blah" }) : Buffer); // error

(fs.readFileSync("file.exp", {}) : Buffer);
// $FlowExpectedError[incompatible-cast]
(fs.readFileSync("file.exp", {}) : string); // error

/* write */

(fs.write(0, Buffer.alloc(0), 0, 0, 0, (err, bytesWritten, buffer) => {
  (err: ?ErrnoError);
  (bytesWritten: number);
  (buffer: Buffer);
}));

(fs.write(0, Buffer.alloc(0), 0, 0, (err, bytesWritten, buffer) => {
  (err: ?ErrnoError);
  (bytesWritten: number);
  (buffer: Buffer);
}));

(fs.write(0, Buffer.alloc(0), (err, bytesWritten, buffer) => {
  (err: ?ErrnoError);
  (bytesWritten: number);
  (buffer: Buffer);
}));

(fs.write(0, "test", 0, "utf8", (err, written, str) => {
  (err: ?ErrnoError);
  (written: number);
  (str: string);
}));

(fs.write(0, "test", 0, (err, written, str) => {
  (err: ?ErrnoError);
  (written: number);
  (str: string);
}));

(fs.write(0, "test", (err, written, str) => {
  (err: ?ErrnoError);
  (written: number);
  (str: string);
}));

/* open */

(fs.open("file.exp", "r", (err, fd) => {
  (err: ?ErrnoError);
  (fd: number);
}));

(fs.open("file.exp", "r", 0o666, (err, fd) => {
  (err: ?ErrnoError);
  (fd: number);
}));

/* readdir */

(fs.readdir("file.exp", (err, files) => {
  (err: ?ErrnoError);
  (files: Array<string>);
}): void);

(fs.readdir("file.exp", "utf8", (err, files) => {
  (err: ?ErrnoError);
  (files: Array<string>);
}): void);

(fs.readdir("file.exp", { encoding: "utf8" }, (err, files) => {
  (err: ?ErrnoError);
  (files: Array<string>);
}): void);

(fs.readdir("file.exp", { withFileTypes: true }, (err, files) => {
  (err: ?ErrnoError);
  (files: Array<fs.Dirent>);
}): void);

(fs.readdir("file.exp", { withFileTypes: false }, (err, files) => {
  (err: ?ErrnoError);
  (files: Array<string>);
}): void);

(fs.readdir("file.exp", { withFileTypes: true }, (err, files) => {
  (err: ?ErrnoError);
  // $FlowExpectedError[incompatible-cast]
  (files: Array<string>); // error
}): void);

(fs.readdir("file.exp", { encoding: "utf8", withFileTypes: true }, (err, files) => {
  (err: ?ErrnoError);
  (files: Array<fs.Dirent>);
}): void);

(fs.readdir("file.exp", { encoding: "utf8", withFileTypes: false }, (err, files) => {
  (err: ?ErrnoError);
  (files: Array<string>);
}): void);

/* readdirSync */

(fs.readdirSync("file.exp"): Array<string>);

(fs.readdirSync("file.exp", "utf8"): Array<string>);

(fs.readdirSync("file.exp", { encoding: "utf8" }): Array<string>);

(fs.readdirSync("file.exp", { withFileTypes: true }): Array<fs.Dirent>);

(fs.readdirSync("file.exp", { withFileTypes: false }): Array<string>);

// $FlowExpectedError[incompatible-cast]
(fs.readdirSync("file.exp", { withFileTypes: true }): Array<string>); // error

(fs.readdirSync("file.exp", { encoding: "utf8", withFileTypes: true }): Array<fs.Dirent>);

(fs.readdirSync("file.exp", { encoding: "utf8", withFileTypes: false }): Array<string>);

/* glob */
declare var boolVar: boolean;
(fs.globSync('some/path', {withFileTypes: true}): Array<fs.Dirent>);
(fs.globSync('some/path', {withFileTypes: false}): Array<string>);
(fs.globSync('some/path', {}): Array<string>);
(fs.globSync('some/path'): Array<string>);
(fs.globSync('some/path', {withFileTypes: boolVar}):
  | Array<string>
  | Array<fs.Dirent>);

(fs.globSync('some/path', {
  withFileTypes: true,
  exclude: (file: fs.Dirent) => false,
}): Array<fs.Dirent>);
(fs.globSync('some/path', {
  withFileTypes: false,
  exclude: (file: string) => false,
}): Array<string>);
(fs.globSync('some/path', {
  exclude: (file: string) => false,
}): Array<string>);

(fs.promises.glob('some/path', {
  withFileTypes: true,
}): AsyncIterator<fs.Dirent>);
(fs.promises.glob('some/path', {withFileTypes: false}): AsyncIterator<string>);
(fs.promises.glob('some/path', {}): AsyncIterator<string>);
(fs.promises.glob('some/path'): AsyncIterator<string>);
(fs.promises.glob('some/path', {withFileTypes: boolVar}):
  | AsyncIterator<string>
  | AsyncIterator<fs.Dirent>);


// $FlowExpectedError - returns Dirents
(fs.globSync('some/path', {withFileTypes: true}): Array<string>);
// $FlowExpectedError - returns strings
(fs.globSync('some/path', {withFileTypes: false}): Array<fs.Dirent>);
// $FlowExpectedError - returns strings
(fs.globSync('some/path', {}): Array<fs.Dirent>);
// $FlowExpectedError - returns strings
(fs.globSync('some/path'): Array<fs.Dirent>);
// $FlowExpectedError - returns strings or Dirents
(fs.globSync('some/path', {withFileTypes: boolVar}): Array<string>);
// $FlowExpectedError - returns strings or Dirents
(fs.globSync('some/path', {withFileTypes: boolVar}): Array<fs.Dirent>);

(fs.globSync('some/path', {
  withFileTypes: true,
  // $FlowExpectedError - arg is a Dirent
  exclude: (file: string) => false,
}): Array<fs.Dirent>);
(fs.globSync('some/path', {
  withFileTypes: false,
  // $FlowExpectedError - arg is a string
  exclude: (file: fs.Dirent) => false,
}): Array<string>);
(fs.globSync('some/path', {
  // $FlowExpectedError - arg is a string
  exclude: (file: fs.Dirent) => false,
}): Array<string>);

