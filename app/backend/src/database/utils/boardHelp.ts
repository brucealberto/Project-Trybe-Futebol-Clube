import { IMatchePoint } from '../interfaces';

export const victory = (matches : IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => {
    if (m.homeTeamGoals > m.awayTeamGoals) {
      total += 1;
      return total;
    }
  });
  return total;
};

export const losses = (matches: IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => {
    if (m.homeTeamGoals < m.awayTeamGoals) {
      total += 1;
      return total;
    }
  });
  return total;
};

export const draws = (matches: IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => {
    if (m.homeTeamGoals === m.awayTeamGoals) {
      total += 1;
      return total;
    }
  });
  return total;
};

export const goalsUp = (matches: IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => { total += m.homeTeamGoals; });
  return total;
};

export const goalsDown = (matches: IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => { total += m.awayTeamGoals; });
  return total;
};

export const totalPoints = (matches: IMatchePoint[]) => {
  let total = 0;
  matches.forEach((m) => {
    if (m.homeTeamGoals > m.awayTeamGoals) {
      total += 3;
    }
    if (m.homeTeamGoals === m.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};
//  // P/(J*3)*100

export const efficiency = (matches: IMatchePoint[]) => {
  const totalP = totalPoints(matches);
  const totalJ = matches.length;
  const effi = (totalP / (totalJ * 3)) * 100;
  return effi.toFixed(2);
};
