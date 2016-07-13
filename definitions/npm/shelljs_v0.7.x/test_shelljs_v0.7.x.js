// @flow

import type {
  ShellArray,
  ShellAsync,
  ShellFileStats,
  ShellResult,
  ShellString,
} from 'shelljs';
import sh from 'shelljs';

// $ExpectError
sh.ShellString();
// $ExpectError
sh.ShellString({});
// $ExpectError
sh.ShellString("foo", {});
// $ExpectError
sh.ShellString("foo", "bar", {});
// Success
(sh.ShellString("foo", "bar", 0): ShellString);
// Success
(sh.ShellString("foo"): ShellString);
// Sucesss
(sh.ShellString("foo"): ShellResult);
// Success
(sh.ShellString("foo"): String);
// Success
(sh.ShellString(["foo", "bar"]): ShellArray<string>);
// Success
(sh.ShellString(["foo", "bar"]): ShellResult);
// Success
(sh.ShellString(["foo", "bar"]): Array<string>);

// $ExpectError
sh.cat();
// $ExpectError
sh.cat(0);
// Success
(sh.cat('/dev/null'): ShellString);

// $ExpectError
sh.cd(0);
// Success
(sh.cd(): ShellString);
// Success
(sh.cd('/tmp'): ShellString);

// $ExpectError
sh.chmod();
// $ExpectError
sh.chmod(755);
// $ExpectError
sh.chmod('nope', 755, '~');
// $ExpectError
sh.chmod({ '-x': true }, 755, '~');
// Success
(sh.chmod({ '-R': true }, 755, '~'): ShellString);
// Success
(sh.chmod(755, '~'): ShellString);
// Success
(sh.chmod('755', '~'): ShellString);
// Success
(sh.chmod('u+x', '~'): ShellString);

// $ExpectError
sh.cp();
// $ExpectError
sh.cp(0);
// $ExpectError
sh.cp('/dev/null');
// $ExpectError
sh.cp({ 'nope': true }, '/dev/null', '/tmp/');
// Success
(sh.cp({ '-R': true }, '/dev/null', '/tmp/'): ShellString);
// Success
(sh.cp('/dev/null', '/tmp/'): ShellString);
// Success
(sh.cp('/dev/null', '/dev/null', '/tmp/'): ShellString);

// $ExpectError
sh.dirs(0);
// $ExpectError
sh.dirs({ 'nope': true });
// Success
(sh.dirs('-c'): string[]);
// Success
(sh.dirs('-9'): string[]);

// $ExpectError
sh.echo(new Function());
// Success
(sh.echo('foo', 'bar'): ShellString);

// $ExpectError
sh.env[0];
// Success
(sh.env['USER']: string);

// Success
(sh.error(): ?string);

// $ExpectError
sh.exec(0);
// Success
(sh.exec('pwd', { async: true, silent: true }, (code, stdout, stderr) => {}): ShellAsync);
// Success
(sh.exec('pwd', { async: true, silent: true }): ShellAsync);
// Success
(sh.exec('pwd', { silent: true }): ShellString);
// Success
(sh.exec('pwd'): ShellString);
// Success
(sh.exec('pwd', (code, stdout, stderr) => {}): ShellAsync);

// $ExpectError
sh.exit('');
// Success
(sh.exit(): void);
// Success
(sh.exit(0): void);

// $ExpectError
sh.find();
// $ExpectError
sh.find(0);
// Success
(sh.find('~', '/tmp'): ShellArray<string>);

// $ExpectError
sh.grep();
// $ExpectError
sh.grep(0);
// $ExpectError
sh.grep({'-x': true }, 'type');
// $ExpectError
sh.grep({'-x': true }, 'type');
// $ExpectError
sh.grep({ '-x': true }, /type/, 'definitions/**/*.js');
// Success
(sh.grep({ '-l': true }, /type/, 'definitions/**/*.js'): ShellString);
// Success
(sh.grep({ '-l': true }, 'type', 'definitions/**/*.js'): ShellString);
// Success
(sh.grep('type', 'definitions/**/*.js'): ShellString);

// $ExpectError
sh.head();
// $ExpectError
sh.head({});
// Success
(sh.head(1, '/dev/random'): ShellString);
// Success
(sh.head('/dev/random'): ShellString);

// $ExpectError
sh.ln();
// $ExpectError
sh.ln(0);
// $ExpectError
sh.ln('~');
// $ExpectError
(sh.ln({ '-x': true }, '~', '/tmp/it-me'): ShellString);
// Success
(sh.ln({ '-s': true }, '~', '/tmp/it-me'): ShellString);

// $ExpectError
sh.ls();
// $ExpectError
sh.ls(0);
// $ExpectError
sh.ls({ '-x': true }, '~');
// Success
(sh.ls({ '-l': true }, '~'): ShellArray<ShellFileStats>);
// Success
(sh.ls({ '-l': true }, '~').map((item) => item.name): Array<string>);
// Success
(sh.ls({ '-l': true }, '~').cat(): ShellString);
// Success
(sh.ls('~'): ShellArray<string>);

// $ExpectError
sh.mkdir();
// $ExpectError
sh.mkdir(0);
// $ExpectError
sh.mkdir({ '-x': true }, '/tmp/tmp0/tmp1');
// Success
(sh.mkdir({ '-p': true }, '/tmp/tmp0/tmp1'): ShellString);
// Success
(sh.mkdir('/tmp/tmp0'): ShellString);

// $ExpectError
sh.mv();
// $ExpectError
sh.mv(0);
// $ExpectError
sh.mv('/tmp/tmp0');
// $ExpectError
sh.mv({ '-x': true }, '/tmp/tmp0');
// $ExpectError
sh.mv({ '-x': true }, '/tmp/tmp0', '/tmp/tmp1');
// Success
(sh.mv({ '-f': true }, '/tmp/tmp0', '/tmp/tmp1'): ShellString);

// $ExpectError
sh.pushd();
// $ExpectError
sh.pushd(0);
// $ExpectError
sh.pushd({ '-x': true }, '/tmp');
// Success
(sh.pushd({ '-n': true }, '/tmp'): string[]);
// Success
(sh.pushd('/tmp'): string[]);

// $ExpectError
sh.pwd(0);
// Success
(sh.pwd(): ShellString);

// $ExpectError
sh.rm();
// $ExpectError
sh.rm(0);
// $ExpectError
sh.rm('/tmp/tmp0', 0);
// $ExpectError
sh.rm({ '-x': true }, '/tmp/tmp0', '/tmp/tmp1');
// Success
(sh.rm({ '-r': true, '-f': true }, '/tmp/tmp0', '/tmp/tmp1'): ShellString);
// Success
(sh.rm('/tmp/tmp0', '/tmp/tmp1'): ShellString);

// $ExpectError
sh.sed();
// $ExpectError
sh.sed(0);
// $ExpectError
sh.sed('foo');
// $ExpectError
sh.sed('foo', 'bar');
// $ExpectError
sh.sed({ '-x': true }, 'foo', 'bar', '/tmp/tmp0');
// Success
(sh.sed({ '-i': true }, 'foo', 'bar', '/tmp/tmp0'): ShellString);
// Success
(sh.sed('foo', 'bar', '/tmp/tmp0'): ShellString);
// Success
(sh.sed(/foo/, 'bar', '/tmp/tmp0'): ShellString);

// $ExpectError
sh.set();
// $ExpectError
sh.set(0);
// $ExpectError
sh.set('-x');
// Success
(sh.set('-e'): void);
// Success
(sh.set('+e'): void);

// $ExpectError
sh.sort();
// $ExpectError
sh.sort(0);
// $ExpectError
sh.sort({ '-x': true }, '/tmp/tmp0');
// Success
(sh.sort({ '-r': true }, '/tmp/tmp0'): ShellString);
// Success
(sh.sort('/tmp/tmp0'): ShellString);

// $ExpectError
sh.tail();
// $ExpectError
sh.tail({});
// Success
(sh.tail(1, '/dev/random'): ShellString);
// Success
(sh.tail('/dev/random'): ShellString);

// $ExpectError
sh.tempdir(0);
// Success
(sh.tempdir(): string);

// $ExpectError
sh.test();
// $ExpectError
sh.test(0);
// $ExpectError
sh.test('-x');
// $ExpectError
sh.test('-x', '~');
// Success
(sh.test('-d', '~'): boolean);

// $ExpectError
sh.touch();
// $ExpectError
sh.touch(0);
// $ExpectError
sh.touch({ '-x': true }, '/tmp/tmp0');
// Success
(sh.touch({ '-c': true }, '/tmp/tmp0'): ShellString);
// Success
(sh.touch({ '-r': '/tmp/tmp0' }, '/tmp/tmp1'): ShellString);
// Success
(sh.touch('/tmp/tmp1'): ShellString);

// $ExpectError
sh.which();
// $ExpectError
sh.which(0);
// $ExpectSucess
(sh.which('sh'): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').cat(0);
// Success
(sh.cat('/tmp/tmp0').cat(): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').exec(0);
// Success
(sh.cat('/tmp/tmp0').exec('cat', { async: true, silent: true }, (code, stdout, stderr) => {}): ShellAsync);
// Success
(sh.cat('/tmp/tmp0').exec('cat', { async: true, silent: true }): ShellAsync);
// Success
(sh.cat('/tmp/tmp0').exec('cat', { silent: true }): ShellString);
// Success
(sh.cat('/tmp/tmp0').exec('cat'): ShellString);
// Success
(sh.cat('/tmp/tmp0').exec('cat', (code, stdout, stderr) => {}): ShellAsync);

// $ExpectError
sh.cat('/tmp/tmp0').grep();
// $ExpectError
sh.cat('/tmp/tmp0').grep(0);
// $ExpectError
sh.cat('/tmp/tmp0').grep({'-x': true }, 'type');
// $ExpectError
sh.cat('/tmp/tmp0').grep({'-x': true }, 'type');
// $ExpectError
sh.cat('/tmp/tmp0').grep({ '-x': true }, /type/, 'definitions/**/*.js');
// Success
(sh.cat('/tmp/tmp0').grep({ '-l': true }, /type/): ShellString);
// Success
(sh.cat('/tmp/tmp0').grep({ '-l': true }, 'type'): ShellString);
// Success
(sh.cat('/tmp/tmp0').grep('type'): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').head({});
// Success
(sh.cat('/tmp/tmp0').head(1): ShellString);
// Success
(sh.cat('/tmp/tmp0').head(): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').sed();
// $ExpectError
sh.cat('/tmp/tmp0').sed(0);
// $ExpectError
sh.cat('/tmp/tmp0').sed('foo');
// $ExpectError
sh.cat('/tmp/tmp0').sed({ '-x': true }, 'foo', 'bar');
// Success
(sh.cat('/tmp/tmp0').sed('foo', 'bar'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar'): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').sort({ '-x': true });
// Success
(sh.cat('/tmp/tmp0').sort({ '-r': true }): ShellString);
// Success
(sh.cat('/tmp/tmp0').sort(): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').tail({});
// Success
(sh.cat('/tmp/tmp0').tail(1): ShellString);
// Success
(sh.cat('/tmp/tmp0').tail(): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').to();
// $ExpectError
sh.cat('/tmp/tmp0').to(0);
// Success
(sh.cat('/tmp/tmp0').to('/tmp/tmp1'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar').to('/tmp/tmp1'): ShellString);

// $ExpectError
sh.cat('/tmp/tmp0').toEnd();
// $ExpectError
sh.cat('/tmp/tmp0').toEnd(0);
// Success
(sh.cat('/tmp/tmp0').toEnd('/tmp/tmp1'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar').toEnd('/tmp/tmp1'): ShellString);
