// @flow

import { Channel, Presence, Socket } from 'phoenix';

// A single connection is established to the server and channels are multiplexed over the
// connection. Connect to the server using the Socket class:
const socket = new Socket('/socket', { params: { userToken: '123' } });
socket.onError(() => console.log('there was an error with the connection!'));
socket.connect();

const channel = socket.channel('room:123', { token: 'abc' });
channel.onError(() => console.log('there was an error!'));
channel.onClose(() => console.log('the channel has gone away gracefully'));
// $ExpectError `on` must take a message type as its first argument
channel.on(null, msg => console.log('Got message', msg));
channel
  .join()
  .receive('ok', ({ messages }) => console.log('catching up', messages))
  .receive('error', ({ reason }) => console.log('failed join', reason))
  .receive('timeout', () => console.log('Networking issue. Still waiting...'));

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
  if (current.metas.length === 0) {
    console.log('user has left from all devices', leftPres);
  } else {
    console.log('user left from a device', leftPres);
  }
});

// receive presence data from server
presence.onSync(() => {
  console.log(presence.list());
});

// $ExpectError: `Channel` instances must take a `Socket` as the final param
const channel2 = new Channel('foo', {});
