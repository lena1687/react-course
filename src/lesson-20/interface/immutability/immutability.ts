import {
  ExpectedTeam,
  LeadOfTeam,
  OriginalTeam,
  SomeArray,
} from "../../types/immutabilityTypes";

// Задание 1

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { league } = originalTeam;
  return { name: "New York Badgers", league, roster: 25 };
};

// Задание 2

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const [, , three, four] = originalArray;
  return ["two", three, four, 5];
};

// Задание 3

export const originalLeadTeamToExpectedTeam = (
  originalTeam: LeadOfTeam
): LeadOfTeam => {
  const obj = { ...originalTeam };
  obj.captain.age = 28;
  return obj;
};
