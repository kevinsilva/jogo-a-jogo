export const API_KEY = 'ccc6e9ccf15214149d1e671f5a8c116e';

export const LEAGUES = {
  'Primeira Liga': {
    id: 94,
    matchesByRound: 9,
    tvChannel: ['Sport TV', 'BTV'],
  },
  'Premier League': {
    id: 39,
    matchesByRound: 10,
    tvChannel: ['Eleven TV'],
  },
  'La Liga': {
    id: 140,
    matchesByRound: 10,
    tvChannel: ['Eleven TV'],
  },
  'Serie A': {
    id: 135,
    matchesByRound: 10,
    tvChannel: ['Sport TV'],
  },
  Bundesliga: {
    id: 78,
    matchesByRound: 9,
    tvChannel: ['Eleven TV'],
  },
  'League 1': {
    id: 61,
    matchesByRound: 10,
    tvChannel: ['Eleven TV'],
  },
  'UEFA Champions League': {
    id: 2,
    matchesByRound: 16,
    tvChannel: ['Eleven TV', 'TVI'],
  },
  'UEFA Europa League': {
    id: 3,
    matchesByRound: 16,
    tvChannel: ['Sport TV', 'SIC'],
  },
};

export const CLUBS = {
  benfica: {
    id: 211,
    league: 94,
  },
  fcPorto: {
    id: 212,
    league: 94,
  },
  sportingCP: {
    id: 228,
    league: 94,
  },
  chelsea: {
    id: 49,
    league: 39,
  },
  manchesterCity: {
    id: 50,
    league: 39,
  },
  liverpool: {
    id: 40,
    league: 39,
  },
  realMadrid: {
    id: 541,
    league: 140,
  },
  barcelona: {
    id: 529,
    league: 140,
  },
  atleticoMadrid: {
    id: 530,
    league: 140,
  },
  juventus: {
    id: 496,
    league: 135,
  },
  napoli: {
    id: 592,
    league: 135,
  },
  asRoma: {
    id: 497,
    league: 135,
  },
  bayernMunich: {
    id: 157,
    league: 78,
  },
  dortmund: {
    id: 165,
    league: 78,
  },
  bayerLeverkusen: {
    id: 168,
    league: 78,
  },
  parisSaintGermain: {
    id: 85,
    league: 61,
  },
  lyon: {
    id: 80,
    league: 61,
  },
  monaco: {
    id: 91,
    league: 61,
  },
};

export function formatDate(date) {
  //date format: '2022-11-14T20:15:00+00:00'
  const day = date.slice(5, 10).split('-').reverse().join('/');
  const hour = date.slice(11, 16);

  return `${day} - ${hour}`;
}

export function calcFeaturePoints(form) {
  let total = 0;

  form.split('').forEach((letter) => {
    if (letter === 'W') total += 3;
    if (letter === 'D') total += 1;
  });

  return total;
}
