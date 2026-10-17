import runGame from "../index.js";
import getRandomInt from "../utils.js";

const description = "What number is missing in the progression?";
const minLength = 5;
const maxLength = 10;
const maxStart = 50;
const maxStep = 10;

const buildProgression = (start, step, length) =>
  Array.from({ length }, (_, index) => start + index * step);

const generateRound = () => {
  const length = getRandomInt(minLength, maxLength);
  const progression = buildProgression(getRandomInt(0, maxStart), getRandomInt(1, maxStep), length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const answer = String(progression[hiddenIndex]);
  const question = progression
    .map((item, index) => (index === hiddenIndex ? ".." : item))
    .join(" ");
  return [question, answer];
};

export default () => runGame(description, generateRound);
