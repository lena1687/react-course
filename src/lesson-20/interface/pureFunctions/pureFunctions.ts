// Задание 1

import { QsObj, Team } from "../../types/pureFunctionsTypes";

export const getTopName = (teams: Team[]): string => {
  const maxScore = { score: 0, index: -1 };
  teams.forEach(({ score }, index) => {
    if (score > maxScore.score) {
      maxScore.score = score;
      maxScore.index = index;
    }
  });
  return teams[maxScore.index].name;
};

// Задание 2

export const createQs = (qsObj: QsObj): string => {
  return `?${new URLSearchParams(qsObj).toString()}`;
  //or
  // return (
  //   `?` +
  //   Object.entries(qsObj)
  //     .map((item) => {
  //       return `${item[0]}=${item[1]}`;
  //     })
  //     .join("&")
  // );
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  return Object.fromEntries(new URLSearchParams(qs).entries());
  //or
  // const copyWithoutFirstSymbol = qs.substring(1).split("&");
  // return Object.fromEntries(
  //   copyWithoutFirstSymbol.map((item) => item.split("="))
  // );
};
