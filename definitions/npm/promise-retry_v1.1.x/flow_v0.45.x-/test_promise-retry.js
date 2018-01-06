// @flow
import promiseRetry from "promise-retry";

function promiseFn(
  retry: (err: Error) => void,
  attemptNumber: number
): Promise<string> {
  if (attemptNumber > 1) {
    // noop just to do the comparison
  }
  return Promise.resolve("foo");
}

promiseRetry(promiseFn).then(function(str: string) {
  console.log(str);
});

promiseRetry(promiseFn, {
  retries: 1,
  factor: 1,
  minTimeout: 1000,
  maxTimeout: 5000,
  randomize: true
}).then(function(str: string) {
  console.log(str);
});

// $ExpectError
promiseRetry(2);

// $ExpectError
promiseRetry(
  function() {
    /* noop */
  },
  { retries: "banana" }
);

// $ExpectError
promiseRetry(promiseFn).then(function(num: number) {
  console.log(num);
});
