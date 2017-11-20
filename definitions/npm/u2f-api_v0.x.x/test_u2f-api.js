// @flow

import { isSupported, ensureSupport, register, sign } from "u2f-api";

isSupported().then((b: boolean) => {});
ensureSupport().then(() => {});

sign({
  version: "",
  keyHandle: "",
  appId: ""
}).then(res => {
  (res.keyHandle: ?string);
});

register(
  {
    version: "",
    challenge: ""
  },
  {
    version: "",
    keyHandle: "",
    appId: ""
  }
).then(res => {
  (res.clientData: ?string);
});

// $ExpectError
register();
// $ExpectError
sign();
