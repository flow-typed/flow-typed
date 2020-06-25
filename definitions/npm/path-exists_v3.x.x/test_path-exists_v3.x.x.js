import pathExists from 'path-exists';

pathExists('foo.js').then((exists: boolean) => {
  console.log(exists);
});

const result: boolean = pathExists.sync('bar.js');

// $FlowExpectedError
(pathExists('foo.js'): boolean);

// $FlowExpectedError
(pathExists.sync('foo.js'): Promise<boolean>);
