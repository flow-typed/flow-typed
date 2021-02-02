// @flow

import chalk from 'chalk';

const enabled: boolean = chalk.enabled;
const supportsColor: boolean = chalk.supportsColor;

const hasColor = chalk.hasColor("a maybe colorful string");
const noColor = chalk.stripColor("a colorful string");

const colorfulString = chalk.red.bgGreen("a soon to be colorful string");
const supportsDim = chalk.dim("oh to be dimmed");

// $FlowExpectedError
const enabledString: string = chalk.enabled;

// $FlowExpectedError
const enabledString2: string = chalk.hasColor(123);

// $FlowExpectedError
const enabledString3: string = chalk.stripColor(123);
