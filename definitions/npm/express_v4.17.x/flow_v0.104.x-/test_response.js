// @flow

import express, { Router } from "express";
import http from "http";

const app = express();

app.use("/response_api", (req: express$Request, res: express$Response) => {
  const contentLength = String(2);
  res.set("Content-Length", contentLength);
  res.set("Content-Type", "application/json");
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "application/json"
  });
  res.end("{}");
  res.req;
});

// Can manually invoke router.handle() to handle a request.
const router = new Router();
app.use(
  "/router",
  (req: express$Request, res: express$Response, next: express$NextFunction) => {
    router.handle(req, res, next);
  }
);
app.post("/post-router-callable", router);

// Can set a custom param on request
app.param('test', (
  req: express$Request & { testValue: string, ... },
  res: express$Response,
  next: express$NextFunction,
  id: string,
  paramName: string,
) => {
  req.testValue = id;
  next();
});

// Can use an express app directly as a server listener
const httpServer = http.createServer(app);
httpServer.listen(9000);

const badHttpServer = null;
// $FlowExpectedError[incompatible-use]
badHttpServer.listen();

// Can manually invoke app.handle() to handle a request
const httpServer2 = http.createServer((req, res) => app.handle(req, res));
httpServer.listen(9000);
