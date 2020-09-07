// @flow
import ignore from 'ignore';

const ign = ignore();
ignore({});
ignore({ ignorecase: false });
// $FlowExpectedError
ignore({ foo: true });

ign.add('.abc/*');
ign.add(['.abc/*', '!.abc/d/']);
ign.add('.abc/*').add('!.abc/d/');

ign.add(ignore());
ign.add([ignore(), ignore()]);
ign.add(ignore()).add(ignore());

// $FlowExpectedError
ign.add(666);
// $FlowExpectedError
ign.add([666]);

(ign.filter(['.abc/a.js', '.abc/d/e.js']): Array<string>);
(ign.filter('.abc/a.js'): Array<string>);
// $FlowExpectedError
ign.filter(ign);

(ign.createFilter()('.abc/d/e.js'): boolean);
// $FlowExpectedError
ign.createFilter()(['foo']);

(ign.ignores('.abc/a.js'): boolean);
// $FlowExpectedError
ign.ignores(['foo']);

const paths: string[] = ['.abc/*', '!.abc/d/']
ign.add(paths)
ign.filter(paths)
