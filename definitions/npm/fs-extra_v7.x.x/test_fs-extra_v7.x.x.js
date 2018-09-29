// @flow

import { describe, it } from "flow-typed-test";
import * as fs from "fs-extra";
import * as Path from "path";

let len = 2;
let src = "";
let dest = "";
let file = "";
let dir = "";
let path = "";
let data = "";
let uid = 0;
let gid = 0;
let fd = 0;
let modeNum = 0;
let modeStr = "";
let object = {};
let errorCallback = (err: Error) => {};
let readOptions: fs.ReadOptions = {
  reviver: {}
};
let writeOptions: fs.WriteOptions = {
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
    // $ExpectError
    fs.copy(src).then(() => {});
    // $ExpectError
    fs.copy(src);
    fs.copy(
      src,
      dest,
      {
        // $ExpectError
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
    // $ExpectError
    fs.copySync(src);
    // $ExpectError
    fs.copy(src).then(() => {});
    fs.copySync(src, dest, {
      // $ExpectError
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
    // $ExpectError
    fs.emptyDir().then(() => {});
    // $ExpectError
    fs.emptyDir(path, true);
  });
});

describe("The `emptyDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.emptyDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.emptyDirSync();
    // $ExpectError
    fs.emptyDirSync(path).then(() => {});
  });
});

describe("The `ensureFile` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFile(path).then(() => {});
    fs.ensureFile(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureFile().then(() => {});
    // $ExpectError
    fs.ensureFile(path, true);
  });
});

describe("The `ensureFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureFileSync(path);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureFileSync();
    // $ExpectError
    fs.ensureFileSync(path).then(() => {});
  });
});

describe("The `ensureDir` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDir(path).then(() => {});
    fs.ensureDir(path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureDir().then(() => {});
    // $ExpectError
    fs.ensureDir(path, true);
  });
});

describe("The `ensureDirSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureDirSync(path);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureDirSync();
    // $ExpectError
    fs.ensureDirSync(path).then(() => {});
  });
});

describe("The `ensureLink` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureLink(path, path).then(() => {});
    fs.ensureLink(path, path, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureLink().then(() => {});
    // $ExpectError
    fs.ensureLink(path).then(() => {});
    fs.ensureLink(path, path).then(ret => {
      // $ExpectError
      (ret: boolean);
    });
    // $ExpectError
    fs.ensureLink(path, path, true);
  });
});

describe("The `ensureLinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureLinkSync(path, path);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureLinkSync();
    // $ExpectError
    fs.ensureLinkSync(path);
    // $ExpectError
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
    // $ExpectError
    fs.ensureSymlink(path).then(() => {});
    // $ExpectError
    fs.ensureSymlink(path, path, "test").then(() => {});
    // $ExpectError
    fs.ensureSymlink(path, path, true);
    // $ExpectError
    fs.ensureSymlink(path, path, "file", true);
  });
});

describe("The `ensureSymlinkSync` function", () => {
  it("should validate on proper usage", () => {
    fs.ensureSymlinkSync(path, path);
    fs.ensureSymlinkSync(path, path, "file");
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.ensureSymlinkSync(path);
    // $ExpectError
    fs.ensureSymlinkSync(path, path, "test");
    // $ExpectError
    fs.ensureSymlinkSync(path, path).then(() => {});
  });
});

describe("The `mkdirp` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir).then(() => {});
    fs.mkdirp(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.mkdirp().then(() => {});
    // $ExpectError
    fs.mkdirp(dir, true);
  });
});

describe("The `mkdirpSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirp(dir);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.mkdirpSync();
    // $ExpectError
    fs.mkdirpSync(dir).then(() => {});
  });
});

describe("The `mkdirs` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirs(dir).then(() => {});
    fs.mkdirs(dir, errorCallback);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.mkdirs().then(() => {});
    // $ExpectError
    fs.mkdirs(dir, true);
  });
});

describe("The `mkdirsSync` function", () => {
  it("should validate on proper usage", () => {
    fs.mkdirsSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.mkdirsSync();
    // $ExpectError
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
    // $ExpectError
    fs.move().then(() => {});
    // $ExpectError
    fs.move(src).then(() => {});
    fs.move(src, dest).then(ret => {
      // $ExpectError
      (ret: boolean);
    });
    // $ExpectError
    fs.move(src, dest, { overwrite: 123 }).then(() => {});
    // $ExpectError
    fs.move({}, () => {});
    // $ExpectError
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
    // $ExpectError
    fs.moveSync();
    // $ExpectError
    fs.moveSync(src);
    // $ExpectError
    fs.moveSync(src, dest, true);
    // $ExpectError
    fs.moveSync(src, dest, { overwrite: 123 });
    // $ExpectError
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
    // $ExpectError
    fs.outputFile().then(() => {});
    // $ExpectError
    fs.outputFile(file, data, { mode: true }).then(() => {});
    // $ExpectError
    fs.outputFile(file, data, true);
    // $ExpectError
    fs.outputFile(file, data, { mode: true }, errorCallback);
  });
});

describe("The `outputFileSync` function", () => {
  it("should validate on proper usage", () => {
    fs.outputFileSync(file, data);
    fs.outputFileSync(file, data, { mode: 1 });
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.outputFileSync();
    // $ExpectError
    fs.outputFileSync(file, data).then(() => {});
    // $ExpectError
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
    // $ExpectError
    fs.outputJson().then(() => {});
    // $ExpectError
    fs.outputJSON().then(() => {});
    fs.outputJson(
      file,
      data,
      {
        // $ExpectError
        spaces: true
      },
      errorCallback
    );
    fs.outputJSON(
      file,
      data,
      {
        // $ExpectError
        spaces: true
      },
      errorCallback
    );
    // $ExpectError
    fs.outputJson(file, data, true);
    // $ExpectError
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
    // $ExpectError
    fs.outputJsonSync();
    // $ExpectError
    fs.outputJsonSync(file, data, true);
    // $ExpectError
    fs.outputJSONSync();
    // $ExpectError
    fs.outputJSONSync(file, data, true);
    // $ExpectError
    fs.outputJsonSync(file, data, writeOptions).then(() => {});
    // $ExpectError
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
    // $ExpectError
    fs.pathExists();
    fs.pathExists(path, (err, exists) => {
      // $ExpectError
      (err: boolean);
      // $ExpectError
      (exists: string);
    });
  });
});

describe("The `pathExistsSync` function", () => {
  it("should validate on proper usage", () => {
    let exists: boolean = fs.pathExistsSync(path);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.pathExistsSync();
    // $ExpectError
    fs.pathExistsSync(path).then(() => {});
    // $ExpectError
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
    // $ExpectError
    fs.readJson().then(() => {});
    // $ExpectError
    fs.readJSON().then(() => {});
    // $ExpectError
    fs.readJson(file, true).then(() => {});
    // $ExpectError
    fs.readJSON(file, true).then(() => {});
    // $ExpectError
    fs.readJson(file, true, false);
    // $ExpectError
    fs.readJSON(file, true, false);
    fs.readJson(file, readOptions, (err, jsonObject) => {
      // $ExpectError
      (err: boolean);
    });
    fs.readJSON(file, readOptions, (err, jsonObject) => {
      // $ExpectError
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
    // $ExpectError
    fs.readJsonSync();
    // $ExpectError
    fs.readJSONSync();
    // $ExpectError
    fs.readJsonSync(file, true);
    // $ExpectError
    fs.readJSONSync(file, true);
  });
});

describe("The `remove` function", () => {
  it("should validate on proper usage", () => {
    fs.remove(dir, errorCallback);
    fs.remove(dir).then(() => {});
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.remove();
    // $ExpectError
    fs.remove(true);
  });
});

describe("The `removeSync` function", () => {
  it("should validate on proper usage", () => {
    fs.removeSync(dir);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.removeSync();
    // $ExpectError
    fs.removeSync(true);
    // $ExpectError
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
    // $ExpectError
    fs.writeJson().then(() => {});
    // $ExpectError
    fs.writeJSON().then(() => {});
    // $ExpectError
    fs.writeJson(file, object, true, errorCallback);
    // $ExpectError
    fs.writeJSON(file, object, true, errorCallback);
    // $ExpectError
    fs.writeJson(file, object, writeOptions, errorCallback).then(() => {});
    // $ExpectError
    fs.writeJSON(file, object, writeOptions, errorCallback).then(() => {});
  });
});

describe("The `writeJsonSync` function", () => {
  it("should validate on proper usage", () => {
    fs.writeJsonSync(file, object);
    fs.writeJSONSync(file, object, writeOptions);
  });

  it("should error on erroneous usage", () => {
    // $ExpectError
    fs.writeJsonSync();
    // $ExpectError
    fs.writeJsonSync(true);
    // $ExpectError
    fs.writeJsonSync(file, object).then(() => {});
    // $ExpectError
    fs.writeJSONSync();
    // $ExpectError
    fs.writeJSONSync(true);
    // $ExpectError
    fs.writeJSONSync(file, object).then(() => {});
  });
});
