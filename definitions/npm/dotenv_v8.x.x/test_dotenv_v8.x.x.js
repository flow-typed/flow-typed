// @flow

import dotenv from 'dotenv';
import 'dotenv/config';

const configResult = dotenv.config();
if (configResult.error) {
  (configResult.error: Error);

  // $ExpectError
  (parsed['KEY']: string);
} else {
  const parsed = configResult.parsed;
  (parsed['KEY']: string);

  // $ExpectError
  (parsed['KEY']: number);

  // $ExpectError
  (parsed[1]: string);
}

dotenv.config({
  encoding: 'utf8'
});

dotenv.config({
  path: '.env'
});

dotenv.config({
  encoding: 'utf8',
  path: '.env',
  debug: true,
});

// $ExpectError
dotenv.config({ foo: 'bar' });

const parsed = dotenv.parse('KEY=VALUE');
(parsed['KEY']: string);

// $ExpectError
(parsed['KEY']: number);

// $ExpectError
(parsed[1]: string);

dotenv.parse('KEY=VALUE', { debug: true });

// $ExpectError
dotenv.parse('KEY=VALUE', { debug: 'foo' });

// $ExpectError
dotenv.parse('KEY=VALUE', { foo: 'bar' });

// $ExpectError
dotenv.foo();
