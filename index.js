#!/usr/bin/env node
const packageJson = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
 
welcome({
  title: `Get to know Seth`,
  version: `${packageJson.version}`,
  description: `${packageJson.description}`,
  tagLine: `by Seth`,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
  ${chalk.bgBlue.bold(`Satyam Sheth`)}
  ${chalk.green(`Software Enginer`)}${chalk.yellow(` @ `)}${chalk.red(`CVSHealth`)}

  ${chalk.inverse.blue(` LinkedIn `)} ${chalk.dim(`https://linkedin.com/snsheth55`)}
  ${chalk.inverse.green(`  Github  `)} ${chalk.dim(`https://github.com/samsheth92`)}
`);