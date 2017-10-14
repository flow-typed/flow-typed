// @flow

import chalk from 'chalk';

const enabled: boolean = chalk.enabled;
const supportsColor: boolean = chalk.supportsColor;

const colorfulString = chalk.red.bgGreen("a soon to be colorful string");
const supportsDim = chalk.dim("oh to be dimmed");

// $ExpectError
const enabledString: string = chalk.enabled;
