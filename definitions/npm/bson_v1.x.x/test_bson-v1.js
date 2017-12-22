// @flow

import { ObjectId } from "bson";

const id = new ObjectId();

id.toString();
// $ExpectError
id.wrong();

// $ExpectError
const wrongId = new ObjectId({});
