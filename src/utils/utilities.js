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
    id: 492,
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

export function compareFirstIndex(a, b) {
  return a[0] - b[0];
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

export const favoriteTeamOptions = [
  { label: '', value: '' },
  { label: 'Benfica', value: 'benfica' },
  { label: 'Real Madrid', value: 'realMadrid' },
];

function calcRemainingTime1(matchTimestamp) {
  const matchTime = matchTimestamp * 1000;
  const now = new Date().getTime();
  const remainingTime = new Date(matchTime - now);

  const remaining = {
    days: () => Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
    hours: () => remainingTime / (1000 * 60 * 60),
    min: () => Math.floor(remainingTime / (1000 * 60)),
    sec: () => Math.floor(remainingTime / 1000),
  };

  if (remaining.days())
    return remaining.days() > 1
      ? `faltam ${remaining.days()} dias`
      : `falta 1 dia`;
  if (remaining.hours())
    return remaining.hours() > 2
      ? `faltam ${Math.floor(remaining.hours())} horas`
      : remaining.hours() > 1
      ? `falta mais de uma hora`
      : `falta 1 hora`;
  if (remaining.min())
    return remaining.min() > 1
      ? `faltam ${remaining.min()} minutos`
      : `falta 1 minuto`;
  if (remaining.sec())
    return remaining.sec() > 1
      ? `faltam ${remaining.sec()} segundos`
      : `falta 1 segundo`;
  return `e roda a bola`;
}

function calcRemainingTime2(matchTimestamp) {
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
    (arr) => Math.floor(arr[1]) > 0
  );
  console.log(isHalfUp(value), value);

  const verb = Math.floor(value) == 1 ? 'falta' : 'faltam';
  const adverb = isHalfUp(value) ? 'e mei' : '';
  const adverbGender = type === 'dias' ? 'o' : type === 'horas' ? 'a' : '';

  type = verb.length === 5 ? type.substring(0, type.length - 1) : type;

  return `${verb} ${Math.floor(value)} ${type} ${adverb}${adverbGender}`;
}

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

export const getUserTeam = (users) => {
  return users.find((user) => user.isOnline == true)?.team;
};
