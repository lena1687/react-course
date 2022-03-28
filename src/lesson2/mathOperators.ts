export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const squaring = (single: number): number => single ** 2;

export const exponentiation: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial = (single: number): number => {
  let res = 1;
  for (let i = 2; i <= single; i++) res = res * i;
  return res;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": squaring,
  "^": exponentiation,
  "!": factorial,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "**": FIRST,
  "!": FIRST,
  "+": SECOND,
  "-": SECOND,
};
