// @flow

import { describe, it } from 'flow-typed-test';
import OpenTok from 'opentok';

describe('OpenTok', () => {
  const opentok = new OpenTok('OPENTOK_APIKEY', 'OPENTOK_APISECRET');
  // $ExpectError: wrong arguments
  new OpenTok();

  it('should test createSession', () => {
    opentok.createSession({ mediaMode: 'routed' }, function (err, session) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (session) {
        session.sessionId;
        // $ExpectError
        session.foo;
      }
    });

    // $ExpectError
    opentok.createSession({ mediaMode: 'errrm?' }, function (_err, _session) {});
    // $ExpectError
    opentok.createSession({ yolo: true }, function (_err, _session) {});
  });

  it('should test generateToken', () => {
    opentok.generateToken('my-session-id');
    opentok.generateToken('my-session-id', { role: 'publisher' });

    // $ExpectError
    opentok.generateToken('my-session-id', { role: 'janitor' });
    // $ExpectError
    opentok.generateToken('my-session-id', { yolo: true });
  });

  it('should test startArchive', () => {
    opentok.startArchive('my-session-id', { outputMode: 'composed' }, function (err, archive) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $ExpectError
        archive.foo;
      }
    });

    // $ExpectError
    opentok.startArchive('my-session-id', { outputMode: 'errrm?' }, function (_err, _archive) {});
    // $ExpectError
    opentok.startArchive('my-session-id', { yolo: true }, function (_err, _archive) {});
  });

  it('should test stopArchive', () => {
    opentok.stopArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $ExpectError
        archive.foo;
      }
    });
  });

  it('should test getArchive', () => {
    opentok.getArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $ExpectError
        archive.foo;
      }
    });
  });

  it('should test deleteArchive', () => {
    opentok.deleteArchive('my-archive-id', function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });
  });

  it('should test listArchives', () => {
    opentok.listArchives({ count: 10 }, function (err, archives) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (archives) {
        for(let archive of archives) {
          archive.id;
          // $ExpectError
          archive.foo;
        }
      }
    });
  });

  it('should test Archive', () => {
    opentok.getArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (archive) {
        archive.stop(function (err, archive) {
          if (err) {
            err.message;
            // $ExpectError
            err.foo;
          }

          if (archive) {
            archive.id;
            // $ExpectError
            archive.foo;
          }
        });
        archive.delete(function (_err) {});
      }
    });
  });

  it('should test dial', () => {
    let connection = opentok.dial('my-session-id', 'my-token', 'my-sip-uri');
    connection.id;
    // $ExpectError
    connection.foo;

    opentok.dial('my-session-id', 'my-token', 'my-sip-uri', { secure: true });
    // $ExpectError
    opentok.dial('my-session-id', 'my-token', 'my-sip-uri', { yolo: true });
  });

  it('should test forceDisconnect', () => {
    opentok.forceDisconnect('my-session-id', 'my-connection-id', function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });
  });

});
