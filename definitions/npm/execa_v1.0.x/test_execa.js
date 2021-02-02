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
    // $FlowExpectedError
    execa('ls').then(res => res.foo);

    execa('foo').catch(err => {
      (err.cmd: string);
      (err.code: ?string);
      (err.errno: $PropertyType<ErrnoError, 'errno'>);
    });
    // $FlowExpectedError
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
    // $FlowExpectedError
    execa('ls').foo;
  });

  it('should accept options', () => {
    execa('ls', { stderr: 'pipe' }).then(printStdout);
    execa('ls', { stderr: 10 }).then(printStdout);
    execa('ls', { input: 'foobar' });
    execa('ls', { input: new Buffer('foobar') });
    execa('ls', { input: process.stdin });
    // $FlowExpectedError
    execa('ls', { foo: 666 });
    // $FlowExpectedError
    execa('ls', { input: 42 });
  });

  it('should accept args', () => {
    execa('ls', ['-l']).then(printStdout, printErrno);
    execa('ls', ['-l'], { localDir: '~/' }).then(printStdout);
    // $FlowExpectedError
    execa(['ls', '-l']).then(printStdout);
    // $FlowExpectedError
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
    // $FlowExpectedError
    execa.stdout(['ls', '-l']);
    // $FlowExpectedError
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
    // $FlowExpectedError
    execa.stderr(['ls', '-l']);
    // $FlowExpectedError
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
    // $FlowExpectedError
    execa.shell(['ls', 'wc -l']);
    // $FlowExpectedError
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
    // $FlowExpectedError
    execa.sync(['ls']);
    // $FlowExpectedError
    execa.sync('ls', { foo: 666 });
    // $FlowExpectedError
    execa.sync('ls').killed;
    // $FlowExpectedError
    execa.sync('ls', { input: process.stdin });
  });
});

describe('execa.shellSync', () => {
  it('should provide result', () => {
    (execa.shellSync('ls | wc -l'): SyncResult);
    (execa.shellSync('ls | wc -l', { stderr: 'ignore' }).stdout: string);
  });
  it('should not accept invalid options or args', () => {
    // $FlowExpectedError
    execa.shellSync(['ls', 'wc -l']);
    // $FlowExpectedError
    execa.shellSync('ls', { foo: 666 });
  });
});
