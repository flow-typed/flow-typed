const Archiver = require("archiver");

// $FlowExpectedError (must pass in a format)
Archiver();
// $FlowExpectedError (format should be a string)
Archiver(10);
// $FlowExpectedError (format should be 'zip' or 'tar')
Archiver("tap");
Archiver("tar");

// $FlowExpectedError (options should be an object)
Archiver("zip", "{}");
Archiver("zip", {});

// $FlowExpectedError (must pass in valid options)
Archiver("zip", { gzp: true });
Archiver("zip", { gzip: true });

// $FlowExpectedError (values of options should use correct type)
Archiver("zip", { statConcurrency: "1" });
Archiver("zip", { statConcurrency: 1 });

// $FlowExpectedError (must pass in a format)
Archiver.create();
Archiver.create("zip");
Archiver.create("zip", {});

// $FlowExpectedError (must pass in a format and module)
Archiver.registerFormat();
// $FlowExpectedError (must pass in a module)
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
