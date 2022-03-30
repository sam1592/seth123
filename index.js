#!/usr/bin/env node
const chalk = require('chalk');
const log = console.log;
const sym = require('log-symbols');
const alerts = require('seth-alerts');
const init = require('./utils/init');

//alerts colors
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.yellow;
const error = chalk.red;

  (() => {
    init();

    log(`
    ${chalk.bgBlue.bold(`Satyam Sheth`)}
    ${chalk.green(`Software Enginer`)}${chalk.yellow(` @ `)}${chalk.red(`CVSHealth`)}

    ${chalk.inverse.blue(` LinkedIn `)} ${chalk.dim(`https://linkedin.com/snsheth55`)}
    ${chalk.inverse.green(`  Github  `)} ${chalk.dim(`https://github.com/samsheth92`)}
  `);

    log(`
      ${sym.success} ${success(` SUCCESS `)} Thanks for checking out my cli.
      ${sym.info} ${info(` INFO `)} I am creating a CLI.
      ${sym.warning} ${warning(` WARNING `)} Please don't copy me!
      ${sym.error} ${error(` ERROR `)} I'm on vacation contact me next week.
    `);

    alerts({
      type: "success",
      name: "its working!",
      msg: "imported npm modules!!!"
    });
  })();