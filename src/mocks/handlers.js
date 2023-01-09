import { rest } from 'msw';
import { API_KEY } from '../utils/utilities';

export const mockScores = [
  {
    fixture: {
      id: 898719,
      referee: 'André Narciso',
      timezone: 'UTC',
      date: '2022-11-14T20:15:00+00:00',
      timestamp: 1668456900,
      periods: {
        first: 1668456900,
        second: 1668460500,
      },
      venue: {
        id: 1289,
        name: 'Estádio de São Miguel',
        city: 'Ponta Delgada, Ilha de São Miguel, Açores',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 227,
        name: 'Santa Clara',
        logo: 'https://media-5.api-sports.io/football/teams/227.png',
        winner: true,
      },
      away: {
        id: 230,
        name: 'Estoril',
        logo: 'https://media-5.api-sports.io/football/teams/230.png',
        winner: false,
      },
    },
    goals: {
      home: 3,
      away: 1,
    },
    score: {
      halftime: {
        home: 2,
        away: 1,
      },
      fulltime: {
        home: 3,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898716,
      referee: 'Artur Soares Dias',
      timezone: 'UTC',
      date: '2022-11-13T20:30:00+00:00',
      timestamp: 1668371400,
      periods: {
        first: 1668371400,
        second: 1668375000,
      },
      venue: {
        id: 1276,
        name: 'Estádio Municipal 22 de Junho',
        city: 'Vila Nova de Famalicão',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 242,
        name: 'Famalicao',
        logo: 'https://media-4.api-sports.io/football/teams/242.png',
        winner: false,
      },
      away: {
        id: 228,
        name: 'Sporting CP',
        logo: 'https://media-5.api-sports.io/football/teams/228.png',
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 2,
    },
    score: {
      halftime: {
        home: 0,
        away: 2,
      },
      fulltime: {
        home: 1,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898713,
      referee: 'Tiago Martins',
      timezone: 'UTC',
      date: '2022-11-13T18:00:00+00:00',
      timestamp: 1668362400,
      periods: {
        first: 1668362400,
        second: 1668366000,
      },
      venue: {
        id: 1285,
        name: 'Estádio Municipal de Portimão',
        city: 'Portimão',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 216,
        name: 'Portimonense',
        logo: 'https://media-5.api-sports.io/football/teams/216.png',
        winner: false,
      },
      away: {
        id: 217,
        name: 'SC Braga',
        logo: 'https://media-2.api-sports.io/football/teams/217.png',
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 2,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898717,
      referee: 'Manuel Oliveira',
      timezone: 'UTC',
      date: '2022-11-13T18:00:00+00:00',
      timestamp: 1668362400,
      periods: {
        first: 1668362400,
        second: 1668366000,
      },
      venue: {
        id: null,
        name: 'Estádio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-5.api-sports.io/football/teams/211.png',
        winner: true,
      },
      away: {
        id: 762,
        name: 'GIL Vicente',
        logo: 'https://media-4.api-sports.io/football/teams/762.png',
        winner: false,
      },
    },
    goals: {
      home: 3,
      away: 1,
    },
    score: {
      halftime: {
        home: 2,
        away: 1,
      },
      fulltime: {
        home: 3,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898714,
      referee: 'Hélder Carvalho',
      timezone: 'UTC',
      date: '2022-11-13T18:00:00+00:00',
      timestamp: 1668362400,
      periods: {
        first: 1668362400,
        second: 1668366000,
      },
      venue: {
        id: 1262,
        name: 'Estádio Nacional',
        city: 'Jamor, Oeiras',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 4716,
        name: 'Casa Pia',
        logo: 'https://media-4.api-sports.io/football/teams/4716.png',
        winner: false,
      },
      away: {
        id: 223,
        name: 'Chaves',
        logo: 'https://media-1.api-sports.io/football/teams/223.png',
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 2,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898712,
      referee: 'B. Dechepy',
      timezone: 'UTC',
      date: '2022-11-13T15:30:00+00:00',
      timestamp: 1668353400,
      periods: {
        first: 1668353400,
        second: 1668357000,
      },
      venue: {
        id: 1295,
        name: 'Estádio Dom Afonso Henriques',
        city: 'Guimarães',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 224,
        name: 'Guimaraes',
        logo: 'https://media-6.api-sports.io/football/teams/224.png',
        winner: true,
      },
      away: {
        id: 214,
        name: 'Maritimo',
        logo: 'https://media-4.api-sports.io/football/teams/214.png',
        winner: false,
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898715,
      referee: 'Nuno Miguel Serrano Almeida',
      timezone: 'UTC',
      date: '2022-11-13T15:30:00+00:00',
      timestamp: 1668353400,
      periods: {
        first: 1668353400,
        second: 1668357000,
      },
      venue: {
        id: 1283,
        name: 'Estádio da Capital do Móvel',
        city: 'Paços de Ferreira',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 234,
        name: 'Pacos Ferreira',
        logo: 'https://media-6.api-sports.io/football/teams/234.png',
        winner: false,
      },
      away: {
        id: 810,
        name: 'Vizela',
        logo: 'https://media-2.api-sports.io/football/teams/810.png',
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 2,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898718,
      referee: 'Luis Godinho',
      timezone: 'UTC',
      date: '2022-11-12T20:30:00+00:00',
      timestamp: 1668285000,
      periods: {
        first: 1668285000,
        second: 1668288600,
      },
      venue: {
        id: 1267,
        name: 'Estádio do Bessa Século XXI',
        city: 'Porto',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 222,
        name: 'Boavista',
        logo: 'https://media-6.api-sports.io/football/teams/222.png',
        winner: false,
      },
      away: {
        id: 212,
        name: 'FC Porto',
        logo: 'https://media-6.api-sports.io/football/teams/212.png',
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 4,
    },
    score: {
      halftime: {
        home: 0,
        away: 1,
      },
      fulltime: {
        home: 1,
        away: 4,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 898720,
      referee: 'João Pedro Pinheiro',
      timezone: 'UTC',
      date: '2022-11-12T18:00:00+00:00',
      timestamp: 1668276000,
      periods: {
        first: 1668276000,
        second: 1668279600,
      },
      venue: {
        id: 1275,
        name: 'Estádio Municipal de Arouca',
        city: 'Arouca',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-1.api-sports.io/football/leagues/94.png',
      flag: 'https://media-2.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 13',
    },
    teams: {
      home: {
        id: 240,
        name: 'Arouca',
        logo: 'https://media-6.api-sports.io/football/teams/240.png',
        winner: false,
      },
      away: {
        id: 226,
        name: 'Rio Ave',
        logo: 'https://media-1.api-sports.io/football/teams/226.png',
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export const mockPreviews = [
  {
    fixture: {
      id: 898735,
      referee: 'Vitor Ferreira',
      timezone: 'UTC',
      date: '2023-01-06T19:00:00+00:00',
      timestamp: 1673031600,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Estádio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-1.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 216,
        name: 'Portimonense',
        logo: 'https://media-2.api-sports.io/football/teams/216.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898734,
      referee: 'Tiago Martins',
      timezone: 'UTC',
      date: '2023-01-06T21:15:00+00:00',
      timestamp: 1673039700,
      periods: { first: null, second: null },
      venue: {
        id: 1276,
        name: 'Estádio Municipal 22 de Junho',
        city: 'Vila Nova de Famalicão',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 242,
        name: 'Famalicao',
        logo: 'https://media-2.api-sports.io/football/teams/242.png',
        winner: null,
      },
      away: {
        id: 810,
        name: 'Vizela',
        logo: 'https://media-1.api-sports.io/football/teams/810.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898738,
      referee: 'João Pedro Pinheiro',
      timezone: 'UTC',
      date: '2023-01-07T15:30:00+00:00',
      timestamp: 1673105400,
      periods: { first: null, second: null },
      venue: { id: 1275, name: 'Estádio Municipal de Arouca', city: 'Arouca' },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 240,
        name: 'Arouca',
        logo: 'https://media-2.api-sports.io/football/teams/240.png',
        winner: null,
      },
      away: {
        id: 230,
        name: 'Estoril',
        logo: 'https://media-3.api-sports.io/football/teams/230.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898730,
      referee: 'André Narciso',
      timezone: 'UTC',
      date: '2023-01-07T18:00:00+00:00',
      timestamp: 1673114400,
      periods: { first: null, second: null },
      venue: {
        id: 1295,
        name: 'Estádio Dom Afonso Henriques',
        city: 'Guimarães',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 224,
        name: 'Guimaraes',
        logo: 'https://media-1.api-sports.io/football/teams/224.png',
        winner: null,
      },
      away: {
        id: 226,
        name: 'Rio Ave',
        logo: 'https://media-2.api-sports.io/football/teams/226.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898737,
      referee: 'Nuno Miguel Serrano Almeida',
      timezone: 'UTC',
      date: '2023-01-07T20:30:00+00:00',
      timestamp: 1673123400,
      periods: { first: null, second: null },
      venue: { id: 1262, name: 'Estádio Nacional', city: 'Jamor, Oeiras' },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 4716,
        name: 'Casa Pia',
        logo: 'https://media-3.api-sports.io/football/teams/4716.png',
        winner: null,
      },
      away: {
        id: 212,
        name: 'FC Porto',
        logo: 'https://media-2.api-sports.io/football/teams/212.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898732,
      referee: 'Fábio Veríssimo',
      timezone: 'UTC',
      date: '2023-01-08T15:30:00+00:00',
      timestamp: 1673191800,
      periods: { first: null, second: null },
      venue: {
        id: 1283,
        name: 'Estádio da Capital do Móvel',
        city: 'Paços de Ferreira',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 234,
        name: 'Pacos Ferreira',
        logo: 'https://media-3.api-sports.io/football/teams/234.png',
        winner: null,
      },
      away: {
        id: 223,
        name: 'Chaves',
        logo: 'https://media-3.api-sports.io/football/teams/223.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898733,
      referee: 'Hélder Malheiro',
      timezone: 'UTC',
      date: '2023-01-08T18:00:00+00:00',
      timestamp: 1673200800,
      periods: { first: null, second: null },
      venue: {
        id: 1279,
        name: 'Estádio dos Barreiros',
        city: 'Ilha da Madeira',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 214,
        name: 'Maritimo',
        logo: 'https://media-3.api-sports.io/football/teams/214.png',
        winner: null,
      },
      away: {
        id: 228,
        name: 'Sporting CP',
        logo: 'https://media-3.api-sports.io/football/teams/228.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898736,
      referee: 'Manuel Mota',
      timezone: 'UTC',
      date: '2023-01-08T20:30:00+00:00',
      timestamp: 1673209800,
      periods: { first: null, second: null },
      venue: { id: 1267, name: 'Estádio do Bessa Século XXI', city: 'Porto' },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 15',
    },
    teams: {
      home: {
        id: 222,
        name: 'Boavista',
        logo: 'https://media-3.api-sports.io/football/teams/222.png',
        winner: null,
      },
      away: {
        id: 762,
        name: 'GIL Vicente',
        logo: 'https://media-3.api-sports.io/football/teams/762.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898746,
      referee: null,
      timezone: 'UTC',
      date: '2023-01-13T20:15:00+00:00',
      timestamp: 1673640900,
      periods: { first: null, second: null },
      venue: {
        id: 1285,
        name: 'Estádio Municipal de Portimão',
        city: 'Portimão',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 16',
    },
    teams: {
      home: {
        id: 216,
        name: 'Portimonense',
        logo: 'https://media-1.api-sports.io/football/teams/216.png',
        winner: null,
      },
      away: {
        id: 227,
        name: 'Santa Clara',
        logo: 'https://media-1.api-sports.io/football/teams/227.png',
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
];

export const mockStatistics = [
  {
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
    },
    team: {
      id: 211,
      name: 'Benfica',
      logo: 'https://media-1.api-sports.io/football/teams/211.png',
    },
    form: 'WWWWWWWDWWWWWL',
    fixtures: {
      played: {
        home: 7,
        away: 7,
        total: 14,
      },
      wins: {
        home: 7,
        away: 5,
        total: 12,
      },
      draws: {
        home: 0,
        away: 1,
        total: 1,
      },
      loses: {
        home: 0,
        away: 1,
        total: 1,
      },
    },
    goals: {
      for: {
        total: {
          home: 26,
          away: 11,
          total: 37,
        },
        average: {
          home: '3.7',
          away: '1.6',
          total: '2.6',
        },
        minute: {
          '0-15': {
            total: 5,
            percentage: '13.89%',
          },
          '16-30': {
            total: 4,
            percentage: '11.11%',
          },
          '31-45': {
            total: 5,
            percentage: '13.89%',
          },
          '46-60': {
            total: 7,
            percentage: '19.44%',
          },
          '61-75': {
            total: 6,
            percentage: '16.67%',
          },
          '76-90': {
            total: 7,
            percentage: '19.44%',
          },
          '91-105': {
            total: 2,
            percentage: '5.56%',
          },
          '106-120': {
            total: null,
            percentage: null,
          },
        },
      },
      against: {
        total: {
          home: 6,
          away: 4,
          total: 10,
        },
        average: {
          home: '0.9',
          away: '0.6',
          total: '0.7',
        },
        minute: {
          '0-15': {
            total: 2,
            percentage: '18.18%',
          },
          '16-30': {
            total: 3,
            percentage: '27.27%',
          },
          '31-45': {
            total: 2,
            percentage: '18.18%',
          },
          '46-60': {
            total: null,
            percentage: null,
          },
          '61-75': {
            total: 1,
            percentage: '9.09%',
          },
          '76-90': {
            total: 2,
            percentage: '18.18%',
          },
          '91-105': {
            total: 1,
            percentage: '9.09%',
          },
          '106-120': {
            total: null,
            percentage: null,
          },
        },
      },
    },
    biggest: {
      streak: {
        wins: 7,
        draws: 1,
        loses: 0,
      },
      wins: {
        home: '5-0',
        away: '1-5',
      },
      loses: {
        home: null,
        away: '3-0',
      },
      goals: {
        for: {
          home: 5,
          away: 5,
        },
        against: {
          home: 2,
          away: 3,
        },
      },
    },
    clean_sheet: {
      home: 3,
      away: 5,
      total: 8,
    },
    failed_to_score: {
      home: 0,
      away: 2,
      total: 2,
    },
    penalty: {
      scored: {
        total: 4,
        percentage: '100.00%',
      },
      missed: {
        total: 0,
        percentage: '0%',
      },
      total: 4,
    },
    lineups: [
      {
        formation: '4-2-3-1',
        played: 13,
      },
      {
        formation: '4-4-2',
        played: 1,
      },
    ],
    cards: {
      yellow: {
        '0-15': {
          total: 3,
          percentage: '8.82%',
        },
        '16-30': {
          total: 4,
          percentage: '11.76%',
        },
        '31-45': {
          total: 5,
          percentage: '14.71%',
        },
        '46-60': {
          total: 5,
          percentage: '14.71%',
        },
        '61-75': {
          total: 2,
          percentage: '5.88%',
        },
        '76-90': {
          total: 10,
          percentage: '29.41%',
        },
        '91-105': {
          total: 5,
          percentage: '14.71%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
      red: {
        '0-15': {
          total: null,
          percentage: null,
        },
        '16-30': {
          total: null,
          percentage: null,
        },
        '31-45': {
          total: null,
          percentage: null,
        },
        '46-60': {
          total: null,
          percentage: null,
        },
        '61-75': {
          total: null,
          percentage: null,
        },
        '76-90': {
          total: null,
          percentage: null,
        },
        '91-105': {
          total: 3,
          percentage: '100.00%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
  },
];

const getRequestOptions = () => {
  const myHeaders = new Headers();
  myHeaders.append('x-apisports-key', API_KEY);

  return {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
};

const url =
  'https://v3.football.api-sports.io/fixtures?league=94&season=2022&last=9';

// const url2 = `https://v3.football.api-sports.io/fixtures?league=${leagueID}&season=${season}&last=${totalMatches}`;

export const handlers = [
  rest.get('/crazy', (req, res, ctx) => {
    return res(ctx.status(200), '100%');
  }),
  // rest.get(url, (req, res, ctx) => {
  //   // req.method = getRequestOptions().method;
  //   // req.headers = getRequestOptions().headers;
  //   // req.redirect = getRequestOptions().redirect;

  //   // req.url.searchParams.get('league');

  //   // return res(ctx.status(200), ctx.json(mockScores));
  //   return res(ctx.status(200), 'directo');
  // }),
];
