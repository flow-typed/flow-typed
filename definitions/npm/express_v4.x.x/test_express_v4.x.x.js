/* @flow */
import express from 'express';
import type {
    Middleware,
    $Response,
    $Request,
    $Application
    NextFunction
} from 'express';
const app = express();

// $ExpectError property `foo` Property not found in Application:
app.foo();

app.locals.title = 'My Express App';

// $ExpectError Symbol: This type is incompatible with string
app.locals[Symbol('bad')] = 'Should not work';

// $ExpectError
const num: number = app.mountpath;

const myRouter = new express.Router();

myRouter.use('/dang', (req, res: $Response, next: NextFunction) => {
    res.set('My Header', 'Value');
    res.status(200);
    // $ExpectError
    res.sendFile('/myfile.txt', { dotfiles: 'none' })
    // $ExpectError
    next('Error');
});


function handleRequest<MiddleWare>(req: $Request, res: $Response, next: NextFunction): void {
    (Math.random() >= 0.5 ? Promise.resolve({ books: ['Catcher and the Rye'] }) :
        Promise.reject(new Error('Something went wrong')))
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
}

myRouter.use(handleRequest, (err: ?Error, req: $Request, res: $Response, next: NextFunction): void => {
    if (err) {
        console.error(err);
    }
    next(err);
});

app.on('mount', (parent: $Application) => {
    console.log('Parent Loaded', parent);
    // $ExpectError
    parent.fail();
})

app.use('/foo', (req: $Request, res: $Response, next) => {
    // $ExpectError
    res.status('400');
    res.send('should work')
        .status(300);
});

app.listen(9000);

app.set('foo');

app.get('foo');
// $ExpectError
app.enable(100);
// $ExpectError
const f: number = app.enabled('100');

app.render('view', { title: 'News Feed' }, (err: ?Error, html: string): void => {
    if (err) return console.log(err);
    console.log(html);
});
