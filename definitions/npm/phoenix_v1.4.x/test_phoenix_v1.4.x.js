/**
 * @flow
 */

import { Channel, Socket, Presence } from 'phoenix';
import { describe, it } from 'flow-typed-test';


describe('#phoenix', () => {
  it('connect socket and join a channel', () => {
    const socket = new Socket('/socket', { params: { userToken: '123' } });
    socket.connect();

    const channel = socket.channel('room:123', { token: 'abc' });
    channel.onError(() => console.log('there was an error!'));
    channel.onClose(() => console.log('the channel has gone away gracefully'));

    // $ExpectError `on` must take a message type as its first argument
    channel.on(null, msg => console.log('Got message', msg));

    channel.join();
  });

  it('sets up presence correctly', () => {
    const socket = new Socket('/socket', { params: { userToken: '456' } });
    socket.connect();
    const channel = socket.channel('room:123', { token: 'xyz' });
    channel.join();
    const presence = new Presence(channel);

    // detect if user has joined for the 1st time or from another tab/device
    presence.onJoin((id, current, newPres) => {
      if (!current) {
        console.log('user has entered for the first time', newPres);
      } else {
        console.log('user additional presence', newPres);
      }
    });

    // detect if user has left from all tabs/devices, or is still present
    presence.onLeave((id, current, leftPres) => {
      if (current && current.metas && current.metas.length === 0) {
        console.log('user has left from all devices', leftPres);
      } else {
        console.log('user left from a device', leftPres);
      }
    });

    // sync presence data from server
    presence.onSync(() => console.log(presence.list()));
  })

  it('errors on malformed Channel', () => {
    // $ExpectError `Channel` instances must take a `Socket` as the final param
    const channel = new Channel('foo', {});
  })
});

