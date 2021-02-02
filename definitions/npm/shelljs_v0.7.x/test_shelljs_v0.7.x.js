// @flow

import type {
  ShellArray,
  ShellAsync,
  ShellFileStats,
  ShellResult,
  ShellString,
} from 'shelljs';
import sh from 'shelljs';

// $FlowExpectedError
sh.ShellString();
// $FlowExpectedError
sh.ShellString({});
// $FlowExpectedError
sh.ShellString("foo", {});
// $FlowExpectedError
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

// $FlowExpectedError
sh.cat();
// $FlowExpectedError
sh.cat(0);
// Success
(sh.cat('/dev/null'): ShellString);

// $FlowExpectedError
sh.cd(0);
// Success
(sh.cd(): ShellString);
// Success
(sh.cd('/tmp'): ShellString);

// $FlowExpectedError
sh.chmod();
// $FlowExpectedError
sh.chmod(755);
// $FlowExpectedError
sh.chmod('nope', 755, '~');
// $FlowExpectedError
sh.chmod({ '-x': true }, 755, '~');
// Success
(sh.chmod({ '-R': true }, 755, '~'): ShellString);
// Success
(sh.chmod(755, '~'): ShellString);
// Success
(sh.chmod('755', '~'): ShellString);
// Success
(sh.chmod('u+x', '~'): ShellString);

// $FlowExpectedError
sh.cp();
// $FlowExpectedError
sh.cp(0);
// $FlowExpectedError
sh.cp('/dev/null');
// $FlowExpectedError
sh.cp({ 'nope': true }, '/dev/null', '/tmp/');
// Success
(sh.cp({ '-R': true }, '/dev/null', '/tmp/'): ShellString);
// Success
(sh.cp('/dev/null', '/tmp/'): ShellString);
// Success
(sh.cp('/dev/null', '/dev/null', '/tmp/'): ShellString);

// $FlowExpectedError
sh.dirs(0);
// $FlowExpectedError
sh.dirs({ 'nope': true });
// Success
(sh.dirs('-c'): string[]);
// Success
(sh.dirs('-9'): string[]);

// $FlowExpectedError
sh.echo(new Function());
// Success
(sh.echo('foo', 'bar'): ShellString);

// $FlowExpectedError
sh.env[0];
// Success
(sh.env['USER']: string);

// Success
(sh.error(): ?string);

// $FlowExpectedError
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

// $FlowExpectedError
sh.exit('');
// Success
(sh.exit(): void);
// Success
(sh.exit(0): void);

// $FlowExpectedError
sh.find();
// $FlowExpectedError
sh.find(0);
// Success
(sh.find('~', '/tmp'): ShellArray<string>);

// $FlowExpectedError
sh.grep();
// $FlowExpectedError
sh.grep(0);
// $FlowExpectedError
sh.grep({'-x': true }, 'type');
// $FlowExpectedError
sh.grep({'-x': true }, 'type');
// $FlowExpectedError
sh.grep({ '-x': true }, /type/, 'definitions/**/*.js');
// Success
(sh.grep({ '-l': true }, /type/, 'definitions/**/*.js'): ShellString);
// Success
(sh.grep({ '-l': true }, 'type', 'definitions/**/*.js'): ShellString);
// Success
(sh.grep('type', 'definitions/**/*.js'): ShellString);

// $FlowExpectedError
sh.head();
// $FlowExpectedError
sh.head({});
// Success
(sh.head(1, '/dev/random'): ShellString);
// Success
(sh.head('/dev/random'): ShellString);

// $FlowExpectedError
sh.ln();
// $FlowExpectedError
sh.ln(0);
// $FlowExpectedError
sh.ln('~');
// $FlowExpectedError
(sh.ln({ '-x': true }, '~', '/tmp/it-me'): ShellString);
// Success
(sh.ln({ '-s': true }, '~', '/tmp/it-me'): ShellString);

// $FlowExpectedError
sh.ls();
// $FlowExpectedError
sh.ls(0);
// $FlowExpectedError
sh.ls({ '-x': true }, '~');
// Success
(sh.ls({ '-l': true }, '~'): ShellArray<ShellFileStats>);
// Success
(sh.ls({ '-l': true }, '~').map((item) => item.name): Array<string>);
// Success
(sh.ls({ '-l': true }, '~').cat(): ShellString);
// Success
(sh.ls('~'): ShellArray<string>);

// $FlowExpectedError
sh.mkdir();
// $FlowExpectedError
sh.mkdir(0);
// $FlowExpectedError
sh.mkdir({ '-x': true }, '/tmp/tmp0/tmp1');
// Success
(sh.mkdir({ '-p': true }, '/tmp/tmp0/tmp1'): ShellString);
// Success
(sh.mkdir('/tmp/tmp0'): ShellString);

// $FlowExpectedError
sh.mv();
// $FlowExpectedError
sh.mv(0);
// $FlowExpectedError
sh.mv('/tmp/tmp0');
// $FlowExpectedError
sh.mv({ '-x': true }, '/tmp/tmp0');
// $FlowExpectedError
sh.mv({ '-x': true }, '/tmp/tmp0', '/tmp/tmp1');
// Success
(sh.mv({ '-f': true }, '/tmp/tmp0', '/tmp/tmp1'): ShellString);

// $FlowExpectedError
sh.pushd();
// $FlowExpectedError
sh.pushd(0);
// $FlowExpectedError
sh.pushd({ '-x': true }, '/tmp');
// Success
(sh.pushd({ '-n': true }, '/tmp'): string[]);
// Success
(sh.pushd('/tmp'): string[]);

// $FlowExpectedError
sh.pwd(0);
// Success
(sh.pwd(): ShellString);

// $FlowExpectedError
sh.rm();
// $FlowExpectedError
sh.rm(0);
// $FlowExpectedError
sh.rm('/tmp/tmp0', 0);
// $FlowExpectedError
sh.rm({ '-x': true }, '/tmp/tmp0', '/tmp/tmp1');
// Success
(sh.rm({ '-r': true, '-f': true }, '/tmp/tmp0', '/tmp/tmp1'): ShellString);
// Success
(sh.rm('/tmp/tmp0', '/tmp/tmp1'): ShellString);

// $FlowExpectedError
sh.sed();
// $FlowExpectedError
sh.sed(0);
// $FlowExpectedError
sh.sed('foo');
// $FlowExpectedError
sh.sed('foo', 'bar');
// $FlowExpectedError
sh.sed({ '-x': true }, 'foo', 'bar', '/tmp/tmp0');
// Success
(sh.sed({ '-i': true }, 'foo', 'bar', '/tmp/tmp0'): ShellString);
// Success
(sh.sed('foo', 'bar', '/tmp/tmp0'): ShellString);
// Success
(sh.sed(/foo/, 'bar', '/tmp/tmp0'): ShellString);

// $FlowExpectedError
sh.set();
// $FlowExpectedError
sh.set(0);
// $FlowExpectedError
sh.set('-x');
// Success
(sh.set('-e'): void);
// Success
(sh.set('+e'): void);

// $FlowExpectedError
sh.sort();
// $FlowExpectedError
sh.sort(0);
// $FlowExpectedError
sh.sort({ '-x': true }, '/tmp/tmp0');
// Success
(sh.sort({ '-r': true }, '/tmp/tmp0'): ShellString);
// Success
(sh.sort('/tmp/tmp0'): ShellString);

// $FlowExpectedError
sh.tail();
// $FlowExpectedError
sh.tail({});
// Success
(sh.tail(1, '/dev/random'): ShellString);
// Success
(sh.tail('/dev/random'): ShellString);

// $FlowExpectedError
sh.tempdir(0);
// Success
(sh.tempdir(): string);

// $FlowExpectedError
sh.test();
// $FlowExpectedError
sh.test(0);
// $FlowExpectedError
sh.test('-x');
// $FlowExpectedError
sh.test('-x', '~');
// Success
(sh.test('-d', '~'): boolean);

// $FlowExpectedError
sh.touch();
// $FlowExpectedError
sh.touch(0);
// $FlowExpectedError
sh.touch({ '-x': true }, '/tmp/tmp0');
// Success
(sh.touch({ '-c': true }, '/tmp/tmp0'): ShellString);
// Success
(sh.touch({ '-r': '/tmp/tmp0' }, '/tmp/tmp1'): ShellString);
// Success
(sh.touch('/tmp/tmp1'): ShellString);

// $FlowExpectedError
sh.which();
// $FlowExpectedError
sh.which(0);
// $ExpectSucess
(sh.which('sh'): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').cat(0);
// Success
(sh.cat('/tmp/tmp0').cat(): ShellString);

// $FlowExpectedError
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

// $FlowExpectedError
sh.cat('/tmp/tmp0').grep();
// $FlowExpectedError
sh.cat('/tmp/tmp0').grep(0);
// $FlowExpectedError
sh.cat('/tmp/tmp0').grep({'-x': true }, 'type');
// $FlowExpectedError
sh.cat('/tmp/tmp0').grep({'-x': true }, 'type');
// $FlowExpectedError
sh.cat('/tmp/tmp0').grep({ '-x': true }, /type/, 'definitions/**/*.js');
// Success
(sh.cat('/tmp/tmp0').grep({ '-l': true }, /type/): ShellString);
// Success
(sh.cat('/tmp/tmp0').grep({ '-l': true }, 'type'): ShellString);
// Success
(sh.cat('/tmp/tmp0').grep('type'): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').head({});
// Success
(sh.cat('/tmp/tmp0').head(1): ShellString);
// Success
(sh.cat('/tmp/tmp0').head(): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').sed();
// $FlowExpectedError
sh.cat('/tmp/tmp0').sed(0);
// $FlowExpectedError
sh.cat('/tmp/tmp0').sed('foo');
// $FlowExpectedError
sh.cat('/tmp/tmp0').sed({ '-x': true }, 'foo', 'bar');
// Success
(sh.cat('/tmp/tmp0').sed('foo', 'bar'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar'): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').sort({ '-x': true });
// Success
(sh.cat('/tmp/tmp0').sort({ '-r': true }): ShellString);
// Success
(sh.cat('/tmp/tmp0').sort(): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').tail({});
// Success
(sh.cat('/tmp/tmp0').tail(1): ShellString);
// Success
(sh.cat('/tmp/tmp0').tail(): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').to();
// $FlowExpectedError
sh.cat('/tmp/tmp0').to(0);
// Success
(sh.cat('/tmp/tmp0').to('/tmp/tmp1'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar').to('/tmp/tmp1'): ShellString);

// $FlowExpectedError
sh.cat('/tmp/tmp0').toEnd();
// $FlowExpectedError
sh.cat('/tmp/tmp0').toEnd(0);
// Success
(sh.cat('/tmp/tmp0').toEnd('/tmp/tmp1'): ShellString);
// Success
(sh.cat('/tmp/tmp0').sed(/foo/, 'bar').toEnd('/tmp/tmp1'): ShellString);
