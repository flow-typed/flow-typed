// @Flow
import execa from 'execa';
import type { ExecaError, Result, SyncResult, ThenableChildProcess } from 'execa';

const printStdout = (res: Result) => console.log(res.stdout);
const printErrno = (err: ExecaError) => console.log(err.errno);


(execa('ls'): ThenableChildProcess);

execa('ls').then(res => {
  (res.cmd: string);
  (res.code: number);
  (res.killed: boolean);
});
// $ExpectError
execa('ls').then(res => res.foo);

execa('foo').catch(err => {
  (err.cmd: string);
  (err.code: ?string);
  (err.errno: ?number);
});
// $ExpectError
execa('foo').catch(err => err.foo);

(execa('ls').pid: number);
execa('ls').stdout.pipe(process.stdout);
// $ExpectError
execa('ls').foo;

execa('ls', { stderr: 'pipe' }).then(printStdout);
execa('ls', { stderr: 10 }).then(printStdout);
execa('ls', { input: 'foobar' });
execa('ls', { input: new Buffer('foobar') });
execa('ls', { input: process.stdin });
// $ExpectError
execa('ls', { foo: 666 });
// $ExpectError
execa('ls', { input: 42 });

execa('ls', ['-l']).then(printStdout, printErrno);
execa('ls', ['-l'], { localDir: '~/' }).then(printStdout);
// $ExpectError
execa(['ls', '-l']).then(printStdout);
// $ExpectError
execa('ls').then(printErrno);

(execa.stdout('ls'): Promise<string>);
execa.stdout('ls').then(stdout => stdout.toLowerCase());
execa.stdout('ls', ['-l']).then(stdout => stdout.toLowerCase());
execa.stdout('ls', { uid: 1000, gid: 100 }).then(stdout => stdout.toLowerCase());
execa.stdout('ls', ['-l'], { timeout: 5 }).then(stdout => stdout.toLowerCase());
// $ExpectError
execa.stdout(['ls', '-l']);
// $ExpectError
execa.stdout('ls', { foo: 666 });

(execa.stderr('ls'): Promise<string>);
execa.stderr('ls').then(stdout => stdout.toLowerCase());
execa.stderr('ls', ['-l']).then(stdout => stdout.toLowerCase());
execa.stderr('ls', { uid: 1000, gid: 100 }).then(stdout => stdout.toLowerCase());
execa.stderr('ls', ['-l'], { timeout: 5 }).then(stdout => stdout.toLowerCase());
// $ExpectError
execa.stderr(['ls', '-l']);
// $ExpectError
execa.stderr('ls', { foo: 666 });

(execa.shell('ls | wc -l'): ThenableChildProcess);
execa.shell('ls | wc -l').then(printStdout, printErrno);
execa.shell('ls | wc -l', { cwd: '/' }).then(printStdout);
execa.shell('foo').catch(printErrno);
// $ExpectError
execa.shell(['ls', 'wc -l']);
// $ExpectError
execa.stderr('ls', 'wc -l', { foo: 666 });

(execa.sync('ls'): SyncResult);
(execa.sync('ls', ['-l']).stdout: string);
(execa.sync('ls', { stderr: 'pipe' }).signal: ?string);
(execa.sync('ls', ['-l'], { localDir: '~/' }).failed: boolean);
// $ExpectError
execa.sync(['ls']);
// $ExpectError
execa.stderr('ls', { foo: 666 });
// $ExpectError
execa.sync('ls').killed;
// $ExpectError
execa.sync('ls', { input: process.stdin });

(execa.shellSync('ls | wc -l'): SyncResult);
(execa.shellSync('ls | wc -l', { stderr: 'ignore' }).stdout: string);
// $ExpectError
execa.shellSync(['ls', 'wc -l']);
// $ExpectError
execa.shellSync('ls', { foo: 666 });

async () => {
  const { stdout } = await execa('noop', ['foo'], { stripEof: false });
};

async () => {
  const child: ThenableChildProcess = execa('stdin');
  child.stdin.end('unicorns');
  const { stdout } = await child;
};

async () => {
  const { stdout } = await execa.shell('ls | wc -l');
};
