// @flow

import BSON from "bson";
import { ObjectId } from "bson";

const bson = new BSON();
bson.serialize({ foo: "bar" });

// $FlowExpectedError missing arg to serialize
bson.serialize();
// $FlowExpectedError missing method
bson.wrong();

const id = new ObjectId();

id.toString();
// $FlowExpectedError
id.wrong();

// $FlowExpectedError
const wrongId = new ObjectId({});
