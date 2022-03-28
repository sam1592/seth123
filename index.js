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
NAME: ${packageJson.name}
VERSION: ${packageJson.version}
DESC: ${packageJson.description}
`)

log(`
  ${chalk.blue(`Satyam Sheth`)}
  Software Enginer @ CVS Health

  LinkindIn -> https://linkedin.com/snsheth55
  Github    -> https://github.com/samsheth92
`);