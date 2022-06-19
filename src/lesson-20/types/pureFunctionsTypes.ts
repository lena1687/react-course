export type Team = { name: string; score: number };

export type QsObj =
  | string[][]
  | Record<string, string>
  | string
  | URLSearchParams;
