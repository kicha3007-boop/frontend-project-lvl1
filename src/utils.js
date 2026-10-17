// Случайное целое от min до max включительно
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInt;
