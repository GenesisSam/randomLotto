import zeroFill from "./zeroFill";

function getRandomArbitrary(min: number, max: number) {
  // return: min <= value < max
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomLotto(games: number) {
  const omr = [];

  for (let i = 0; i < games; i++) {
    const newLineOfGame: Array<string> = [];

    for (let ci = 0; ci < 6; ci++) {
      let number = zeroFill(getRandomArbitrary(1, 46), 2);
      // check duplicate number;
      while (newLineOfGame.includes(number)) {
        number = zeroFill(getRandomArbitrary(1, 46), 2);
      }
      newLineOfGame.push(number);
    }
    omr.push(newLineOfGame);
  }

  return omr;
}

export default generateRandomLotto;
