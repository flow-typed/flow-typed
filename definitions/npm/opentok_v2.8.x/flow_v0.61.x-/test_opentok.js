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

  it('should test setBroadcastLayout', () => {
    opentok.setBroadcastLayout('my-broadcast-id', 'custom', '.focus {}', function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });

    opentok.setBroadcastLayout('my-broadcast-id', 'horizontalPresentation', null, function (err) {});
  });

  it('should test setStreamClassLists', () => {
    opentok.setStreamClassLists('my-session-id', [{
      id: 'my-stream-id',
      layoutClassList: ['focus']
    }], function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });

    opentok.setStreamClassLists('my-broadcast-id', null, function (err) {});
  });

  it('should test signal', () => {
    opentok.signal('my-session-id', 'my-connection-id', { type: 'test', data: '123' }, function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });
  });

  it('should test startArchive', () => {
    opentok.startArchive('my-session-id', {
      outputMode: 'composed',
      layout: { type: 'horizontalPresentation' }
    }, function (err, archive) {
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

  it('should test startBroadcast', () => {
    opentok.startBroadcast('my-session-id', {
      outputs: {
        hls: {},
        rtmp: [{
          id: "foo",
          serverUrl: "rtmp://myfooserver/myfooapp",
          streamName: "myfoostream"
        },
        {
          id: "bar",
          serverUrl: "rtmp://mybarserver/mybarapp",
          streamName: "mybarstream"
        }]
      },
      maxDuration: 5400,
      resolution: "640x480",
      layout: {
        type: "custom",
        stylesheet: "stream.focus {}"
      },
    }, function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });
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

  it('should test stopBroadcast', () => {
    opentok.stopBroadcast('my-session-id', function (err, broadcast) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (broadcast) {
        broadcast.createdAt;
        // $ExpectError
        broadcast.foo;
      }
    });
  });

  it('should test Broadcast', () => {
    opentok.getBroadcast('my-broadcast-id', function (err, broadcast) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (broadcast) {
        broadcast.createdAt;
        // $ExpectError
        broadcast.foo;

        broadcast.stop((err, broadcast) => {
          if (err) {
            err.message;
            // $ExpectError
            err.foo;
          }

          if (broadcast) {
             broadcast.createdAt;
            // $ExpectError
            broadcast.foo;
          }
        });
      }
    });
  });

  it('should test getStream', () => {
    opentok.getStream('my-session-id', 'my-stream-id', function (err, stream) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (stream) {
        stream.id;
        // $ExpectError
        getBroadcast.foo;
      }
    });
  });

  it('should test setLayout', () => {
    opentok.setLayout('my-archive-id', 'custom', '.focus {}', function (err) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }
    });
    opentok.setLayout('my-archive-id', 'horizontalPresentation', null, function (err, stream) {});
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

  it('should test listStreams', () => {
    opentok.listStreams('my-session-id', function (err, streams) {
      if (err) {
        err.message;
        // $ExpectError
        err.foo;
      }

      if (streams && streams.length > 0) {
        streams[0].id;
        // $ExpectError
        streams[0].foo;
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
