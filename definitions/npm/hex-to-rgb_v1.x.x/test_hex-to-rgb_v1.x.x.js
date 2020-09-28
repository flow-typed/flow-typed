// @flow
import hexToRgb from 'hex-to-rgb';

const rgb: Array<number> = hexToRgb('#ffa71a');

// $FlowExpectedError number. This type is incompatible with string
hexToRgb(123456);
