import { describe, it } from 'flow-typed-test';
import { createServer } from 'http';
import assert from 'assert';
import type { IncomingMessage, ServerResponse } from 'http';

import request from 'supertest';

describe('expectations', () => {
  declare function serverFunction(req: IncomingMessage, res: ServerResponse): void;

  it('works with get method', async () => {
    await request(serverFunction).get('/').expect(200);
    await request(createServer(serverFunction)).get('/').expect(200);

    request(serverFunction)
      .get('/user')
      .auth('username', 'password')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });

  it('accepts various authentication styles', async () => {
    await request(serverFunction)
      .get('/user')
      .auth('username', 'password')
      .expect(200);
    await request(serverFunction)
      .get('/user')
      .auth('token', { type: 'bearer' })
      .expect(200, 'body string');
  });

  it('works with callback-style test runners', (done) => {
    request(serverFunction)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    request(serverFunction)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, /some body/, done);
  });

  it('works with the post method', async () => {
    await request(serverFunction)
      .post('/users')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('works with promises-style test runner', (): Promise<any> => {
    return request(serverFunction)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert(response.body.email, 'foo@bar.com');
        (response.type: string);
      })
  });

  it('works with a function expectation', async () => {
    await request(serverFunction)
      .post('/user')
      .send('name=john') // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toLowerCase();
      })
      .expect(200, {
        id: 'some fixed id',
        name: 'john'
      });
  });

  it('supports testing multipart upload', async () => {
    await request(serverFunction)
      .post('/')
      .field('name', 'my awesome avatar')
      .attach('avatar', 'test/fixtures/avatar.jpg')
      .expect(200);
  });

  it('supports query strings', async () => {
    await request(serverFunction)
      .get('/')
      .query({ foo: 'bar' });
  });

  it('supports more methods', async () => {
    const app = request(serverFunction);
    await app.acl('/').expect(200);
    await app.bind('/').expect(200);
    await app.checkout('/').expect(200);
    await app.connect('/').expect(200);
    await app.copy('/').expect(200);
    await app.delete('/').expect(200);
    await app.del('/').expect(200);
    await app.get('/').expect(200);
    await app.head('/').expect(200);
    await app.link('/').expect(200);
    await app.lock('/').expect(200);
    await app['m-search']('/').expect(200);
    await app.merge('/').expect(200);
    await app.mkactivity('/').expect(200);
    await app.mkcalendar('/').expect(200);
    await app.mkcol('/').expect(200);
    await app.move('/').expect(200);
    await app.notify('/').expect(200);
    await app.options('/').expect(200);
    await app.patch('/').expect(200);
    await app.post('/').expect(200);
    await app.propfind('/').expect(200);
    await app.proppatch('/').expect(200);
    await app.purge('/').expect(200);
    await app.put('/').expect(200);
    await app.rebind('/').expect(200);
    await app.report('/').expect(200);
    await app.search('/').expect(200);
    await app.source('/').expect(200);
    await app.subscribe('/').expect(200);
    await app.trace('/').expect(200);
    await app.unbind('/').expect(200);
    await app.unlink('/').expect(200);
    await app.unlock('/').expect(200);
    await app.unsubscribe('/').expect(200);

    // check we're actually type checking using typos
    // $FlowExpectedError
    await app.psot('/').expect(200);
    // $FlowExpectedError
    await app.post('/').expct(200);
  });

  it('returns a proper response', async () => {
    const response = await request(serverFunction)
      .get('/user')
      .expect(200);

    (response.text: string | void);
    (response.type: string);
    (response.charset: string | void);
    (response.status: number);
    (response.statusCode: number);
    (response.headers['Content-Length']: string);

    // errors
    (response.ok: boolean);
    (response.redirect: boolean);
    (response.info: boolean);
    (response.clientError: boolean);
    (response.serverError: boolean);
    (response.created: boolean);
    (response.accepted: boolean);
    (response.noContent: boolean);
    (response.badRequest: boolean);
    (response.unauthorized: boolean);
    (response.forbidden: boolean);
    (response.notFound: boolean);
    (response.notAcceptable: boolean);
    (response.unprocessableEntity: boolean);

    // check we're actually type checking using typos
    // $FlowExpectedError
    (response.tpye: string);
  })

  it('there is a called boolean in the request', () => {
    let req = request(serverFunction).get('/user');
    (req.called: boolean);
    // $FlowExpectedError
    req.foo;

    req = req.expect(200);
    (req.called: boolean);
    // $FlowExpectedError
    req.foo;
  })
});
