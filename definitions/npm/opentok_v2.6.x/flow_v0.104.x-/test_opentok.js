// @flow

import { describe, it } from 'flow-typed-test';
import OpenTok from 'opentok';

describe('OpenTok', () => {
  const opentok = new OpenTok('OPENTOK_APIKEY', 'OPENTOK_APISECRET');
  // $FlowExpectedError: wrong arguments
  new OpenTok();

  it('should test createSession', () => {
    opentok.createSession({ mediaMode: 'routed' }, function (err, session) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (session) {
        session.sessionId;
        // $FlowExpectedError
        session.foo;
      }
    });

    // $FlowExpectedError
    opentok.createSession({ mediaMode: 'errrm?' }, function (_err, _session) {});
    // $FlowExpectedError
    opentok.createSession({ yolo: true }, function (_err, _session) {});
  });

  it('should test generateToken', () => {
    opentok.generateToken('my-session-id');
    opentok.generateToken('my-session-id', { role: 'publisher' });

    // $FlowExpectedError
    opentok.generateToken('my-session-id', { role: 'janitor' });
    // $FlowExpectedError
    opentok.generateToken('my-session-id', { yolo: true });
  });

  it('should test startArchive', () => {
    opentok.startArchive('my-session-id', { outputMode: 'composed' }, function (err, archive) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $FlowExpectedError
        archive.foo;
      }
    });

    // $FlowExpectedError
    opentok.startArchive('my-session-id', { outputMode: 'errrm?' }, function (_err, _archive) {});
    // $FlowExpectedError
    opentok.startArchive('my-session-id', { yolo: true }, function (_err, _archive) {});
  });

  it('should test stopArchive', () => {
    opentok.stopArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $FlowExpectedError
        archive.foo;
      }
    });
  });

  it('should test getArchive', () => {
    opentok.getArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (archive) {
        archive.id;
        // $FlowExpectedError
        archive.foo;
      }
    });
  });

  it('should test deleteArchive', () => {
    opentok.deleteArchive('my-archive-id', function (err) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }
    });
  });

  it('should test listArchives', () => {
    opentok.listArchives({ count: 10 }, function (err, archives) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (archives) {
        for(let archive of archives) {
          archive.id;
          // $FlowExpectedError
          archive.foo;
        }
      }
    });
  });

  it('should test Archive', () => {
    opentok.getArchive('my-archive-id', function (err, archive) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }

      if (archive) {
        archive.stop(function (err, archive) {
          if (err) {
            err.message;
            // $FlowExpectedError
            err.foo;
          }

          if (archive) {
            archive.id;
            // $FlowExpectedError
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
    // $FlowExpectedError
    connection.foo;

    opentok.dial('my-session-id', 'my-token', 'my-sip-uri', { secure: true });
    // $FlowExpectedError
    opentok.dial('my-session-id', 'my-token', 'my-sip-uri', { yolo: true });
  });

  it('should test forceDisconnect', () => {
    opentok.forceDisconnect('my-session-id', 'my-connection-id', function (err) {
      if (err) {
        err.message;
        // $FlowExpectedError
        err.foo;
      }
    });
  });

});
