import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, *, 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[2, ^, 3)", () => {
    expect(firstPrioritiesCalc([2, "^", 3])).toEqual([8]);
  });

  it("[32, +, 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });

  it("[6, **]", () => {
    expect(firstPrioritiesCalc([6, "**"])).toEqual([6, "**"]);
  });

  it("[!, 5]", () => {
    expect(firstPrioritiesCalc([120])).toEqual([120]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10, -, 2, ^, 3, +, 2, **, -, 1, -, !, 5]", () => {
    expect(
      firstPrioritiesCalc([
        32,
        "/",
        32,
        "+",
        10,
        "*",
        10,
        "-",
        2,
        "^",
        3,
        "+",
        2,
        "^",
        2,
        "-",
        1,
        "-",
        120,
      ])
    ).toEqual([1, "+", 100, "-", 8, "+", 4, "-", 1, "-", 120]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, /, 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, +, 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, -, 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, -, 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
