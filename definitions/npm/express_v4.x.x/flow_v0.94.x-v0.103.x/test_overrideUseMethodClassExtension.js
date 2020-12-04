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

declare type expressConstructor =
  <Req: express$Request, Res: express$Response>() => express$Application<Req, Res>;

declare class test_express$CustomApplication extends express$Application<
  test_express$CustomRequest,
  test_express$CustomResponse,
> {
  constructor(expressConstructor: expressConstructor): this;
}

// Class Extensions: Test Functions
function test_express$CustomApplication(
  expressConstructor: expressConstructor,
) {
  const express = expressConstructor();
  express.use((
    req: test_express$CustomRequest,
    res: test_express$CustomResponse,
    next: express$NextFunction,
  ) => {
    // Private Constructor Mutation: Add new properties
    req.foo = 'hello';
    res.bar = 'goodbye';
    next();
  });
  return express;
}

// Class Extensions: Test
const customApp = new test_express$CustomApplication(express);

// $FlowExpectedError
const customApp_error = new test_express$CustomApplication();

customApp.use('/something', (req: express$Request, res: express$Response, next: express$NextFunction) => {
  // $FlowExpectedError
  req.foo;
  // $FlowExpectedError
  res.bar;
  next();
});
customApp.use('/something', (req: test_express$CustomRequest, res: test_express$CustomResponse, next: express$NextFunction) => {
  req.foo;
  res.bar;
  // $FlowExpectedError
  req.notHere;
  // $FlowExpectedError
  res.notHere;
});

// $FlowExpectedError
customApp.use('/something', (req: string, res: string, next: Function) => { next() });
