// @flow

import express, { Router } from 'express';

const app = express();

app.use('/response_api', (req: express$Request, res: express$Response) => {
  const contentLength = String(2);
  res.set('Content-Length', contentLength);
  res.set('Content-Type', 'application/json');
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'application/json',
  });
  res.end('{}');
});
