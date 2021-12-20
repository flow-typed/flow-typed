// @flow
import express from "express";

import { describe, it } from 'flow-typed-test';

describe('express#use', () => {
  it('should permit routers', () => {
    const customApp = express();

    customApp.use("/something", express.Router());
    customApp.use(express.Router(), express.Router());

    // $FlowExpectedError[incompatible-call]
    customApp.use("/something", "/something");
    // $FlowExpectedError[incompatible-call]
    customApp.use("/something", "/something", express.Router());
  });
});

describe('Router#use', () => {
  it('should permit solitary middleware functions', () => {
    const customRouter = express.Router();
    customRouter.use((req: express$Request, res: express$Response, next: express$NextFunction) => {
      next();
    });
  });
});
