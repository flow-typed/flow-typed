// @flow

import BSON from "bson";
import { ObjectId } from "bson";

const bson = new BSON();
bson.serialize({ foo: "bar" });

// $ExpectError missing arg to serialize
bson.serialize();
// $ExpectError missing method
bson.wrong();

const id = new ObjectId();

id.toString();
// $ExpectError
id.wrong();

// $ExpectError
const wrongId = new ObjectId({});
