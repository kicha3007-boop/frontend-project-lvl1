import runGame from "../index.js";
import getRandomInt from "../utils.js";

const description = "Find the greatest common divisor of given numbers.";
const minNumber = 1;
const maxNumber = 100;

const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

const generateRound = () => {
  const a = getRandomInt(minNumber, maxNumber);
  const b = getRandomInt(minNumber, maxNumber);
  return [`${a} ${b}`, String(findGcd(a, b))];
};

export default () => runGame(description, generateRound);
