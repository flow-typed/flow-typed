/* @flow */
import express from 'express';
import type {
    Middleware,
    $Response,
    $Request,
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

myRouter.get('/dang', (req, res, next) => {
    res.set('My Header', 'Value');
    res.status(200);
    // $ExpectError string This type is incompatible with Error:
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

app.use('/foo', (req, res, next) => {
  res.send('should work');
});
