// @Flow
import { describe, it } from 'flow-typed-test';
import execa from 'execa';
import type { ExecaError, Result, SyncResult, ThenableChildProcess } from 'execa';

const printStdout = (res: Result) => console.log(res.stdout);
const printErrno = (err: ExecaError) => console.log(err.errno);

describe('execa', () => {
  it('should behave like a promise', () => {
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
      (err.errno: $PropertyType<ErrnoError, 'errno'>);
    });
    // $ExpectError
    execa('foo').catch(err => err.foo);

    async () => {
      const { stdout } = await execa('noop', ['foo'], { stripEof: false });
    };

    async () => {
      const child: ThenableChildProcess = execa('stdin');
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
});

describe('execa.stdout', () => {
  it('should resolve with a string', () => {
    (execa.stdout('ls'): Promise<string>);
    execa.stdout('ls').then(stdout => stdout.toLowerCase());
    execa.stdout('ls', ['-l']).then(stdout => stdout.toLowerCase());
  })
  it('should accept options and args', () => {
    execa.stdout('ls', { uid: 1000, gid: 100 }).then(stdout => stdout.toLowerCase());
    execa.stdout('ls', ['-l'], { timeout: 5 }).then(stdout => stdout.toLowerCase());
    // $ExpectError
    execa.stdout(['ls', '-l']);
    // $ExpectError
    execa.stdout('ls', { foo: 666 });
  });
});

describe('execa.stderr', () => {
  it('should resolve with a string', () => {
    (execa.stderr('ls'): Promise<string>);
    execa.stderr('ls').then(stdout => stdout.toLowerCase());
    execa.stderr('ls', ['-l']).then(stdout => stdout.toLowerCase());
  });
  it('should accept options and args', () => {
    execa.stderr('ls', { uid: 1000, gid: 100 }).then(stdout => stdout.toLowerCase());
    execa.stderr('ls', ['-l'], { timeout: 5 }).then(stdout => stdout.toLowerCase());
    // $ExpectError
    execa.stderr(['ls', '-l']);
    // $ExpectError
    execa.stderr('ls', { foo: 666 });
  });
});

describe('execa.shell', () => {
  it('should behave like a promise', () => {
    (execa.shell('ls | wc -l'): ThenableChildProcess);
    execa.shell('ls | wc -l').then(printStdout, printErrno);
    execa.shell('ls | wc -l', { cwd: '/' }).then(printStdout);
    execa.shell('foo').catch(printErrno);
    async () => {
      const { stdout } = await execa.shell('ls | wc -l');
    };
  });
  it('should not accept options or args', () => {
    // $ExpectError
    execa.shell(['ls', 'wc -l']);
    // $ExpectError
    execa.shell('ls', 'wc -l', { foo: 666 });
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

describe('execa.shellSync', () => {
  it('should provide result', () => {
    (execa.shellSync('ls | wc -l'): SyncResult);
    (execa.shellSync('ls | wc -l', { stderr: 'ignore' }).stdout: string);
  });
  it('should not accept invalid options or args', () => {
    // $ExpectError
    execa.shellSync(['ls', 'wc -l']);
    // $ExpectError
    execa.shellSync('ls', { foo: 666 });
  });
});
