/* @flow */
import express, { Router } from "express";

const app = express();

// $ExpectError property `foo` Property not found in Application:
app.foo();

app.locals.title = "My Express App";

// $ExpectError Symbol: This type is incompatible with string
app.locals[Symbol("bad")] = "Should not work";

// $ExpectError
const num: number = app.mountpath;

const myRouter = new express.Router();

myRouter.use(
  "/dang",
  (req, res: express$Response, next: express$NextFunction) => {
    res.set("My Header", "Value");
    res.header("Another-Header", "different value");
    res.set({ "third-header": "123", "forth-header": "abc" });
    res.header({ "fifth-header": "456", "sixth-header": "def" });
    res.status(200);
    res.render("someTemplate", {}, (err, html: ?string) => null);
    res.render("someTemplate", (err, html: ?string) => null);
    // $ExpectError String: This type is incompatible with Function | {[name: string]: mixed}
    res.render("someTemplate", "Error");
    // $ExpectError
    res.sendFile("/myfile.txt", { dotfiles: "none" });
    // $ExpectError
    next("Error");
  }
);

function handleRequest<MiddleWare>(
  req: express$Request,
  res: express$Response,
  next: express$NextFunction
): void {
  (Math.random() >= 0.5
    ? Promise.resolve({ books: ["Catcher and the Rye"] })
    : Promise.reject(new Error("Something went wrong"))
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
}

myRouter.use(
  handleRequest,
  (
    err: Error,
    req: express$Request,
    res: express$Response,
    next: express$NextFunction
  ): void => {
    console.error(err);
    next(err);
  }
);

app.on("mount", (parent: express$Application) => {
  console.log("Parent Loaded", parent);
  // $ExpectError
  parent.fail();
});

app.use("/foo", (req: express$Request, res: express$Response, next) => {
  // $ExpectError
  res.status("400");
  res.send("should work").status(300);
});

const bar: express$Router = new Router();

bar.get("/", (req: express$Request, res: express$Response): void => {
  // $ExpectError should be of type object
  const locals: Array<any> = res.locals;
  res.locals.title = "Home Page";
  // $ExpectError should not allow to set keys to non string value.
  res.locals[0] = "Fail";
  res.send("bar").status(200);
});

app.use("/bar", bar);

app.listen(9000);

app.listen(9001, "127.0.0.1");

app.listen(9002, "127.0.0.1", 256);

app.listen(9003, "127.0.0.1", 256, () => {
  console.log("Example app listening on port 9003!");
});

app.listen(9004, () => {
  console.log("Example app listening on port 9004!");
});

// $ExpectError backlog should be number
app.listen(9005, "127.0.0.1", "256", () => {
  console.log("Example app listening on port 9005!");
});

app.set("foo");

app.get("foo");
// $ExpectError
app.enable(100);
// $ExpectError
const f: number = app.enabled("100");

const g: express$Application = app.enable("foo");

app.render(
  "view",
  { title: "News Feed" },
  (err: ?Error, html: ?string): void => {
    if (err) return console.log(err);
    console.log(html);
  }
);

app.use("/somewhere", (req: express$Request, res: express$Response) => {
  res.redirect("/somewhere-else");
});

app.use("/again", (req: express$Request, res: express$Response) => {
  res.redirect(200, "/different");
});

app.use("/something", (req: express$Request, res: express$Response) => {
  // $ExpectError
  res.redirect("/different", 200);
});

// False positive since 0.39
// app.use('/failure', (req: express$Request, res: express$Response) => {
//   res.redirect();
// });

app.use(
  (
    err: Error,
    req: express$Request,
    res: express$Response,
    next: express$NextFunction
  ) => {
    // test req
    req.accepts("accepted/type");
    req.accepts(["json", "text"]);
    if (typeof req.query.foo === "string") console.log((req.query.foo: string));
    else console.log((req.query.foo: Array<string>));
    // test response
    res.redirect("/somewhere");
    // test next
    next();
    next(err);
  }
);

// $ExpectError path could not be an Object
const invalidPath: express$Path = {};

let validPath: express$Path = "string_path";
validPath = "pattern?path";
validPath = new RegExp("some.*regexp");

const validPaths = ["string", "pattern?", /a[b-f]+g/];

app.get(validPaths, (req: express$Request, res: express$Response) => {
  res.end();
});

// http://expressjs.com/en/4x/api.html#express.json
// express.json() is incorporated from body-parser.

// Simple case - it can be called with no args.
express.json();

// The result of express.json() is a middleware the app can use.
app.use(express.json());

// Reviver comes from JSON.parse's reviver function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter
express.json({
  reviver: (key, value) => {
    typeof value === "number"
      ? value * 2 // return value * 2 for numbers
      : value; // return everything else unchanged
  }
});

// type says it must be truthy, but intent is more clearly expressed as a bool.
express.json({
  // $ExpectError
  type: req => 0
});

// https://expressjs.com/en/4x/api.html#express.urlencoded
// body-parser based middleware for parsing urlencoded payloads

// can be called with no args
express.urlencoded();

// urlencoded is a middleware
app.use(express.urlencoded());

// limit can be a string or number
express.urlencoded({
  limit: 100,
});
express.urlencoded({
  limit: '100b',
});
express.urlencoded({
  // $ExpectError
  limit: false,
});

// type says it must be truthy, but intent is more clearly expressed as a bool.
express.urlencoded({
  // $ExpectError
  type: req => 0
});

// type can be a string or array of strings
express.urlencoded({
  type: 'foo'
});
express.urlencoded({
  type: ['foo', 'bar']
});
express.urlencoded({
  // $ExpectError
  type: [1 , 2]
});
