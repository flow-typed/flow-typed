// @flow

import UAParser from 'ua-parser-js';

const parser = new UAParser();
(parser: UAParser);

parser.setUA('MOCK UA');
// $ExpectError
parser.setUA(123);

(parser.getBrowser(): {
  name: string,
  version: string,
});

(parser.getCPU(): {
  architecture: string,
});

const device = parser.getDevice();
(device.model: string);
(device.vendor: string);
(device.type: string);

(parser.getEngine(): {
  name: string,
  version: string,
});

const parserResult = parser.getResult();
// $ExpectError
(parserResult.browser: null);
// $ExpectError
(parserResult.cpu: null);
// $ExpectError
(parserResult.device: null);
// $ExpectError
(parserResult.engine: null);
// $ExpectError
(parserResult.os: null);
// $ExpectError
(parserResult.ua: null);

(parser.getOS(): {
  name: string,
  version: string,
});

(parser.getUA(): string);
