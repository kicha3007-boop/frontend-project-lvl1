import runGame from "../index.js";
import getRandomInt from "../utils.js";

const description = "What is the result of the expression?";
const operators = ["+", "-", "*"];
const minNumber = 1;
const maxNumber = 25;

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const a = getRandomInt(minNumber, maxNumber);
  const b = getRandomInt(minNumber, maxNumber);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  return [`${a} ${operator} ${b}`, String(calculate(a, b, operator))];
};

export default () => runGame(description, generateRound);
