import getit from 'getit';

getit('github://DamonOehlman/getit/README.md', (err, data) => {});
getit('github://DamonOehlman/getit/README.md', {}, (err, data) => {});
getit('github://DamonOehlman/getit/README.md', { cachePath: 'test' }, (err, data) => {});

getit.isRemote('foo');

const result: string = getit.getUrl('github://DamonOehlman/getit/README.md');

getit('github://DamonOehlman/getit/README.md', (err, data) => {
  const happyOutput: string = 'more output' + (data || '');

  // $FlowExpectedError
  const unhappyOutput: string = 'more output' + data;

  // $FlowExpectedError
  const value: number = 5 + data;
});

// $FlowExpectedError
const result2: number = getit.getUrl('github://DamonOehlman/getit/README.md');

// $FlowExpectedError
const result3: string = getit.getUrl(5);

// $FlowExpectedError
getit('github://DamonOehlman/getit/README.md');

// $FlowExpectedError
getit('github://DamonOehlman/getit/README.md', {
  foo: 'test'
});

// $FlowExpectedError
getit(5);

// $FlowExpectedError
getit({});

// $FlowExpectedError
getit('github://DamonOehlman/getit/README.md', {});

// $FlowExpectedError
getit.isRemote(5);

// $FlowExpectedError
getit.isRemote({});
