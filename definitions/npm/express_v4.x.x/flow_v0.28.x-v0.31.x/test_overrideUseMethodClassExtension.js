// @flow
import express from 'express'

// Class Extensions: Global Class/Type Declarations (prefixed to prevent name clashes)
// Use method needs to be covarient: https://github.com/facebook/flow/issues/2770#issuecomment-258955097
declare class test_express$CustomRequest extends express$Request {
  foo: string;
}
declare class test_express$CustomResponse extends express$Response {
  bar: string;
}
declare type test_express$CustomNextFunction = express$NextFunction;

declare type test_express$CustomMiddleware =
  ((req: test_express$CustomRequest, res: test_express$CustomResponse, next: test_express$CustomNextFunction) => mixed) |
  ((error: Error, req: test_express$CustomRequest, res: test_express$CustomResponse, next: test_express$CustomNextFunction) => mixed);

declare class test_express$CustomApplication extends express$Application {
  constructor(expressConstructor: () => express$Application): this;
  use(middleware: test_express$CustomMiddleware): this;
  use(...middleware: Array<test_express$CustomMiddleware>): this;
  use(path: string|RegExp|string[], ...middleware: Array<test_express$CustomMiddleware>): this;
  use(path: string, router: express$Router): this;
}

// Class Extensions: Test Functions
function test_express$CustomApplication(
  expressConstructor: () => express$Application
) {
  const express = expressConstructor();
  express.use((req: any, res: any, next: express$NextFunction) => {
    // Private Constructor Mutation: Add new properties
    req.foo = 'hello';
    res.bar = 'goodbye';
    next();
  });
  return express;
}

// Class Extensions: Test
const customApp = new test_express$CustomApplication(express);

// $ExpectError
const customApp_error = new test_express$CustomApplication();

customApp.use('/something', (req: express$Request, res: express$Response, next: express$NextFunction) => {
  // $ExpectError
  req.foo;
  // $ExpectError
  res.bar;
  next();
});
customApp.use('/something', (req: test_express$CustomRequest, res: test_express$CustomResponse, next: test_express$CustomNextFunction) => {
  req.foo;
  res.bar;
  // $ExpectError
  req.notHere;
  // $ExpectError
  res.notHere;
});

// $ExpectError
customApp.use('/something', (req: string, res: string, next: Function) => { next() });
