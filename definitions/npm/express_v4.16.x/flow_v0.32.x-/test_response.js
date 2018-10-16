// @flow

import express, { 
  Router,
  type $Request,
  type $Response,
  type $Application,
  type NextFunction
} from "express";

import http from "http";


const app = express();

app.use("/response_api", (req: $Request, res: $Response) => {
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
  (req: $Request, res: $Response, next: NextFunction) => {
    router.handle(req, res, next);
  }
);
app.post("/post-router-callable", router);

// Can use an express app directly as a server listener
const httpServer = http.createServer(app);
httpServer.listen(9000);

const badHttpServer = null;
// $ExpectError
badHttpServer.listen();

// Can manually invoke app.handle() to handle a request
const httpServer2 = http.createServer((req, res) => app.handle(req, res));
httpServer.listen(9000);
