const tempy = require("tempy");

(tempy.file(): string);

(tempy.file({ extension: ".txt" }): string);

(tempy.file({ name: "foo.txt" }): string);

// $ExpectError
tempy.file(123);

(tempy.directory(): string);

// $ExpectError
tempy.directory({});

(tempy.root: string);
