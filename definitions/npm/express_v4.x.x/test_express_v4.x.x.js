/* @flow */
import express from 'express';

const app = express();

// $ExpectError property `foo` Property not found in Application
app.foo();

app.use((req, res, next) => {
  // $ExpectError
  res.shouldNotExist();
});
