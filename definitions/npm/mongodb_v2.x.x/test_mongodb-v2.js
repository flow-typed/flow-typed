/* @flow */
import mongodb from "mongodb";

mongodb.ObjectId.isValid("000000000000000000000000");
// $ExpectError
mongodb.ObjectId.isValid(null);

const mongo = new mongodb.ObjectId();
const id: string = mongo.generate();

