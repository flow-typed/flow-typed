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
    // $FlowExpectedError
    fs.copy(src).then(() => {});
    // $FlowExpectedError
    fs.copy(src);
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.copySync(src);
    // $FlowExpectedError
    fs.copy(src).then(() => {});
    fs.copySync(src, dest, {
      // $FlowExpectedError
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
    // $FlowExpectedError
    fs.emptyDir().then(() => {});
    // $FlowExpectedError
    fs.emptyDir(path, true);
  });
});

describe("The `emptyDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.emptyDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.emptyDirSync();
    // $FlowExpectedError
    fs.emptyDirSync(path).then(() => {});
  });
});

describe("The `ensureFile` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFile(path).then(() => {});
    fs.ensureFile(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureFile().then(() => {});
    // $FlowExpectedError
    fs.ensureFile(path, true);
  });
});

describe("The `ensureFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFileSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureFileSync();
    // $FlowExpectedError
    fs.ensureFileSync(path).then(() => {});
  });
});

describe("The `ensureDir` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDir(path).then(() => {});
    fs.ensureDir(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureDir().then(() => {});
    // $FlowExpectedError
    fs.ensureDir(path, true);
  });
});

describe("The `createReadStream` function", () => {
  it("take in string and options object", () => {
    fs.createReadStream('str', {});
    // $FlowExpectedError number not allowed
    fs.createReadStream(123, {});
    // $FlowExpectedError options should be object
    fs.createReadStream('str', 123);
  });
});

describe("The `createWriteStream` function", () => {
  it("take in string and options object", () => {
    fs.createWriteStream('str', {});
    // $FlowExpectedError number not allowed
    fs.createWriteStream(123, {});
    // $FlowExpectedError options should be object
    fs.createWriteStream('str', 123);
  });
});

describe("The `ensureDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureDirSync();
    // $FlowExpectedError
    fs.ensureDirSync(path).then(() => {});
  });
});

describe("The `exists` function", () => {
  it("take in string", () => {
    (fs.exists('str'): Promise<boolean>);
    // $FlowExpectedError number not allowed
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
    // $FlowExpectedError
    fs.ensureLink().then(() => {});
    // $FlowExpectedError
    fs.ensureLink(path).then(() => {});
    fs.ensureLink(path, path).then(ret => {
      // $FlowExpectedError
      (ret: boolean);
    });
    // $FlowExpectedError
    fs.ensureLink(path, path, true);
  });
});

describe("The `ensureLinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureLinkSync(path, path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureLinkSync();
    // $FlowExpectedError
    fs.ensureLinkSync(path);
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.ensureSymlink(path).then(() => {});
    // $FlowExpectedError
    fs.ensureSymlink(path, path, "test").then(() => {});
    // $FlowExpectedError
    fs.ensureSymlink(path, path, true);
    // $FlowExpectedError
    fs.ensureSymlink(path, path, "file", true);
  });
});

describe("The `ensureSymlinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureSymlinkSync(path, path);
    fs.ensureSymlinkSync(path, path, "file");
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.ensureSymlinkSync(path);
    // $FlowExpectedError
    fs.ensureSymlinkSync(path, path, "test");
    // $FlowExpectedError
    fs.ensureSymlinkSync(path, path).then(() => {});
  });
});

describe("The `mkdirp` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir).then(() => {});
    fs.mkdirp(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.mkdirp().then(() => {});
    // $FlowExpectedError
    fs.mkdirp(dir, true);
  });
});

describe("The `mkdirpSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.mkdirpSync();
    // $FlowExpectedError
    fs.mkdirpSync(dir).then(() => {});
  });
});

describe("The `mkdirs` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirs(dir).then(() => {});
    fs.mkdirs(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.mkdirs().then(() => {});
    // $FlowExpectedError
    fs.mkdirs(dir, true);
  });
});

describe("The `mkdirsSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirsSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.mkdirsSync();
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.move().then(() => {});
    // $FlowExpectedError
    fs.move(src).then(() => {});
    fs.move(src, dest).then(ret => {
      // $FlowExpectedError
      (ret: boolean);
    });
    // $FlowExpectedError
    fs.move(src, dest, { overwrite: 123 }).then(() => {});
    // $FlowExpectedError
    fs.move({}, () => {});
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.moveSync();
    // $FlowExpectedError
    fs.moveSync(src);
    // $FlowExpectedError
    fs.moveSync(src, dest, true);
    // $FlowExpectedError
    fs.moveSync(src, dest, { overwrite: 123 });
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.outputFile().then(() => {});
    // $FlowExpectedError
    fs.outputFile(file, data, { mode: true }).then(() => {});
    // $FlowExpectedError
    fs.outputFile(file, data, true);
    // $FlowExpectedError
    fs.outputFile(file, data, { mode: true }, errorCallback);
  });
});

describe("The `outputFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.outputFileSync(file, data);
    fs.outputFileSync(file, data, { mode: 1 });
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.outputFileSync();
    // $FlowExpectedError
    fs.outputFileSync(file, data).then(() => {});
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.outputJson().then(() => {});
    // $FlowExpectedError
    fs.outputJSON().then(() => {});
    // $FlowExpectedError
    fs.outputJson(
      file,
      data,
      {
        spaces: true
      },
      errorCallback
    );
    // $FlowExpectedError
    fs.outputJSON(
      file,
      data,
      {
        spaces: true
      },
      errorCallback
    );
    // $FlowExpectedError
    fs.outputJson(file, data, true);
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.outputJsonSync();
    // $FlowExpectedError
    fs.outputJsonSync(file, data, true);
    // $FlowExpectedError
    fs.outputJSONSync();
    // $FlowExpectedError
    fs.outputJSONSync(file, data, true);
    // $FlowExpectedError
    fs.outputJsonSync(file, data, writeOptions).then(() => {});
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.pathExists();
    fs.pathExists(path, (err, exists) => {
      // $FlowExpectedError
      (err: boolean);
      // $FlowExpectedError
      (exists: string);
    });
  });
});

describe("The `pathExistsSync` function", () => {
  it("should validate on proper usage", () => {
    let exists: boolean = fs.pathExistsSync(path);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.pathExistsSync();
    // $FlowExpectedError
    fs.pathExistsSync(path).then(() => {});
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.readJson().then(() => {});
    // $FlowExpectedError
    fs.readJSON().then(() => {});
    // $FlowExpectedError
    fs.readJson(file, true).then(() => {});
    // $FlowExpectedError
    fs.readJSON(file, true).then(() => {});
    // $FlowExpectedError
    fs.readJson(file, true, false);
    // $FlowExpectedError
    fs.readJSON(file, true, false);
    fs.readJson(file, readOptions, (err, jsonObject) => {
      // $FlowExpectedError
      (err: boolean);
    });
    fs.readJSON(file, readOptions, (err, jsonObject) => {
      // $FlowExpectedError
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
    // $FlowExpectedError
    fs.readJsonSync();
    // $FlowExpectedError
    fs.readJSONSync();
    // $FlowExpectedError
    fs.readJsonSync(file, true);
    // $FlowExpectedError
    fs.readJSONSync(file, true);
  });
});

describe("The `remove` function", () => {
  it("should validate on proper usage", () => {
    fs.remove(dir, errorCallback);
    fs.remove(dir).then(() => {});
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.remove();
    // $FlowExpectedError
    fs.remove(true);
  });
});

describe("The `removeSync` function", () => {
  it("should validate on proper usage", () => {
    fs.removeSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.removeSync();
    // $FlowExpectedError
    fs.removeSync(true);
    // $FlowExpectedError
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
    // $FlowExpectedError
    fs.writeJson().then(() => {});
    // $FlowExpectedError
    fs.writeJSON().then(() => {});
    // $FlowExpectedError
    fs.writeJson(file, object, true, errorCallback);
    // $FlowExpectedError
    fs.writeJSON(file, object, true, errorCallback);
    // $FlowExpectedError
    fs.writeJson(file, object, writeOptions, errorCallback).then(() => {});
    // $FlowExpectedError
    fs.writeJSON(file, object, writeOptions, errorCallback).then(() => {});
  });
});

describe("The `writeJsonSync` function", () => {
  it("should validate on proper usage", () => {
    fs.writeJsonSync(file, object);
    fs.writeJSONSync(file, object, writeOptions);
  });

  it("should error on erroneous usage", () => {
    // $FlowExpectedError
    fs.writeJsonSync();
    // $FlowExpectedError
    fs.writeJsonSync(true);
    // $FlowExpectedError
    fs.writeJsonSync(file, object).then(() => {});
    // $FlowExpectedError
    fs.writeJSONSync();
    // $FlowExpectedError
    fs.writeJSONSync(true);
    // $FlowExpectedError
    fs.writeJSONSync(file, object).then(() => {});
  });
});
