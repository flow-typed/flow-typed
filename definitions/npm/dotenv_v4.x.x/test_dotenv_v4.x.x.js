// @flow

import dotenv from 'dotenv';

(dotenv.config(): boolean);
(dotenv.load(): boolean);

dotenv.config({
  encoding: 'utf8'
});

dotenv.config({
  path: '.env'
});

dotenv.config({
  encoding: 'utf8',
  path: '.env'
});

const parsed = dotenv.parse('KEY=VALUE');
(parsed['KEY']: string);

// $FlowExpectedError
(parsed['KEY']: number);

// $FlowExpectedError
(parsed[1]: string);
