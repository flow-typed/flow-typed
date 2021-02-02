// @flow

import dotenv from 'dotenv';
import 'dotenv/config';

const configResult = dotenv.config();
if (configResult.error) {
  (configResult.error: Error);

  // $FlowExpectedError
  (parsed['KEY']: string);
} else {
  const parsed = configResult.parsed;
  (parsed['KEY']: string);

  // $FlowExpectedError
  (parsed['KEY']: number);

  // $FlowExpectedError
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

// $FlowExpectedError
dotenv.config({ foo: 'bar' });

const parsed = dotenv.parse('KEY=VALUE');
(parsed['KEY']: string);

// $FlowExpectedError
(parsed['KEY']: number);

// $FlowExpectedError
(parsed[1]: string);

dotenv.parse('KEY=VALUE', { debug: true });

// $FlowExpectedError
dotenv.parse('KEY=VALUE', { debug: 'foo' });

// $FlowExpectedError
dotenv.parse('KEY=VALUE', { foo: 'bar' });

// $FlowExpectedError
dotenv.foo();
