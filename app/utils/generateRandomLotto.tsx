function getRandomArbitrary(min: number, max: number) {
  // return: min <= value < max
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomLotto(games: number) {
  const omr = [];

  for (let i = 0; i < games; i++) {
    const newLineOfGame: Array<number> = [];

    for (let ci = 0; ci < 6; ci++) {
      let number = getRandomArbitrary(1, 46);
      // check duplicate number;
      while (newLineOfGame.includes(number)) {
        number = getRandomArbitrary(1, 46);
      }
      newLineOfGame.push(number);
    }
    omr.push(newLineOfGame.sort((a, b) => a - b));
  }

  return omr;
}

export default generateRandomLotto;
