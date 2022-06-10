export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export type SomeArray = ReadonlyArray<number | string>;

export type LeadOfTeam = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};
