const tempy = require("tempy");

(tempy.file(): string);

(tempy.file({ extension: ".txt" }): string);

(tempy.file({ name: "foo.txt" }): string);

// $FlowExpectedError
tempy.file(123);

(tempy.directory(): string);

// $FlowExpectedError
tempy.directory({});

(tempy.root: string);
