// index.js
const argv = require("yargs").argv;
const { sum, min, mul, div } = require("./function");

function invokeAction({ action, num1, num2 }) {
    switch (action) {
        case "sum":
            sum(num1, num2);
            break;

        case "min":
            min(num1, num2);
            break;

        case "mul":
            mul(num1, num2);
            break;

        case "div":
            div(num1, num2);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);