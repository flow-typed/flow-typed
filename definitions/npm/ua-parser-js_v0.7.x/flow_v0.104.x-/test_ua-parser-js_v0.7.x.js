// @flow

import UAParser from 'ua-parser-js';

const parser = new UAParser();
(parser: UAParser);

parser.setUA('MOCK UA');
// $FlowExpectedError
parser.setUA(123);

(parser.getBrowser(): {
  name: string,
  version: string,
  ...
});

(parser.getCPU(): {
  architecture: string,
  ...
});

const device = parser.getDevice();
(device.model: string);
(device.vendor: string);
(device.type: string);

(parser.getEngine(): {
  name: string,
  version: string,
  ...
});

const parserResult = parser.getResult();
// $FlowExpectedError
(parserResult.browser: null);
// $FlowExpectedError
(parserResult.cpu: null);
// $FlowExpectedError
(parserResult.device: null);
// $FlowExpectedError
(parserResult.engine: null);
// $FlowExpectedError
(parserResult.os: null);
// $FlowExpectedError
(parserResult.ua: null);

(parser.getOS(): {
  name: string,
  version: string,
  ...
});

(parser.getUA(): string);

// Alternative API - invoke it as a function and immediately obtain parsed
// results
(UAParser('Dummy user agent').os.name: string);
