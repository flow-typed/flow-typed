// @flow
import * as functions from "firebase-functions";
import express from "express";

functions.https.onRequest((request: Request, response: Response) => response.status(200).send("OK"));
// $ExpectError
functions.https.onRequest(request => request + 0);
// $ExpectError
functions.https.onRequest((request, response) => response + 2);
