import raven from 'raven';

const client = new raven.Client('');
raven.patchGlobal(client);
raven.patchGlobal('');
// $ExpectError
raven.patchGlobal();
client.patchGlobal();

client.captureException(new Error());
client.captureMessage('bla');
// $ExpectError - need string to capture
client.captureMessage({});
