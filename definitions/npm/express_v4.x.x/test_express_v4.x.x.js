/* @flow */
import express from 'express';

const app = express();

// $ExpectError property `foo` Property not found in Application:
app.foo();

const myRouter = new express.Router();

myRouter.get('/dang', (req, res) => {
    res.json({ payload: 'stuff' });
});
// This should work but doesn't for now... :-(
app.use((req, res) => {
  res.send('should work');
});
