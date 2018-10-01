import Archiver from "archiver";

// $ExpectError (must pass in a format)
Archiver();
// $ExpectError (format should be a string)
Archiver(10);
// $ExpectError (format should be 'zip' or 'tar')
Archiver("tap");
Archiver("tar");

// $ExpectError (options should be an object)
Archiver("zip", "{}");
Archiver("zip", {});

// $ExpectError (must pass in valid options)
Archiver("zip", { gzp: true });
Archiver("zip", { gzip: true });

// $ExpectError (values of options should use correct type)
Archiver("zip", { statConcurrency: "1" });
Archiver("zip", { statConcurrency: 1 });

// $ExpectError (must pass in a format)
Archiver.create();
Archiver.create("zip");
Archiver.create("zip", {});

// $ExpectError (must pass in a format and module)
Archiver.registerFormat();
// $ExpectError (must pass in a module)
Archiver.registerFormat("zip");
Archiver.registerFormat("zip", () => {});

const options = {
  statConcurrency: 1,
  allowHalfOpen: true,
  readableObjectMode: true,
  writeableObjectMode: true,
  decodeStrings: true,
  encoding: "test",
  highWaterMark: 1,
  objectmode: true,
  comment: "test",
  forceLocalTime: true,
  forceZip64: true,
  store: true,
  zlib: {},
  gzip: true,
  gzipOptions: {}
};

Archiver("zip", options);
