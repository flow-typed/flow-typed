// @flow

import chalk, { bold, type Chalk } from 'chalk';

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
