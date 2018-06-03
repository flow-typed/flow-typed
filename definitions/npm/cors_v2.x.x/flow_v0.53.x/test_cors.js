// @flow
import Cors from "cors";
import express from "express";

const api = express().use(Cors({ origin: true }));

// $ExpectError
const api2 = express().use(Cors({ origin: 1 }));
