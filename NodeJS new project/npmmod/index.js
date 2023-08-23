import chalk from "chalk";
import validator from "validator";

// console.log(chalk.blue.underline.inverse("False!"));

const res = validator.isEmail("duttaspandanil@ gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));