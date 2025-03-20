/* 

  Test strategy: 


*/

import { describe, expect, test } from "@jest/globals";
import wordle from "./feedback.js";

describe("the game wordle", () => {
  test("the words: 'BANAN' and 'VALFISK'", () => {
    const output = wordle("BANAN", "VALFISK");
    expect(output).toEqual("Words does not match!");
  });

  test("the words: 'BANAN' and 'BANAN'", () => {
    const output = wordle("BANAN", "BANAN");
    expect(output).toEqual("Your guess is correct!");
  });

  test("the words: 'CYKLA' and 'HALLÅ'", () => {
    const output = wordle("CYKLA", "HALLÅ");
    expect(output).toEqual([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

  test("the words: 'LUTFISK' and 'VALFISK'", () => {
    const output = wordle("LUTFISK", "VALFISK");
    expect(output).toEqual([
      { letter: "V", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "L", result: "misplaced" },
      { letter: "F", result: "correct" },
      { letter: "I", result: "correct" },
      { letter: "S", result: "correct" },
      { letter: "K", result: "correct" },
    ]);
  });
});
