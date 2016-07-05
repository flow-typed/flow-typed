// @flow

import chalk from 'chalk';

const enabled: boolean = chalk.enabled;
const supportsColor: boolean = chalk.supportsColor;

const hasColor = chalk.hasColor("a maybe colorful string");
const noColor = chalk.stripColor("a colorful string");

const colorfulString = chalk.red.bgGreen("a soon to be colorful string");
