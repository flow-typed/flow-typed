// @flow strict

import { describe, it } from "flow-typed-test";
import fs from "fs-extra";

import type { ReadOptions, WriteOptions } from "fs-extra";

let src = '';
let dest = '';
let file = '';
let dir = '';
let path = '';
let data = '';
let object = {};
let errorCallback = (err: Error) => {};
let readOptions: ReadOptions = {
  reviver: {}
};
let writeOptions: WriteOptions = {
  replacer: {}
};

describe("The `copy` function", () => {
  it("should validate on proper usage", () => {
    fs.copy(src, dest).then(() => {});
    fs.copy(src, dest, { overwrite: true }).then(() => {});
    fs.copy(src, dest, errorCallback);
    fs.copy(
      src,
      dest,
      { filter: (src: string, dest: string): boolean => false },
      errorCallback
    );
    fs.copy(
      src,
      dest,
      {
        overwrite: true,
        preserveTimestamps: true,
        filter: (src: string, dest: string): Promise<boolean> =>
          Promise.resolve(false)
      },
      errorCallback
    );
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.copy(src).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.copy(src);
    // $FlowExpectedError[incompatible-call]
    fs.copy(
      src,
      dest,
      {
        filter: () => []
      },
      errorCallback
    );
  });
});

describe("The `copySync` function", () => {
  it("should validate on proper usage", () => {
    fs.copySync(src, dest);
    fs.copySync(src, dest, {
      filter: (src: string, dest: string): boolean => false
    });
    fs.copySync(src, dest, {
      overwrite: true,
      preserveTimestamps: true,
      filter: (src: string, dest: string): boolean => false
    });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.copySync(src);
    // $FlowExpectedError[incompatible-call]
    fs.copy(src).then(() => {});
    fs.copySync(src, dest, {
      // $FlowExpectedError[incompatible-call]
      filter: (src: string, dest: string): Promise<boolean> =>
        Promise.resolve(false)
    });
  });
});

describe("The `emptyDir` function", () => {
  it("should validate on proper usage", () => {
    fs.emptyDir(path).then(() => {});
    fs.emptyDir(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.emptyDir().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.emptyDir(path, true);
  });
});

describe("The `emptyDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.emptyDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.emptyDirSync();
    // $FlowExpectedError[incompatible-use]
    fs.emptyDirSync(path).then(() => {});
  });
});

describe("The `ensureFile` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFile(path).then(() => {});
    fs.ensureFile(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureFile().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.ensureFile(path, true);
  });
});

describe("The `ensureFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFileSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureFileSync();
    // $FlowExpectedError[incompatible-use]
    fs.ensureFileSync(path).then(() => {});
  });
});

describe("The `ensureDir` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDir(path).then(() => {});
    fs.ensureDir(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureDir().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.ensureDir(path, true);
  });
});

describe("The `createReadStream` function", () => {
  it("take in string and options object", () => {
    fs.createReadStream('str', {});
    // $FlowExpectedError[incompatible-call] number not allowed
    fs.createReadStream(123, {});
    // $FlowExpectedError[incompatible-call] options should be object
    fs.createReadStream('str', 123);
  });
});

describe("The `createWriteStream` function", () => {
  it("take in string and options object", () => {
    fs.createWriteStream('str', {});
    // $FlowExpectedError[incompatible-call] number not allowed
    fs.createWriteStream(123, {});
    // $FlowExpectedError[incompatible-call] options should be object
    fs.createWriteStream('str', 123);
  });
});

describe("The `ensureDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureDirSync();
    // $FlowExpectedError[incompatible-use]
    fs.ensureDirSync(path).then(() => {});
  });
});

describe("The `exists` function", () => {
  it("take in string", () => {
    (fs.exists('str'): Promise<boolean>);
    // $FlowExpectedError[incompatible-call] number not allowed
    fs.exists(123);

    fs.exists('str', (exists) => {(exists: boolean)})
  });
});

describe("The `ensureLink` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureLink(path, path).then(() => {});
    fs.ensureLink(path, path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureLink().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.ensureLink(path).then(() => {});
    fs.ensureLink(path, path).then(ret => {
      // $FlowExpectedError[incompatible-cast]
      (ret: boolean);
    });
    // $FlowExpectedError[incompatible-call]
    fs.ensureLink(path, path, true);
  });
});

describe("The `ensureLinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureLinkSync(path, path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureLinkSync();
    // $FlowExpectedError[incompatible-call]
    fs.ensureLinkSync(path);
    // $FlowExpectedError[incompatible-use]
    fs.ensureLinkSync(path, path).then(() => {});
  });
});

describe("The `ensureSymlink` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureSymlink(path, path).then(() => {});
    fs.ensureSymlink(path, path, "file").then(() => {});
    fs.ensureSymlink(path, path, errorCallback);
    fs.ensureSymlink(path, path, "file", errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlink(path).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlink(path, path, "test").then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlink(path, path, true);
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlink(path, path, "file", true);
  });
});

describe("The `ensureSymlinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureSymlinkSync(path, path);
    fs.ensureSymlinkSync(path, path, "file");
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlinkSync(path);
    // $FlowExpectedError[incompatible-call]
    fs.ensureSymlinkSync(path, path, "test");
    // $FlowExpectedError[incompatible-use]
    fs.ensureSymlinkSync(path, path).then(() => {});
  });
});

describe("The `mkdirp` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir).then(() => {});
    fs.mkdirp(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.mkdirp().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.mkdirp(dir, true);
  });
});

describe("The `mkdirpSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.mkdirpSync();
    // $FlowExpectedError[incompatible-use]
    fs.mkdirpSync(dir).then(() => {});
  });
});

describe("The `mkdirs` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirs(dir).then(() => {});
    fs.mkdirs(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.mkdirs().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.mkdirs(dir, true);
  });
});

describe("The `mkdirsSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirsSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.mkdirsSync();
    // $FlowExpectedError[incompatible-use]
    fs.mkdirsSync(dir).then(() => {});
  });
});

describe("The `move` function", () => {
  it("should validate on proper usage", () => {
    fs.move(src, dest).then(() => {});
    fs.move(src, dest, {}).then(() => {});
    fs.move(src, dest, { overwrite: true }).then(() => {});
    fs.move(src, dest, {}, () => {});
    fs.move(src, dest, () => {});
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.move().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.move(src).then(() => {});
    fs.move(src, dest).then(ret => {
      // $FlowExpectedError[incompatible-cast]
      (ret: boolean);
    });
    // $FlowExpectedError[incompatible-call]
    fs.move(src, dest, { overwrite: 123 }).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.move({}, () => {});
    // $FlowExpectedError[incompatible-call]
    fs.move(() => {});
  });
});

describe("The `moveSync` function", () => {
  it("should validate on proper usage", () => {
    fs.moveSync(src, dest);
    fs.moveSync(src, dest, {});
    fs.moveSync(src, dest, { overwrite: true });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.moveSync();
    // $FlowExpectedError[incompatible-call]
    fs.moveSync(src);
    // $FlowExpectedError[incompatible-call]
    fs.moveSync(src, dest, true);
    // $FlowExpectedError[incompatible-call]
    fs.moveSync(src, dest, { overwrite: 123 });
    // $FlowExpectedError[incompatible-use]
    fs.moveSync(src, dest).then(() => {});
  });
});

describe("The `outputFile` function", () => {
  it("should validate on proper usage", () => {
    fs.outputFile(file, data).then(() => {});
    fs.outputFile(file, data, { mode: 1 }).then(() => {});
    fs.outputFile(file, data, errorCallback);
    fs.outputFile(file, data, { mode: 1 }, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.outputFile().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.outputFile(file, data, { mode: true }).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.outputFile(file, data, true);
    // $FlowExpectedError[incompatible-call]
    fs.outputFile(file, data, { mode: true }, errorCallback);
  });
});

describe("The `outputFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.outputFileSync(file, data);
    fs.outputFileSync(file, data, { mode: 1 });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.outputFileSync();
    // $FlowExpectedError[incompatible-use]
    fs.outputFileSync(file, data).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.outputFileSync(file, data, { mode: true });
  });
});

describe("The `outputJson` function", () => {
  it("should validate on proper usage", () => {
    fs.outputJson(file, data, {
      spaces: 2
    }).then(() => {});
    fs.outputJSON(file, data, {
      spaces: 2
    }).then(() => {});
    fs.outputJson(
      file,
      data,
      {
        spaces: 2
      },
      errorCallback
    );
    fs.outputJSON(
      file,
      data,
      {
        spaces: 2
      },
      errorCallback
    );
    fs.outputJson(file, data, errorCallback);
    fs.outputJSON(file, data, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.outputJson().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.outputJSON().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.outputJson(
      file,
      data,
      {
        spaces: true
      },
      errorCallback
    );
    // $FlowExpectedError[incompatible-call]
    fs.outputJSON(
      file,
      data,
      {
        spaces: true
      },
      errorCallback
    );
    // $FlowExpectedError[incompatible-call]
    fs.outputJson(file, data, true);
    // $FlowExpectedError[incompatible-call]
    fs.outputJSON(file, data, true);
  });
});

describe("The `outputJsonSync` function", () => {
  it("should validate on proper usage", () => {
    fs.outputJsonSync(file, data);
    fs.outputJsonSync(file, data, writeOptions);
    fs.outputJSONSync(file, data);
    fs.outputJSONSync(file, data, writeOptions);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.outputJsonSync();
    // $FlowExpectedError[incompatible-call]
    fs.outputJsonSync(file, data, true);
    // $FlowExpectedError[incompatible-call]
    fs.outputJSONSync();
    // $FlowExpectedError[incompatible-call]
    fs.outputJSONSync(file, data, true);
    // $FlowExpectedError[incompatible-use]
    fs.outputJsonSync(file, data, writeOptions).then(() => {});
    // $FlowExpectedError[incompatible-use]
    fs.outputJSONSync(file, data, writeOptions).then(() => {});
  });
});

describe("The `pathExists` function", () => {
  it("should validate on proper usage", () => {
    fs.pathExists(path).then(exists => {
      (exists: boolean);
    });
    fs.pathExists(path, (err, exists) => {
      (err: Error);
      (exists: boolean);
    });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.pathExists();
    fs.pathExists(path, (err, exists) => {
      // $FlowExpectedError[incompatible-cast]
      (err: boolean);
      // $FlowExpectedError[incompatible-cast]
      (exists: string);
    });
  });
});

describe("The `pathExistsSync` function", () => {
  it("should validate on proper usage", () => {
    let exists: boolean = fs.pathExistsSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.pathExistsSync();
    // $FlowExpectedError[prop-missing]
    fs.pathExistsSync(path).then(() => {});
    // $FlowExpectedError[incompatible-type]
    let exists: string = fs.pathExistsSync(path);
  });
});

describe("The `readJson` function", () => {
  it("should validate on proper usage", () => {
    fs.readJson(file).then(() => {});
    fs.readJson(file, readOptions).then(() => {});
    fs.readJson(file, (err, jsonObject) => {
      (err: Error);
    });
    fs.readJson(file, readOptions, (err, jsonObject) => {
      (err: Error);
    });
    fs.readJSON(file, (err, jsonObject) => {
      (err: Error);
    });
    fs.readJSON(file, readOptions, (err, jsonObject) => {
      (err: Error);
    });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.readJson().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.readJSON().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.readJson(file, true).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.readJSON(file, true).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.readJson(file, true, false);
    // $FlowExpectedError[incompatible-call]
    fs.readJSON(file, true, false);
    fs.readJson(file, readOptions, (err, jsonObject) => {
      // $FlowExpectedError[incompatible-cast]
      (err: boolean);
    });
    fs.readJSON(file, readOptions, (err, jsonObject) => {
      // $FlowExpectedError[incompatible-cast]
      (err: boolean);
    });
  });
});

describe("The `readJsonSync` function", () => {
  it("should validate on proper usage", () => {
    fs.readJsonSync(file);
    fs.readJSONSync(file);
    fs.readJsonSync(file, readOptions);
    fs.readJSONSync(file, readOptions);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.readJsonSync();
    // $FlowExpectedError[incompatible-call]
    fs.readJSONSync();
    // $FlowExpectedError[incompatible-call]
    fs.readJsonSync(file, true);
    // $FlowExpectedError[incompatible-call]
    fs.readJSONSync(file, true);
  });
});

describe("The `remove` function", () => {
  it("should validate on proper usage", () => {
    fs.remove(dir, errorCallback);
    fs.remove(dir).then(() => {});
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.remove();
    // $FlowExpectedError[incompatible-call]
    fs.remove(true);
  });
});

describe("The `removeSync` function", () => {
  it("should validate on proper usage", () => {
    fs.removeSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.removeSync();
    // $FlowExpectedError[incompatible-call]
    fs.removeSync(true);
    // $FlowExpectedError[incompatible-call]
    // $FlowExpectedError[incompatible-use]
    fs.removeSync().then(() => {});
  });
});

describe("The `writeJson` function", () => {
  it("should validate on proper usage", () => {
    fs.writeJson(file, object).then(() => {});
    fs.writeJSON(file, object).then(() => {});
    fs.writeJson(file, object, errorCallback);
    fs.writeJson(file, object, writeOptions, errorCallback);
    fs.writeJSON(file, object, errorCallback);
    fs.writeJSON(file, object, writeOptions, errorCallback);
    fs.writeJson(file, object, writeOptions).then(() => {});
    fs.writeJSON(file, object, writeOptions).then(() => {});
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.writeJson().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.writeJSON().then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.writeJson(file, object, true, errorCallback);
    // $FlowExpectedError[incompatible-call]
    fs.writeJSON(file, object, true, errorCallback);
    // $FlowExpectedError[incompatible-use]
    fs.writeJson(file, object, writeOptions, errorCallback).then(() => {});
    // $FlowExpectedError[incompatible-use]
    fs.writeJSON(file, object, writeOptions, errorCallback).then(() => {});
  });
});

describe("The `writeJsonSync` function", () => {
  it("should validate on proper usage", () => {
    fs.writeJsonSync(file, object);
    fs.writeJSONSync(file, object, writeOptions);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError[incompatible-call]
    fs.writeJsonSync();
    // $FlowExpectedError[incompatible-call]
    fs.writeJsonSync(true);
    // $FlowExpectedError[incompatible-use]
    fs.writeJsonSync(file, object).then(() => {});
    // $FlowExpectedError[incompatible-call]
    fs.writeJSONSync();
    // $FlowExpectedError[incompatible-call]
    fs.writeJSONSync(true);
    // $FlowExpectedError[incompatible-use]
    fs.writeJSONSync(file, object).then(() => {});
  });
});
