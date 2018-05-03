// @flow

import chalk, { bold } from 'chalk';

const requiredChalk = require('chalk');

const enabled: boolean = chalk.enabled;
const supportsColor: boolean = chalk.supportsColor;

const colorfulString: string = chalk.red.bgGreen("a soon to be colorful string");
const supportsDim: string = chalk.dim("oh to be dimmed");

const supportsStringTemplate: string = chalk`{red string template} done`;

const useRequiredChalk: string = requiredChalk.bold("required chalk");

// $ExpectError
const enabledString: string = chalk.enabled;
