import raven from 'raven';

const client = new raven.Client('');
raven.patchGlobal(client);
raven.patchGlobal('');
// $FlowExpectedError
raven.patchGlobal();
client.patchGlobal();

client.captureException(new Error());
client.captureMessage('bla');
// $FlowExpectedError - need string to capture
client.captureMessage({});
