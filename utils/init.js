const nodeCheck = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const packageJson = require('../package.json');
const welcome = require('cli-welcome');

module.exports = () => {
unhandled();

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

nodeCheck('12')
}