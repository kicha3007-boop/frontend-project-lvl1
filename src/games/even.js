import runGame from "../index.js";
import getRandomInt from "../utils.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(minNumber, maxNumber);
  return [String(number), isEven(number) ? "yes" : "no"];
};

export default () => runGame(description, generateRound);
