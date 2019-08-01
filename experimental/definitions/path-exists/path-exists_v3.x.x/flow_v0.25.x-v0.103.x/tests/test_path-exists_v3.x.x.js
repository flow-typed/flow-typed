import pathExists from 'path-exists';

pathExists('foo.js').then((exists: boolean) => {
  console.log(exists);
});

const result: boolean = pathExists.sync('bar.js');

// $ExpectError
(pathExists('foo.js'): boolean);

// $ExpectError
(pathExists.sync('foo.js'): Promise<boolean>);
