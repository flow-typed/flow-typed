import nock from 'nock';

const n = nock('http://localhost');
n.get('foo')
.reply(200, '');
n.reply(200, {});
n.reply((uri: string, body) => {});
n.post('foo');
// $FlowExpectedError
n.get();
// $FlowExpectedError
n.post();
// $FlowExpectedError
n.put();
// $FlowExpectedError
n.delete();

// $FlowExpectedError
n.basicAuth();
n.basicAuth({ user: 'foo', pass: 'bar' });
n.replyDate();
n.replyContentLength();
n.once();
n.twice();
n.thrice();
// $FlowExpectedError
n.times('1');
// $FlowExpectedError
n.delay();
n.delay(200);
n.delay({ head: 100, body: 100 });
// $FlowExpectedError
n.delay('200');
n.socketDelay(200);
n.delayBody(200);
n.delayConnection(200);
n.optionally();
n.persist();
(n.isDone(): bool)


// $FlowExpectedError
nock();

nock.restore();
nock.cleanAll();
nock.disableNetConnect();
nock.enableNetConnect();
nock.enableNetConnect('foo');
// $FlowExpectedError
nock.enableNetConnect(2);
