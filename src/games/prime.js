import runGame from "../index.js";
import getRandomInt from "../utils.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(minNumber, maxNumber);
  return [String(number), isPrime(number) ? "yes" : "no"];
};

export default () => runGame(description, generateRound);
