import { fetchTeamStats } from './services';

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

export const TEAMS = {
  benfica: {
    id: 211,
    label: 'Benfica',
    league: 94,
    mockForm: 'WWWWWWWDWWWWWL',
  },
  fcPorto: {
    id: 212,
    label: 'Porto',
    league: 94,
    mockForm: 'LDDDDLDLWWLLDD',
  },
  sportingCP: {
    id: 228,
    label: 'Sporting',
    league: 94,
    mockForm: 'WWDWLDWWDLWWDL',
  },
  chelsea: {
    id: 49,
    label: 'Chelsea',
    league: 39,
    mockForm: 'DLWLDLWWWLDWLW',
  },
  manchesterCity: {
    id: 50,
    label: 'Manchester City',
    league: 39,
    mockForm: 'DLDLDWLLWWDWLD',
  },
  liverpool: {
    id: 40,
    label: 'Liverpool',
    league: 39,
    mockForm: 'LDLLWDDLLDLWLL',
  },
  realMadrid: {
    id: 541,
    label: 'Real Madrid',
    league: 140,
    mockForm: 'LWLLLLDDDLWWDW',
  },
  barcelona: {
    id: 529,
    label: 'Barcelona',
    league: 140,
    mockForm: 'DDDWWLLLLLDDDD',
  },
  atleticoMadrid: {
    id: 530,
    label: 'Atlético Madrid',
    league: 140,
    mockForm: 'WWLLWWLLWWLWWW',
  },
  juventus: {
    id: 496,
    label: 'Juventus',
    league: 135,
    mockForm: 'WDDDDDDLLDWLLL',
  },
  napoli: {
    id: 492,
    label: 'Napoli',
    league: 135,
    mockForm: 'LDLWWWWLDWDDWW',
  },
  asRoma: {
    id: 497,
    label: 'Roma',
    league: 135,
    mockForm: 'DLWLDDDLLDWDLL',
  },
  bayernMunich: {
    id: 157,
    label: 'Bayern Munich',
    league: 78,
    mockForm: 'DDWLWDDWWWLDDL',
  },
  dortmund: {
    id: 165,
    label: 'Dortmund',
    league: 78,
    mockForm: 'LLWLDDDDDDWLDW',
  },
  bayerLeverkusen: {
    id: 168,
    label: 'Leverkusen',
    league: 78,
    mockForm: 'LLDLDWWDDDLWDW',
  },
  parisSaintGermain: {
    id: 85,
    label: 'Paris Saint Germain',
    league: 61,
    mockForm: 'WLLWLLDWLLDDLW',
  },
  lyon: {
    id: 80,
    label: 'Lyon',
    league: 61,
    mockForm: 'LWLLLWLDWLWLWD',
  },
  monaco: {
    id: 91,
    label: 'Monaco',
    league: 61,
    mockForm: 'LLLWDWLDLDLLWW',
  },
};

export const FEATURED_TEAMS = [
  211, 40, 541, 496, 157, 85, 50, 529, 492, 165, 80,
];

export function preventScroll() {
  document.body.style.overflow = 'hidden';
}

export function restoreScroll() {
  document.body.style.overflow = 'auto';
}

export function formatDate(date) {
  //date format: '2022-11-14T20:15:00+00:00'
  const day = date.slice(5, 10).split('-').reverse().join('/');
  const hour = date.slice(11, 16);

  return `${day} - ${hour}`;
}

export function calcFormPoints(form) {
  let total = 0;

  form.split('').forEach((letter) => {
    if (letter === 'W') total += 3;
    if (letter === 'D') total += 1;
  });

  return total;
}

export function compareSecondIndex(a, b) {
  return b[1] - a[1];
}

export const isUserValid = (usersArr, email, password) => {
  if (usersArr.map((user) => user.email).includes(email)) {
    if (
      usersArr.filter((user) => user.email === email)[0].password === password
    )
      return true;
  }
  return false;
};

export const isValid = {
  email: {
    unique: (usersArr, input) =>
      !usersArr.map((user) => user.email).includes(input),
    format: (input) => /^(.+)@(.+)$/.test(input),
  },
  password: {
    format: (input) => input.length > 5,
  },
};

// export const favoriteTeamOptions = [
//   { label: '', value: '' },
//   { label: 'Benfica', value: 'benfica' },
//   { label: 'Real Madrid', value: 'realMadrid' },
// ];

// export const favoriteTeamOptions = Object.values(TEAMS).map((team) => {
//   return { label: team.label, value: team.id };
// });

export const favoriteTeamOptions = Object.values(TEAMS).reduce(
  (acc, team) => {
    return [...acc, { label: team.label, value: team.id }];
  },
  [{ label: '', value: '' }]
);

export function calcRemainingTime(matchTimestamp) {
  const matchTime = matchTimestamp * 1000;
  const now = new Date().getTime();
  const remainingTime = new Date(matchTime - now);

  if (remainingTime < 0) return `E roda a bola`;

  const remaining = {
    dias: remainingTime / (1000 * 60 * 60 * 24),
    horas: remainingTime / (1000 * 60 * 60),
    minutos: remainingTime / (1000 * 60),
    segundos: remainingTime / 1000,
  };

  const isHalfUp = (time) => !(Math.floor(time) == Math.round(time));

  let [type, value] = Object.entries(remaining).find(
    (time) => Math.floor(time[1]) > 0
  );

  const verb = Math.floor(value) == 1 ? 'falta' : 'faltam';
  let adverb = isHalfUp(value) ? 'mais de' : 'cerca de';

  if (verb.length === 5) type = type.substring(0, type.length - 1);
  return `${verb} ${adverb} ${Math.floor(value)} ${type}`;
}

export function getTeamLabel(teamID) {
  return Object.values(TEAMS).filter((team) => team.id == teamID)[0]?.label;
}

export const getUserTeam = (users) => {
  return users.find((user) => user.isOnline == true)?.team;
};

export function getCurrentSeason() {
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  if (month < 7) return year - 1;
  return year;
}

export function sortTeamsByForm(teamsForm) {
  const formPoints = teamsForm.map(([teamID, teamForm]) => {
    teamForm = calcFormPoints(teamForm);
    return [teamID, teamForm];
  });

  const sortedTeamsForm = formPoints.sort(compareSecondIndex);
  const sortedTeams = sortedTeamsForm.map(([teamID, _]) => teamID);
  return sortedTeams;
}
