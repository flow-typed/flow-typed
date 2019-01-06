// @flow strict

import limit from "promise-limit";

// $ExpectError
limit("");

const limiter = limit(3);

function dosomething_(): Promise<string> {
  return Promise.resolve("hi");
}
const dosomething = () => limiter(() => dosomething_());
(dosomething: () => Promise<string>);

dosomething().then(console.log);
