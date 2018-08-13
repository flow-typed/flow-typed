// @flow
import ignore from 'ignore';

const ign = ignore();
ignore({});
ignore({ ignorecase: false });
// $ExpectError
ignore({ foo: true });

ign.add('.abc/*');
ign.add(['.abc/*', '!.abc/d/']);
ign.add('.abc/*').add('!.abc/d/');

ign.add(ignore());
ign.add([ignore(), ignore()]);
ign.add(ignore()).add(ignore());

// $ExpectError
ign.add(666);
// $ExpectError
ign.add([666]);

(ign.filter(['.abc/a.js', '.abc/d/e.js']): Array<string>);
(ign.filter('.abc/a.js'): Array<string>);
// $ExpectError
ign.filter(ign);

(ign.createFilter()('.abc/d/e.js'): boolean);
// $ExpectError
ign.createFilter()(['foo']);

(ign.ignores('.abc/a.js'): boolean);
// $ExpectError
ign.ignores(['foo']);
