import Twit from 'twit';

const t = new Twit({
  consumer_key: 'key',
  consumer_secret: 'secret',
  access_token: 'token',
  access_token_secret: 'tokenSecret',
});
// $ExpectError
t.post();
// $ExpectError
t.get();
// $ExpectError
t.postMediaChunked();

(t.post('/foo', {}): Promise<any>);
(t.get('/foo', {}): Promise<any>);

const stream = t.stream('/user');
stream.stop();
stream.start();
stream.on('test', data => {});
// $ExpectError
stream.on();
