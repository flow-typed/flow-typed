/* @flow */
import express, { Router } from 'express';

const app = express();

// $ExpectError property `foo` Property not found in Application:
app.foo();

app.locals.title = 'My Express App';

// $ExpectError Symbol: This type is incompatible with string
app.locals[Symbol('bad')] = 'Should not work';

// $ExpectError
const num: number = app.mountpath;

const myRouter = new express.Router();

myRouter.use('/dang', (req, res: express$Response, next: express$NextFunction) => {
    res.set('My Header', 'Value');
    res.status(200);
    res.render('someTemplate', {}, (err, html: ?string) => null);
    res.render('someTemplate', (err, html: ?string) => null);
    // $ExpectError String: This type is incompatible with Function | {[name: string]: mixed}
    res.render('someTemplate', 'Error');
    // $ExpectError
    res.sendFile('/myfile.txt', { dotfiles: 'none' })
    // $ExpectError
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

myRouter.use(handleRequest, (err: ?Error, req: express$Request, res: express$Response, next: express$NextFunction): void => {
    if (err) {
        console.error(err);
    }
    next(err);
});

app.on('mount', (parent: express$Application) => {
    console.log('Parent Loaded', parent);
    // $ExpectError
    parent.fail();
})

app.use('/foo', (req: express$Request, res: express$Response, next) => {
    // $ExpectError
    res.status('400');
    res.send('should work')
        .status(300);
});

const bar: express$Router = new Router();

bar.get('/', (req: express$Request, res: express$Response): void => {
  // $ExpectError should be of type object
  const locals: Array<any> = res.locals;
  res.locals.title = 'Home Page';
  // $ExpectError should not allow to set keys to non string value.
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

// $ExpectError backlog should be number
app.listen(9005, '127.0.0.1', '256', () => {
  console.log('Example app listening on port 9005!');
})

app.set('foo');

app.get('foo');
// $ExpectError
app.enable(100);
// $ExpectError
const f: number = app.enabled('100');

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
  // $ExpectError
  res.redirect('/different', 200);
});

app.use('/failure', (req: express$Request, res: express$Response) => {
  // $ExpectError
  res.redirect();
});

app.use((err: ?Error, req, res, next) => {
    // test req
    req.accepts('accepted/type');
    // test response
    res.redirect('/somewhere');
    // test next
    next();
    next(err);
});
