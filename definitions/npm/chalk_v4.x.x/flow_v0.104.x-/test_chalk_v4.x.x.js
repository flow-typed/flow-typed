// @flow

import chalk, { bold, type Chalk, type Color, type Modifiers } from 'chalk';

const requiredChalk = require('chalk');

// $FlowExpectedError[prop-missing]
const enabled: boolean = chalk.enabled;
const supportsColor: {
  level: $Values<{
    None: 0,
    Basic: 1,
    Ansi256: 2,
    TrueColor: 3,
    ...
  }>,
  hasBasic: boolean,
  has256: boolean,
  has16m: boolean,
  ...
} = chalk.supportsColor;

const colorfulString: string = chalk.red.bgGreen("a soon to be colorful string");
const supportsDim: string = chalk.dim("oh to be dimmed");

const supportsStringTemplate: string = chalk`{red string template} done`;

const useRequiredChalk: string = requiredChalk.bold("required chalk");

const ctx: Chalk = new chalk.Instance({level: 0});

// $FlowExpectedError[incompatible-type] Color must be one of supported colors
const color1: Color = 'random';
const color2: Color = 'black';

// $FlowExpectedError[incompatible-type] Modifier must be one of supported modifiers
const modifier1: Modifiers = 'random';
const modifier2: Modifiers = 'underline';
