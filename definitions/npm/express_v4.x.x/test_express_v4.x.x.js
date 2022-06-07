// @flow
import { describe, test } from 'flow-typed-test'
import express, { Router } from 'express';

const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();

// $FlowExpectedError[prop-missing] property `foo` Property not found in Application:
app.foo();

app.locals.title = 'My Express App';

// $FlowExpectedError[incompatible-type] Symbol: This type is incompatible with string
app.locals[Symbol('bad')] = 'Should not work';

// $FlowExpectedError[incompatible-type]
const num: number = app.mountpath;

const myRouter = new express.Router();

myRouter.use('/dang', (req, res: express$Response, next: express$NextFunction) => {
    res.set('My Header', 'Value');
    res.header('Another-Header', 'different value');
    res.set({'third-header': '123', 'forth-header': 'abc'});
    res.header({'fifth-header': '456', 'sixth-header': 'def'});
    res.status(200);
    res.render('someTemplate', {}, (err, html: ?string) => null);
    res.render('someTemplate', (err, html: ?string) => null);
    // $FlowExpectedError[incompatible-call] String: This type is incompatible with Function | {[name: string]: mixed}
    res.render('someTemplate', 'Error');
    // $FlowExpectedError[incompatible-call]
    res.sendFile('/myfile.txt', { dotfiles: 'none' })
    // $FlowExpectedError[incompatible-call]
    next('Error');
});


function handleRequest<MiddleWare>(req: express$Request, res: express$Response, next: express$NextFunction): void {
    (Math.random() >= 0.5 ? Promise.resolve({ books: ['Catcher and the Rye'] }) :
        Promise.reject(new Error('Something went wrong')))
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
}

myRouter.use(handleRequest, (err: Error, req: express$Request, res: express$Response, next: express$NextFunction): void => {
    console.error(err);
    next(err);
});

app.on('mount', (parent: express$Application<>) => {
    console.log('Parent Loaded', parent);
    // $FlowExpectedError[prop-missing]
    parent.fail();
})

app.use('/foo', (req: express$Request, res: express$Response, next) => {
    // $FlowExpectedError[incompatible-call]
    res.status('400');
    res.send('should work')
        .status(300);
});

const bar: express$Router<> = new Router();

bar.get('/', (req: express$Request, res: express$Response): void => {
  // $FlowExpectedError[incompatible-type] should be of type object
  const locals: Array<any> = res.locals;
  res.locals.title = 'Home Page';
  // $FlowExpectedError[incompatible-type] should not allow to set keys to non string value.
  res.locals[0] = 'Fail';
  res.send('bar')
    .status(200);
});

app.use('/bar', bar)

app.listen(9000);

app.listen(9001, '127.0.0.1');

app.listen(9002, '127.0.0.1', 256);

app.listen(9003, '127.0.0.1', 256, () => {
  console.log('Example app listening on port 9003!');
});

app.listen(9004, () => {
  console.log('Example app listening on port 9004!');
});

// $FlowExpectedError[incompatible-call] backlog should be number
app.listen(9005, '127.0.0.1', '256', () => {
  console.log('Example app listening on port 9005!');
})

app.set('foo');

app.get('foo');
// $FlowExpectedError[incompatible-call]
app.enable(100);
// $FlowExpectedError[incompatible-type]
const f: number = app.enabled('100');

const g: express$Application<> = app.enable('foo');

app.render('view', { title: 'News Feed' }, (err: ?Error, html: ?string): void => {
    if (err) return console.log(err);
    console.log(html);
});

app.use('/somewhere', (req: express$Request, res: express$Response) => {
  res.redirect('/somewhere-else');
});

app.use('/again', (req: express$Request, res: express$Response) => {
  res.redirect(200, '/different');
});

app.use('/something', (req: express$Request, res: express$Response) => {
  // $FlowExpectedError[incompatible-call]
  res.redirect('/different', 200);
});

// False positive since 0.39
// app.use('/failure', (req: express$Request, res: express$Response) => {
//   res.redirect();
// });

app.use((err: Error, req: express$Request, res: express$Response, next: express$NextFunction) => {
    // test req
    req.accepts('accepted/type');
    req.accepts(['json', 'text']);
    req.is('json');
    if (typeof req.query.foo === 'string')
      console.log((req.query.foo: string));
    else
      console.log((req.query.foo: Array<string>));
    // test response
    res.redirect('/somewhere');
    // test next
    next();
    next(err);
});

// $FlowExpectedError[incompatible-type] path could not be an Object
const invalidPath: express$Path = {};

let validPath: express$Path = 'string_path';
validPath = 'pattern?path';
validPath = new RegExp('some.*regexp');

const validPaths = ['string', 'pattern?', /a[b-f]+g/];

app.get(validPaths, (req: express$Request, res: express$Response) => {
  res.end();
});

describe('express', () => {
  test('http vs https server usage', () => {
    const app = express();

    // start http server
    const port = 15000;
    let server = http.createServer(app).listen(port);

    // start https server
    const sslOptions = {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    };

    let serverHttps = https.createServer(sslOptions, app).listen(443);
  });
});
