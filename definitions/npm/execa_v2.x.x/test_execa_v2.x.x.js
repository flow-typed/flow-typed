// @flow
import { describe, it } from 'flow-typed-test';
import execa from 'execa';
import type { ExecaError, Result, SyncResult, ExecaPromise } from 'execa';

const printStdout = (res: Result) => console.log(res.stdout);
const printErrno = (err: ExecaError) => console.log(err.errno);

describe('execa', () => {
  it('should behave like a promise', () => {
    (execa('ls'): ExecaPromise);

    execa('ls').then(res => {
      (res.command: string);
      (res.exitCode: number);
      (res.killed: boolean);
    }).finally(res => {});
    // $ExpectError
    execa('ls').then(res => res.foo);

    execa('foo').catch(err => {
      (err.command: string);
      (err.exitCode: number);
      (err.errno: $PropertyType<ErrnoError, 'errno'>);
    });
    // $ExpectError
    execa('foo').catch(err => err.foo);

    async () => {
      const { stdout } = await execa('noop', ['foo'], { stripEof: false });
    };

    async () => {
      const child: ExecaPromise = execa('stdin');
      child.stdin.end('unicorns');
      const { stdout } = await child;
    };

  });

  it('should provide child process info', () => {
    (execa('ls').pid: number);
    execa('ls').stdout.pipe(process.stdout);
    // $ExpectError
    execa('ls').foo;
  });

  it('should accept options', () => {
    execa('ls', { stderr: 'pipe' }).then(printStdout);
    execa('ls', { stderr: 10 }).then(printStdout);
    execa('ls', { input: 'foobar' });
    execa('ls', { input: new Buffer('foobar') });
    execa('ls', { input: process.stdin });
    // $ExpectError
    execa('ls', { foo: 666 });
    // $ExpectError
    execa('ls', { input: 42 });
  });

  it('should accept args', () => {
    execa('ls', ['-l']).then(printStdout, printErrno);
    execa('ls', ['-l'], { localDir: '~/' }).then(printStdout);
    // $ExpectError
    execa(['ls', '-l']).then(printStdout);
    // $ExpectError
    execa('ls').then(printErrno);
  });

  it('can cancel the subprocess', () => {
    execa('ls').cancel();
  });
});

describe('execa.command', () => {
  it('should behave like execa', () => {
    (execa.command('ls pipe'): ExecaPromise);
    execa.command('ls pipe').then(res => {
      (res.command: string);
    }).finally(res => {});
  });
  it('should accept options', () => {
    execa.command('ls pipe', { stderr: 'pipe' }).then(printStdout);
    execa.command('ls pipe', { stderr: 10 }).then(printStdout);
    execa.command('ls pipe', { input: 'foobar' });
    execa.command('ls pipe', { input: new Buffer('foobar') });
    execa.command('ls pipe', { input: process.stdin });
    // $ExpectError
    execa.command('ls pipe', { foo: 666 });
    // $ExpectError
    execa.command('ls pipe', { input: 42 });
  });
  it('should not accept args', () => {
    // $ExpectError
    execa.command('ls', ['-l']).then(printStdout, printErrno);
    // $ExpectError
    execa.command('ls', ['-l'], { localDir: '~/' }).then(printStdout);
  });
});

describe('execa.commandSync', () => {
  it('should behave like execa', () => {
    (execa.commandSync('ls pipe'): ExecaPromise);
    execa.commandSync('ls pipe').then(res => {
      (res.command: string);
    }).finally(res => {});
  });
  it('should accept options', () => {
    execa.commandSync('ls pipe', { stderr: 'pipe' }).then(printStdout);
    execa.commandSync('ls pipe', { stderr: 10 }).then(printStdout);
    execa.commandSync('ls pipe', { input: 'foobar' });
    execa.commandSync('ls pipe', { input: new Buffer('foobar') });
    execa.commandSync('ls pipe', { input: process.stdin });
    // $ExpectError
    execa.commandSync('ls pipe', { foo: 666 });
    // $ExpectError
    execa.commandSync('ls pipe', { input: 42 });
  });
  it('should not accept args', () => {
    // $ExpectError
    execa.commandSync('ls', ['-l']).then(printStdout, printErrno);
    // $ExpectError
    execa.commandSync('ls', ['-l'], { localDir: '~/' }).then(printStdout);
  });
});

describe('execa.node', () => {
  it('should behave like child_process.fork', () => {
    execa.node('subprocess');
    execa.node('subprocess', ['normal']);
  });
});

describe('execa.sync', () => {
  it('should provide result', () => {
    (execa.sync('ls'): SyncResult);
    (execa.sync('ls', ['-l']).stdout: string);
    (execa.sync('ls', { stderr: 'pipe' }).signal: ?string);
    (execa.sync('ls', ['-l'], { localDir: '~/' }).failed: boolean);
  });
  it('should not accept options or args', () => {
    // $ExpectError
    execa.sync(['ls']);
    // $ExpectError
    execa.sync('ls', { foo: 666 });
    // $ExpectError
    execa.sync('ls').killed;
    // $ExpectError
    execa.sync('ls', { input: process.stdin });
  });
});
