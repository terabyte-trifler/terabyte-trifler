import chalk from 'chalk';

console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));


const path = require("path");

console.log(__dirname);

console.log(path.join(__dirname,"index.js"));