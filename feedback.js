export default function wordle(chosen, guess) {
  let c = chosen.toUpperCase();
  let g = guess.toUpperCase();

  if (c.length !== g.length) {
    return "Words does not match!";
  }

  if (c === g) {
    return "Your guess is correct!";
  }

  const res = g.split("").map((char, index) => {
    if (char === c[index]) {
      return { letter: char, result: "correct" };
    } else if (!c.includes(char)) {
      return { letter: char, result: "incorrect" };
    } else if (c.includes(char)) {
      return { letter: char, result: "misplaced" };
    }
  });

  return res;
}

const word = wordle("cykla", "hallå");
console.log(word);