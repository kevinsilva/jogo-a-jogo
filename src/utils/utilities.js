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
    abbreviation: 'SLB',
    league: 94,
    mockForm: 'WWWWWWWDWWWWWL',
    leagueRank: 5,
  },
  fcPorto: {
    id: 212,
    abbreviation: 'FCP',
    league: 94,
    mockForm: 'LDDDDLDLWWLLDD',
    leagueRank: 4,
  },
  sportingCP: {
    id: 228,
    abbreviation: 'SCP',
    league: 94,
    mockForm: 'WWDWLDWWDLWWDL',
    leagueRank: 3,
  },
  chelsea: {
    id: 49,
    abbreviation: 'CHE',
    league: 39,
    mockForm: 'DLWLDLWWWLDWLW',
    leagueRank: 5,
  },
  manchesterCity: {
    id: 50,
    abbreviation: 'MCI',
    league: 39,
    mockForm: 'DLDLDWLLWWDWLD',
  },
  liverpool: {
    id: 40,
    abbreviation: 'LIV',
    league: 39,
    mockForm: 'LDLLWDDLLDLWLL',
  },
  realMadrid: {
    id: 541,
    abbreviation: 'RMD',
    league: 140,
    mockForm: 'LWLLLLDDDLWWDW',
  },
  barcelona: {
    id: 529,
    abbreviation: 'FCB',
    league: 140,
    mockForm: 'DDDWWLLLLLDDDD',
  },
  atleticoMadrid: {
    id: 530,
    abbreviation: 'ATM',
    league: 140,
    mockForm: 'WWLLWWLLWWLWWW',
  },
  juventus: {
    id: 496,
    abbreviation: 'JUV',
    league: 135,
    mockForm: 'WDDDDDDLLDWLLL',
  },
  napoli: {
    id: 592,
    abbreviation: 'NAP',
    league: 135,
    mockForm: 'LDLWWWWLDWDDWW',
  },
  asRoma: {
    id: 497,
    abbreviation: 'ROM',
    league: 135,
    mockForm: 'DLWLDDDLLDWDLL',
  },
  bayernMunich: {
    id: 157,
    abbreviation: 'MUN',
    league: 78,
    mockForm: 'DDWLWDDWWWLDDL',
  },
  dortmund: {
    id: 165,
    abbreviation: 'DOR',
    league: 78,
    mockForm: 'LLWLDDDDDDWLDW',
  },
  bayerLeverkusen: {
    id: 168,
    abbreviation: 'BAY',
    league: 78,
    mockForm: 'LLDLDWWDDDLWDW',
  },
  parisSaintGermain: {
    id: 85,
    abbreviation: 'PSG',
    league: 61,
    mockForm: 'WLLWLLDWLLDDLW',
  },
  lyon: {
    id: 80,
    abbreviation: 'LYO',
    league: 61,
    mockForm: 'LWLLLWLDWLWLWD',
  },
  monaco: {
    id: 91,
    abbreviation: 'AMO',
    league: 61,
    mockForm: 'LLLWDWLDLDLLWW',
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
