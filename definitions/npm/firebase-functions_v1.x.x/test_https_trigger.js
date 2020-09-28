// @flow
import * as functions from "firebase-functions";

functions.https.onRequest((request: any, response: any) => response.status(200).send("OK"));
