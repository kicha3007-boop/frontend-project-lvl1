import readlineSync from "readline-sync";
import greetUser from "./cli.js";

const roundsCount = 3;

// description — правила игры, generateRound() → [вопрос, правильный ответ строкой]
const runGame = (description, generateRound) => {
  const name = greetUser();
  console.log(description);

  for (let round = 0; round < roundsCount; round += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
