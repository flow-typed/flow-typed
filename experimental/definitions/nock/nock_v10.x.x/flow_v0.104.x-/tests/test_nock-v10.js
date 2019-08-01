import nock from 'nock';

const n = nock('http://localhost');
n.get('foo').reply(200, '');
n.reply(200, {});
n.reply((uri: string, body) => {});
n.post('foo');
// $ExpectError
n.get();
// $ExpectError
n.post();
// $ExpectError
n.put();
// $ExpectError
n.delete();

// $ExpectError
n.basicAuth();
n.basicAuth({ user: 'foo', pass: 'bar' });
n.replyDate();
n.replyContentLength();
n.once();
n.twice();
n.thrice();
// $ExpectError
n.times('1');
// $ExpectError
n.delay();
n.delay(200);
n.delay({ head: 100, body: 100 });
// $ExpectError
n.delay('200');
n.socketDelay(200);
n.delayBody(200);
n.delayConnection(200);
n.optionally();
n.optionally(true);
// $ExpectError
n.optionally('yes');
n.persist();
(n.isDone(): boolean);

// $ExpectError
nock();

nock.restore();
nock.cleanAll();
nock.disableNetConnect();
nock.enableNetConnect();
nock.enableNetConnect('foo');
// $ExpectError
nock.enableNetConnect(2);
