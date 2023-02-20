import { rest } from 'msw';
import { API_KEY } from '../utils/utilities';

// export const mockScores = [
//   {
//     fixture: {
//       id: 898719,
//       referee: 'André Narciso',
//       timezone: 'UTC',
//       date: '2022-11-14T20:15:00+00:00',
//       timestamp: 1668456900,
//       periods: {
//         first: 1668456900,
//         second: 1668460500,
//       },
//       venue: {
//         id: 1289,
//         name: 'Estádio de São Miguel',
//         city: 'Ponta Delgada, Ilha de São Miguel, Açores',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 227,
//         name: 'Santa Clara',
//         logo: 'https://media-2.api-sports.io/football/teams/227.png',
//         winner: true,
//       },
//       away: {
//         id: 230,
//         name: 'Estoril',
//         logo: 'https://media-2.api-sports.io/football/teams/230.png',
//         winner: false,
//       },
//     },
//     goals: {
//       home: 3,
//       away: 1,
//     },
//     score: {
//       halftime: {
//         home: 2,
//         away: 1,
//       },
//       fulltime: {
//         home: 3,
//         away: 1,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898716,
//       referee: 'Artur Soares Dias',
//       timezone: 'UTC',
//       date: '2022-11-13T20:30:00+00:00',
//       timestamp: 1668371400,
//       periods: {
//         first: 1668371400,
//         second: 1668375000,
//       },
//       venue: {
//         id: 1276,
//         name: 'Estádio Municipal 22 de Junho',
//         city: 'Vila Nova de Famalicão',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 242,
//         name: 'Famalicao',
//         logo: 'https://media-2.api-sports.io/football/teams/242.png',
//         winner: false,
//       },
//       away: {
//         id: 228,
//         name: 'Sporting CP',
//         logo: 'https://media-2.api-sports.io/football/teams/228.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 1,
//       away: 2,
//     },
//     score: {
//       halftime: {
//         home: 0,
//         away: 2,
//       },
//       fulltime: {
//         home: 1,
//         away: 2,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898713,
//       referee: 'Tiago Martins',
//       timezone: 'UTC',
//       date: '2022-11-13T18:00:00+00:00',
//       timestamp: 1668362400,
//       periods: {
//         first: 1668362400,
//         second: 1668366000,
//       },
//       venue: {
//         id: 1285,
//         name: 'Estádio Municipal de Portimão',
//         city: 'Portimão',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 216,
//         name: 'Portimonense',
//         logo: 'https://media-2.api-sports.io/football/teams/216.png',
//         winner: false,
//       },
//       away: {
//         id: 217,
//         name: 'SC Braga',
//         logo: 'https://media-2.api-sports.io/football/teams/217.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 1,
//       away: 2,
//     },
//     score: {
//       halftime: {
//         home: 1,
//         away: 0,
//       },
//       fulltime: {
//         home: 1,
//         away: 2,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898717,
//       referee: 'Manuel Oliveira',
//       timezone: 'UTC',
//       date: '2022-11-13T18:00:00+00:00',
//       timestamp: 1668362400,
//       periods: {
//         first: 1668362400,
//         second: 1668366000,
//       },
//       venue: {
//         id: null,
//         name: 'Estádio do Sport Lisboa e Benfica',
//         city: 'Lisboa',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 211,
//         name: 'Benfica',
//         logo: 'https://media-2.api-sports.io/football/teams/211.png',
//         winner: true,
//       },
//       away: {
//         id: 762,
//         name: 'GIL Vicente',
//         logo: 'https://media-2.api-sports.io/football/teams/762.png',
//         winner: false,
//       },
//     },
//     goals: {
//       home: 3,
//       away: 1,
//     },
//     score: {
//       halftime: {
//         home: 2,
//         away: 1,
//       },
//       fulltime: {
//         home: 3,
//         away: 1,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898714,
//       referee: 'Hélder Carvalho',
//       timezone: 'UTC',
//       date: '2022-11-13T18:00:00+00:00',
//       timestamp: 1668362400,
//       periods: {
//         first: 1668362400,
//         second: 1668366000,
//       },
//       venue: {
//         id: 1262,
//         name: 'Estádio Nacional',
//         city: 'Jamor, Oeiras',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 4716,
//         name: 'Casa Pia',
//         logo: 'https://media-2.api-sports.io/football/teams/4716.png',
//         winner: false,
//       },
//       away: {
//         id: 223,
//         name: 'Chaves',
//         logo: 'https://media-1.api-sports.io/football/teams/223.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 1,
//       away: 2,
//     },
//     score: {
//       halftime: {
//         home: 1,
//         away: 0,
//       },
//       fulltime: {
//         home: 1,
//         away: 2,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898712,
//       referee: 'B. Dechepy',
//       timezone: 'UTC',
//       date: '2022-11-13T15:30:00+00:00',
//       timestamp: 1668353400,
//       periods: {
//         first: 1668353400,
//         second: 1668357000,
//       },
//       venue: {
//         id: 1295,
//         name: 'Estádio Dom Afonso Henriques',
//         city: 'Guimarães',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 224,
//         name: 'Guimaraes',
//         logo: 'https://media-6.api-sports.io/football/teams/224.png',
//         winner: true,
//       },
//       away: {
//         id: 214,
//         name: 'Maritimo',
//         logo: 'https://media-2.api-sports.io/football/teams/214.png',
//         winner: false,
//       },
//     },
//     goals: {
//       home: 1,
//       away: 0,
//     },
//     score: {
//       halftime: {
//         home: 0,
//         away: 0,
//       },
//       fulltime: {
//         home: 1,
//         away: 0,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898715,
//       referee: 'Nuno Miguel Serrano Almeida',
//       timezone: 'UTC',
//       date: '2022-11-13T15:30:00+00:00',
//       timestamp: 1668353400,
//       periods: {
//         first: 1668353400,
//         second: 1668357000,
//       },
//       venue: {
//         id: 1283,
//         name: 'Estádio da Capital do Móvel',
//         city: 'Paços de Ferreira',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 234,
//         name: 'Pacos Ferreira',
//         logo: 'https://media-6.api-sports.io/football/teams/234.png',
//         winner: false,
//       },
//       away: {
//         id: 810,
//         name: 'Vizela',
//         logo: 'https://media-2.api-sports.io/football/teams/810.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 0,
//       away: 2,
//     },
//     score: {
//       halftime: {
//         home: 0,
//         away: 0,
//       },
//       fulltime: {
//         home: 0,
//         away: 2,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898718,
//       referee: 'Luis Godinho',
//       timezone: 'UTC',
//       date: '2022-11-12T20:30:00+00:00',
//       timestamp: 1668285000,
//       periods: {
//         first: 1668285000,
//         second: 1668288600,
//       },
//       venue: {
//         id: 1267,
//         name: 'Estádio do Bessa Século XXI',
//         city: 'Porto',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 222,
//         name: 'Boavista',
//         logo: 'https://media-6.api-sports.io/football/teams/222.png',
//         winner: false,
//       },
//       away: {
//         id: 212,
//         name: 'FC Porto',
//         logo: 'https://media-6.api-sports.io/football/teams/212.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 1,
//       away: 4,
//     },
//     score: {
//       halftime: {
//         home: 0,
//         away: 1,
//       },
//       fulltime: {
//         home: 1,
//         away: 4,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
//   {
//     fixture: {
//       id: 898720,
//       referee: 'João Pedro Pinheiro',
//       timezone: 'UTC',
//       date: '2022-11-12T18:00:00+00:00',
//       timestamp: 1668276000,
//       periods: {
//         first: 1668276000,
//         second: 1668279600,
//       },
//       venue: {
//         id: 1275,
//         name: 'Estádio Municipal de Arouca',
//         city: 'Arouca',
//       },
//       status: {
//         long: 'Match Finished',
//         short: 'FT',
//         elapsed: 90,
//       },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-1.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-2.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 13',
//     },
//     teams: {
//       home: {
//         id: 240,
//         name: 'Arouca',
//         logo: 'https://media-6.api-sports.io/football/teams/240.png',
//         winner: false,
//       },
//       away: {
//         id: 226,
//         name: 'Rio Ave',
//         logo: 'https://media-1.api-sports.io/football/teams/226.png',
//         winner: true,
//       },
//     },
//     goals: {
//       home: 0,
//       away: 1,
//     },
//     score: {
//       halftime: {
//         home: 0,
//         away: 0,
//       },
//       fulltime: {
//         home: 0,
//         away: 1,
//       },
//       extratime: {
//         home: null,
//         away: null,
//       },
//       penalty: {
//         home: null,
//         away: null,
//       },
//     },
//   },
// ];

// export const mockPreviews = [
//   {
//     fixture: {
//       id: 898735,
//       referee: 'Vitor Ferreira',
//       timezone: 'UTC',
//       date: '2023-01-06T19:00:00+00:00',
//       timestamp: 1673031600,
//       periods: { first: null, second: null },
//       venue: {
//         id: null,
//         name: 'Estádio do Sport Lisboa e Benfica',
//         city: 'Lisboa',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 211,
//         name: 'Benfica',
//         logo: 'https://media-1.api-sports.io/football/teams/211.png',
//         winner: null,
//       },
//       away: {
//         id: 216,
//         name: 'Portimonense',
//         logo: 'https://media-2.api-sports.io/football/teams/216.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898734,
//       referee: 'Tiago Martins',
//       timezone: 'UTC',
//       date: '2023-01-06T21:15:00+00:00',
//       timestamp: 1673039700,
//       periods: { first: null, second: null },
//       venue: {
//         id: 1276,
//         name: 'Estádio Municipal 22 de Junho',
//         city: 'Vila Nova de Famalicão',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 242,
//         name: 'Famalicao',
//         logo: 'https://media-2.api-sports.io/football/teams/242.png',
//         winner: null,
//       },
//       away: {
//         id: 810,
//         name: 'Vizela',
//         logo: 'https://media-1.api-sports.io/football/teams/810.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898738,
//       referee: 'João Pedro Pinheiro',
//       timezone: 'UTC',
//       date: '2023-01-07T15:30:00+00:00',
//       timestamp: 1673105400,
//       periods: { first: null, second: null },
//       venue: { id: 1275, name: 'Estádio Municipal de Arouca', city: 'Arouca' },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 240,
//         name: 'Arouca',
//         logo: 'https://media-2.api-sports.io/football/teams/240.png',
//         winner: null,
//       },
//       away: {
//         id: 230,
//         name: 'Estoril',
//         logo: 'https://media-3.api-sports.io/football/teams/230.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898730,
//       referee: 'André Narciso',
//       timezone: 'UTC',
//       date: '2023-01-07T18:00:00+00:00',
//       timestamp: 1673114400,
//       periods: { first: null, second: null },
//       venue: {
//         id: 1295,
//         name: 'Estádio Dom Afonso Henriques',
//         city: 'Guimarães',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 224,
//         name: 'Guimaraes',
//         logo: 'https://media-1.api-sports.io/football/teams/224.png',
//         winner: null,
//       },
//       away: {
//         id: 226,
//         name: 'Rio Ave',
//         logo: 'https://media-2.api-sports.io/football/teams/226.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898737,
//       referee: 'Nuno Miguel Serrano Almeida',
//       timezone: 'UTC',
//       date: '2023-01-07T20:30:00+00:00',
//       timestamp: 1673123400,
//       periods: { first: null, second: null },
//       venue: { id: 1262, name: 'Estádio Nacional', city: 'Jamor, Oeiras' },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 4716,
//         name: 'Casa Pia',
//         logo: 'https://media-3.api-sports.io/football/teams/4716.png',
//         winner: null,
//       },
//       away: {
//         id: 212,
//         name: 'FC Porto',
//         logo: 'https://media-2.api-sports.io/football/teams/212.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898732,
//       referee: 'Fábio Veríssimo',
//       timezone: 'UTC',
//       date: '2023-01-08T15:30:00+00:00',
//       timestamp: 1673191800,
//       periods: { first: null, second: null },
//       venue: {
//         id: 1283,
//         name: 'Estádio da Capital do Móvel',
//         city: 'Paços de Ferreira',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 234,
//         name: 'Pacos Ferreira',
//         logo: 'https://media-3.api-sports.io/football/teams/234.png',
//         winner: null,
//       },
//       away: {
//         id: 223,
//         name: 'Chaves',
//         logo: 'https://media-3.api-sports.io/football/teams/223.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898733,
//       referee: 'Hélder Malheiro',
//       timezone: 'UTC',
//       date: '2023-01-08T18:00:00+00:00',
//       timestamp: 1673200800,
//       periods: { first: null, second: null },
//       venue: {
//         id: 1279,
//         name: 'Estádio dos Barreiros',
//         city: 'Ilha da Madeira',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 214,
//         name: 'Maritimo',
//         logo: 'https://media-3.api-sports.io/football/teams/214.png',
//         winner: null,
//       },
//       away: {
//         id: 228,
//         name: 'Sporting CP',
//         logo: 'https://media-3.api-sports.io/football/teams/228.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898736,
//       referee: 'Manuel Mota',
//       timezone: 'UTC',
//       date: '2023-01-08T20:30:00+00:00',
//       timestamp: 1673209800,
//       periods: { first: null, second: null },
//       venue: { id: 1267, name: 'Estádio do Bessa Século XXI', city: 'Porto' },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 15',
//     },
//     teams: {
//       home: {
//         id: 222,
//         name: 'Boavista',
//         logo: 'https://media-3.api-sports.io/football/teams/222.png',
//         winner: null,
//       },
//       away: {
//         id: 762,
//         name: 'GIL Vicente',
//         logo: 'https://media-3.api-sports.io/football/teams/762.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 898746,
//       referee: null,
//       timezone: 'UTC',
//       date: '2023-01-13T20:15:00+00:00',
//       timestamp: 1673640900,
//       periods: { first: null, second: null },
//       venue: {
//         id: 1285,
//         name: 'Estádio Municipal de Portimão',
//         city: 'Portimão',
//       },
//       status: { long: 'Not Started', short: 'NS', elapsed: null },
//     },
//     league: {
//       id: 94,
//       name: 'Primeira Liga',
//       country: 'Portugal',
//       logo: 'https://media-3.api-sports.io/football/leagues/94.png',
//       flag: 'https://media-3.api-sports.io/flags/pt.svg',
//       season: 2022,
//       round: 'Regular Season - 16',
//     },
//     teams: {
//       home: {
//         id: 216,
//         name: 'Portimonense',
//         logo: 'https://media-1.api-sports.io/football/teams/216.png',
//         winner: null,
//       },
//       away: {
//         id: 227,
//         name: 'Santa Clara',
//         logo: 'https://media-1.api-sports.io/football/teams/227.png',
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
// ];

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

export const mockUserScores = [
  {
    fixture: {
      id: 971797,
      referee: 'Davide Massa, Italy',
      timezone: 'UTC',
      date: '2023-02-15T20:00:00+00:00',
      timestamp: 1676491200,
      periods: { first: 1676491200, second: 1676494800 },
      venue: { id: 176, name: 'Jan Breydelstadion', city: 'Brugge' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 569,
        name: 'Club Brugge KV',
        logo: 'https://media-3.api-sports.io/football/teams/569.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 0 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 986799,
      referee: 'Tiago Martins, Portugal',
      timezone: 'UTC',
      date: '2023-02-09T20:30:00+00:00',
      timestamp: 1675974600,
      periods: { first: 1675974600, second: 1675978200 },
      venue: {
        id: 1291,
        name: 'Est\u00e1dio Municipal de Braga',
        city: 'Braga',
      },
      status: { long: 'Match Finished', short: 'PEN', elapsed: 120 },
    },
    league: {
      id: 96,
      name: 'Ta\u00e7a de Portugal',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/96.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Quarter-finals',
    },
    teams: {
      home: {
        id: 217,
        name: 'SC Braga',
        logo: 'https://media-3.api-sports.io/football/teams/217.png',
        winner: true,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: false,
      },
    },
    goals: { home: 1, away: 1 },
    score: {
      halftime: { home: 1, away: 1 },
      fulltime: { home: 1, away: 1 },
      extratime: { home: 0, away: 0 },
      penalty: { home: 5, away: 4 },
    },
  },
  {
    fixture: {
      id: 898773,
      referee: 'Andre Filipe Domingues Narciso, Portugal',
      timezone: 'UTC',
      date: '2023-02-04T18:00:00+00:00',
      timestamp: 1675533600,
      periods: { first: 1675533600, second: 1675537200 },
      venue: {
        id: null,
        name: 'Estadio do Sport Lisboa e Benfica',
        city: 'Lisbon',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 19',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: true,
      },
      away: {
        id: 4716,
        name: 'Casa Pia',
        logo: 'https://media-3.api-sports.io/football/teams/4716.png',
        winner: false,
      },
    },
    goals: { home: 3, away: 0 },
    score: {
      halftime: { home: 2, away: 0 },
      fulltime: { home: 3, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898759,
      referee: 'Rui Manuel Gomes Costa, Portugal',
      timezone: 'UTC',
      date: '2023-01-31T21:15:00+00:00',
      timestamp: 1675199700,
      periods: { first: 1675199700, second: 1675203300 },
      venue: {
        id: 1275,
        name: 'Est\u00e1dio Municipal de Arouca',
        city: 'Arouca',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 18',
    },
    teams: {
      home: {
        id: 240,
        name: 'Arouca',
        logo: 'https://media-3.api-sports.io/football/teams/240.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 3 },
    score: {
      halftime: { home: 0, away: 1 },
      fulltime: { home: 0, away: 3 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898783,
      referee: 'Luis Miguel Branco Godinho, Portugal',
      timezone: 'UTC',
      date: '2023-01-26T20:15:00+00:00',
      timestamp: 1674764100,
      periods: { first: 1674764100, second: 1674767700 },
      venue: {
        id: 1283,
        name: 'Est\u00e1dio da Capital do M\u00f3vel',
        city: 'Pa\u00e7os de Ferreira',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 20',
    },
    teams: {
      home: {
        id: 234,
        name: 'Pacos Ferreira',
        logo: 'https://media.api-sports.io/football/teams/234.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 2 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898748,
      referee: 'Fabio Jose Costa Verissimo, Portugal',
      timezone: 'UTC',
      date: '2023-01-21T18:00:00+00:00',
      timestamp: 1674324000,
      periods: { first: 1674324000, second: 1674327600 },
      venue: {
        id: 1289,
        name: 'Est\u00e1dio de S\u00e3o Miguel',
        city: 'Ponta Delgada, Ilha de S\u00e3o Miguel, A\u00e7ores',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 17',
    },
    teams: {
      home: {
        id: 227,
        name: 'Santa Clara',
        logo: 'https://media.api-sports.io/football/teams/227.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 3 },
    score: {
      halftime: { home: 0, away: 2 },
      fulltime: { home: 0, away: 3 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898747,
      referee: 'Artur Soares Dias, Portugal',
      timezone: 'UTC',
      date: '2023-01-15T18:00:00+00:00',
      timestamp: 1673805600,
      periods: { first: 1673805600, second: 1673809200 },
      venue: {
        id: null,
        name: 'Estadio do Sport Lisboa e Benfica',
        city: 'Lisbon',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
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
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 228,
        name: 'Sporting CP',
        logo: 'https://media-3.api-sports.io/football/teams/228.png',
        winner: null,
      },
    },
    goals: { home: 2, away: 2 },
    score: {
      halftime: { home: 1, away: 1 },
      fulltime: { home: 2, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 973088,
      referee: 'Manuel Oliveira',
      timezone: 'UTC',
      date: '2023-01-10T20:45:00+00:00',
      timestamp: 1673383500,
      periods: { first: 1673383500, second: 1673387100 },
      venue: {
        id: 1294,
        name: 'Est\u00e1dio Varzim Sport Club',
        city: 'P\u00f3voa de Varzim',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 96,
      name: 'Ta\u00e7a de Portugal',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/96.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 237,
        name: 'Varzim',
        logo: 'https://media-3.api-sports.io/football/teams/237.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 1 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898735,
      referee: 'Vitor Ferreira, Portugal',
      timezone: 'UTC',
      date: '2023-01-06T19:00:00+00:00',
      timestamp: 1673031600,
      periods: { first: 1673031600, second: 1673035200 },
      venue: {
        id: null,
        name: 'Estadio do Sport Lisboa e Benfica',
        city: 'Lisbon',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
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
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: true,
      },
      away: {
        id: 216,
        name: 'Portimonense',
        logo: 'https://media.api-sports.io/football/teams/216.png',
        winner: false,
      },
    },
    goals: { home: 1, away: 0 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 1, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 898726,
      referee: 'Joao Pedro Pinheiro, Portugal',
      timezone: 'UTC',
      date: '2022-12-30T21:15:00+00:00',
      timestamp: 1672434900,
      periods: { first: 1672434900, second: 1672438500 },
      venue: {
        id: 1291,
        name: 'Est\u00e1dio Municipal de Braga',
        city: 'Braga',
      },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media-3.api-sports.io/football/leagues/94.png',
      flag: 'https://media-3.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 14',
    },
    teams: {
      home: {
        id: 217,
        name: 'SC Braga',
        logo: 'https://media-3.api-sports.io/football/teams/217.png',
        winner: true,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: false,
      },
    },
    goals: { home: 3, away: 0 },
    score: {
      halftime: { home: 2, away: 0 },
      fulltime: { home: 3, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
];

export const mockUserPreviews = [
  {
    fixture: {
      id: 898790,
      referee: 'H\u00e9lder Malheiro',
      timezone: 'UTC',
      date: '2023-02-20T21:15:00+00:00',
      timestamp: 1676927700,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 21',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 222,
        name: 'Boavista',
        logo: 'https://media-3.api-sports.io/football/teams/222.png',
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
      id: 898801,
      referee: null,
      timezone: 'UTC',
      date: '2023-02-25T20:30:00+00:00',
      timestamp: 1677357000,
      periods: { first: null, second: null },
      venue: {
        id: 2817,
        name: 'Est\u00e1dio Do Vizela',
        city: 'Caldas de Vizela',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 22',
    },
    teams: {
      home: {
        id: 810,
        name: 'Vizela',
        logo: 'https://media.api-sports.io/football/teams/810.png',
        winner: null,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
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
      id: 898807,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-05T00:00:00+00:00',
      timestamp: 1677974400,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 23',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 242,
        name: 'Famalicao',
        logo: 'https://media-3.api-sports.io/football/teams/242.png',
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
      id: 971798,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-07T20:00:00+00:00',
      timestamp: 1678219200,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 569,
        name: 'Club Brugge KV',
        logo: 'https://media.api-sports.io/football/teams/569.png',
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
      id: 898816,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-12T00:00:00+00:00',
      timestamp: 1678579200,
      periods: { first: null, second: null },
      venue: {
        id: 1279,
        name: 'Est\u00e1dio dos Barreiros',
        city: 'Ilha da Madeira',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 24',
    },
    teams: {
      home: {
        id: 214,
        name: 'Maritimo',
        logo: 'https://media-3.api-sports.io/football/teams/214.png',
        winner: null,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
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
      id: 898826,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-19T00:00:00+00:00',
      timestamp: 1679184000,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 25',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 224,
        name: 'Guimaraes',
        logo: 'https://media-3.api-sports.io/football/teams/224.png',
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
      id: 898834,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-02T00:00:00+00:00',
      timestamp: 1680393600,
      periods: { first: null, second: null },
      venue: {
        id: 1288,
        name: 'Est\u00e1dio do Rio Ave Futebol Clube',
        city: 'Vila do Conde',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 26',
    },
    teams: {
      home: {
        id: 226,
        name: 'Rio Ave',
        logo: 'https://media.api-sports.io/football/teams/226.png',
        winner: null,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
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
      id: 898845,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-09T00:00:00+00:00',
      timestamp: 1680998400,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 27',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 212,
        name: 'FC Porto',
        logo: 'https://media.api-sports.io/football/teams/212.png',
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
      id: 898855,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-16T00:00:00+00:00',
      timestamp: 1681603200,
      periods: { first: null, second: null },
      venue: {
        id: 1273,
        name: 'Est\u00e1dio Municipal Eng. Manuel Branco Teixeira',
        city: 'Chaves',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 28',
    },
    teams: {
      home: {
        id: 223,
        name: 'Chaves',
        logo: 'https://media.api-sports.io/football/teams/223.png',
        winner: null,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
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
      id: 898860,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-23T00:00:00+00:00',
      timestamp: 1682208000,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Time to be defined', short: 'TBD', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 29',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 230,
        name: 'Estoril',
        logo: 'https://media.api-sports.io/football/teams/230.png',
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

export const mockFeaturedScores = [
  {
    fixture: {
      id: 971797,
      referee: 'Davide Massa, Italy',
      timezone: 'UTC',
      date: '2023-02-15T20:00:00+00:00',
      timestamp: 1676491200,
      periods: { first: 1676491200, second: 1676494800 },
      venue: { id: 176, name: 'Jan Breydelstadion', city: 'Brugge' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 569,
        name: 'Club Brugge KV',
        logo: 'https://media.api-sports.io/football/teams/569.png',
        winner: false,
      },
      away: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media.api-sports.io/football/teams/211.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 0 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 868182,
      referee: 'Anthony Taylor, England',
      timezone: 'UTC',
      date: '2023-02-18T17:30:00+00:00',
      timestamp: 1676741400,
      periods: { first: 1676741400, second: 1676745000 },
      venue: { id: 562, name: "St. James' Park", city: 'Newcastle upon Tyne' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2022,
      round: 'Regular Season - 24',
    },
    teams: {
      home: {
        id: 34,
        name: 'Newcastle',
        logo: 'https://media.api-sports.io/football/teams/34.png',
        winner: false,
      },
      away: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 2 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 878157,
      referee: 'Jos\u00e9 Luis Munuera Montero, Spain',
      timezone: 'UTC',
      date: '2023-02-18T20:00:00+00:00',
      timestamp: 1676750400,
      periods: { first: 1676750400, second: 1676754000 },
      venue: { id: 1486, name: 'Estadio El Sadar', city: 'Iru\u00f1ea' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 140,
      name: 'La Liga',
      country: 'Spain',
      logo: 'https://media-3.api-sports.io/football/leagues/140.png',
      flag: 'https://media.api-sports.io/flags/es.svg',
      season: 2022,
      round: 'Regular Season - 22',
    },
    teams: {
      home: {
        id: 727,
        name: 'Osasuna',
        logo: 'https://media.api-sports.io/football/teams/727.png',
        winner: false,
      },
      away: {
        id: 541,
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 0 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 882008,
      referee: 'Federico La Penna, Italy',
      timezone: 'UTC',
      date: '2023-02-19T17:00:00+00:00',
      timestamp: 1676826000,
      periods: { first: 1676826000, second: 1676829600 },
      venue: { id: 939, name: 'Stadio Alberto Picco', city: 'La Spezia' },
      status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
    },
    league: {
      id: 135,
      name: 'Serie A',
      country: 'Italy',
      logo: 'https://media-3.api-sports.io/football/leagues/135.png',
      flag: 'https://media.api-sports.io/flags/it.svg',
      season: 2022,
      round: 'Regular Season - 23',
    },
    teams: {
      home: {
        id: 515,
        name: 'Spezia',
        logo: 'https://media-3.api-sports.io/football/teams/515.png',
        winner: false,
      },
      away: {
        id: 496,
        name: 'Juventus',
        logo: 'https://media.api-sports.io/football/teams/496.png',
        winner: true,
      },
    },
    goals: { home: 0, away: 2 },
    score: {
      halftime: { home: 0, away: 1 },
      fulltime: { home: 0, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
];

export const mockFeaturedPreviews = [
  {
    fixture: {
      id: 898790,
      referee: 'H\u00e9lder Malheiro',
      timezone: 'UTC',
      date: '2023-02-20T21:15:00+00:00',
      timestamp: 1676927700,
      periods: { first: null, second: null },
      venue: {
        id: null,
        name: 'Est\u00e1dio do Sport Lisboa e Benfica',
        city: 'Lisboa',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 94,
      name: 'Primeira Liga',
      country: 'Portugal',
      logo: 'https://media.api-sports.io/football/leagues/94.png',
      flag: 'https://media.api-sports.io/flags/pt.svg',
      season: 2022,
      round: 'Regular Season - 21',
    },
    teams: {
      home: {
        id: 211,
        name: 'Benfica',
        logo: 'https://media-3.api-sports.io/football/teams/211.png',
        winner: null,
      },
      away: {
        id: 222,
        name: 'Boavista',
        logo: 'https://media.api-sports.io/football/teams/222.png',
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
      id: 971801,
      referee: 'I. Kovacs',
      timezone: 'UTC',
      date: '2023-02-21T20:00:00+00:00',
      timestamp: 1677009600,
      periods: { first: null, second: null },
      venue: { id: 550, name: 'Anfield', city: 'Liverpool' },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        winner: null,
      },
      away: {
        id: 541,
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
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
      id: 871353,
      referee: null,
      timezone: 'UTC',
      date: '2023-02-26T16:30:00+00:00',
      timestamp: 1677429000,
      periods: { first: null, second: null },
      venue: { id: 700, name: 'Allianz Arena', city: 'M\u00fcnchen' },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 78,
      name: 'Bundesliga',
      country: 'Germany',
      logo: 'https://media.api-sports.io/football/leagues/78.png',
      flag: 'https://media-3.api-sports.io/flags/de.svg',
      season: 2022,
      round: 'Regular Season - 22',
    },
    teams: {
      home: {
        id: 157,
        name: 'Bayern Munich',
        logo: 'https://media.api-sports.io/football/teams/157.png',
        winner: null,
      },
      away: {
        id: 182,
        name: 'Union Berlin',
        logo: 'https://media-3.api-sports.io/football/teams/182.png',
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
      id: 971770,
      referee: null,
      timezone: 'UTC',
      date: '2023-02-23T17:45:00+00:00',
      timestamp: 1677174300,
      periods: { first: null, second: null },
      venue: {
        id: 662,
        name: 'Stade de la Beaujoire - Louis Fonteneau',
        city: 'Nantes',
      },
      status: { long: 'Not Started', short: 'NS', elapsed: null },
    },
    league: {
      id: 3,
      name: 'UEFA Europa League',
      country: 'World',
      logo: 'https://media.api-sports.io/football/leagues/3.png',
      flag: null,
      season: 2022,
      round: 'Knockout Round Play-offs',
    },
    teams: {
      home: {
        id: 83,
        name: 'Nantes',
        logo: 'https://media-3.api-sports.io/football/teams/83.png',
        winner: null,
      },
      away: {
        id: 496,
        name: 'Juventus',
        logo: 'https://media-3.api-sports.io/football/teams/496.png',
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

export const mockPreviews = {
  'UEFA Champions League': [
    {
      "fixture":{
        "id":971801,
        "referee":"I. Kovacs",
        "timezone":"UTC",
        "date":"2023-02-21T20:00:00+00:00",
        "timestamp":1677009600,
        "periods":{
          "first":null,
          "second":null
        },
        "venue":{
          "id":550,
          "name":"Anfield",
          "city":"Liverpool"
        },
        "status":{
          "long":"Not Started",
          "short":"NS",
          "elapsed":null
        }
      },
      "league":{
        "id":2,
        "name":"UEFA Champions League",
        "country":"World",
        "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/2.png",
        "flag":null,
        "season":2022,
        "round":"Round of 16"
      },
      "teams":{
        "home":{
          "id":40,
          "name":"Liverpool",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/40.png",
          "winner":null
        },
        "away":{
          "id":541,
          "name":"Real Madrid",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/541.png",
          "winner":null
        }
      },
      "goals":{
        "home":null,
        "away":null
      },
      "score":{
        "halftime":{
          "home":null,
          "away":null
        },
        "fulltime":{
          "home":null,
          "away":null
        },
        "extratime":{
          "home":null,
          "away":null
        },
        "penalty":{
          "home":null,
          "away":null
        }
      }
    },
    {
      "fixture":{
        "id":971803,
        "referee":"Artur Soares Dias",
        "timezone":"UTC",
        "date":"2023-02-21T20:00:00+00:00",
        "timestamp":1677009600,
        "periods":{
          "first":null,
          "second":null
        },
        "venue":{
          "id":10491,
          "name":"Deutsche Bank Park",
          "city":"Frankfurt am Main"
        },
        "status":{
          "long":"Not Started",
          "short":"NS",
          "elapsed":null
        }
      },
      "league":{
        "id":2,
        "name":"UEFA Champions League",
        "country":"World",
        "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/2.png",
        "flag":null,
        "season":2022,
        "round":"Round of 16"
      },
      "teams":{
        "home":{
          "id":169,
          "name":"Eintracht Frankfurt",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/169.png",
          "winner":null
        },
        "away":{
          "id":492,
          "name":"Napoli",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/492.png",
          "winner":null
        }
      },
      "goals":{
        "home":null,
        "away":null
      },
      "score":{
        "halftime":{
          "home":null,
          "away":null
        },
        "fulltime":{
          "home":null,
          "away":null
        },
        "extratime":{
          "home":null,
          "away":null
        },
        "penalty":{
          "home":null,
          "away":null
        }
      }
    },
    {
      "fixture":{
        "id":971805,
        "referee":null,
        "timezone":"UTC",
        "date":"2023-02-22T20:00:00+00:00",
        "timestamp":1677096000,
        "periods":{
          "first":null,
          "second":null
        },
        "venue":{
          "id":738,
          "name":"Red Bull Arena",
          "city":"Leipzig"
        },
        "status":{
          "long":"Not Started",
          "short":"NS",
          "elapsed":null
        }
      },
      "league":{
        "id":2,
        "name":"UEFA Champions League",
        "country":"World",
        "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/2.png",
        "flag":null,
        "season":2022,
        "round":"Round of 16"
      },
      "teams":{
        "home":{
          "id":173,
          "name":"RB Leipzig",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/173.png",
          "winner":null
        },
        "away":{
          "id":50,
          "name":"Manchester City",
          "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/50.png",
          "winner":null
        }
      },
      "goals":{
        "home":null,
        "away":null
      },
      "score":{
        "halftime":{
          "home":null,
          "away":null
        },
        "fulltime":{
          "home":null,
          "away":null
        },
        "extratime":{
          "home":null,
          "away":null
        },
        "penalty":{
          "home":null,
          "away":null
        }
      }
    },
    {
      "fixture":{
        "id":971807,
        "referee":null,
        "timezone":"UTC",
        "date":"2023-02-22T20:00:00+00:00",
        "timestamp":1677096000,
        "periods":{
          "first":null,
          "second":null
        },
        "venue":{
          "id":907,
          "name":"Stadio Giuseppe Meazza",
          "city":"Milano"
        },
        "status":{
          "long":"Not Started",
          "short":"NS",
          "elapsed":null
        }
      },
      "league":{
        "id":2,
        "name":"UEFA Champions League",
        "country":"World",
        "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/2.png",
        "flag":null,
        "season":2022,
        "round":"Round of 16"
      },
      "teams":{
        "home":{
          "id":505,
          "name":"Inter",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/505.png",
          "winner":null
        },
        "away":{
          "id":212,
          "name":"FC Porto",
          "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/212.png",
          "winner":null
        }
      },
      "goals":{
        "home":null,
        "away":null
      },
      "score":{
        "halftime":{
          "home":null,
          "away":null
        },
        "fulltime":{
          "home":null,
          "away":null
        },
        "extratime":{
          "home":null,
          "away":null
        },
        "penalty":{
          "home":null,
          "away":null
        }
      }
    },
    {
      "fixture":{
        "id":971798,
        "referee":null,
        "timezone":"UTC",
        "date":"2023-03-07T20:00:00+00:00",
        "timestamp":1678219200,
        "periods":{
          "first":null,
          "second":null
        },
        "venue":{
          "id":null,
          "name":"Est\u00e1dio do Sport Lisboa e Benfica",
          "city":"Lisboa"
        },
        "status":{
          "long":"Not Started",
          "short":"NS",
          "elapsed":null
        }
      },
      "league":{
        "id":2,
        "name":"UEFA Champions League",
        "country":"World",
        "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/2.png",
        "flag":null,
        "season":2022,
        "round":"Round of 16"
      },
      "teams":{
        "home":{
          "id":211,
          "name":"Benfica",
          "logo":"https:\/\/media.api-sports.io\/football\/teams\/211.png",
          "winner":null
        },
        "away":{
          "id":569,
          "name":"Club Brugge KV",
          "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/569.png",
          "winner":null
        }
      },
      "goals":{
        "home":null,
        "away":null
      },
      "score":{
        "halftime":{
          "home":null,
          "away":null
        },
        "fulltime":{
          "home":null,
          "away":null
        },
        "extratime":{
          "home":null,
          "away":null
        },
        "penalty":{
          "home":null,
          "away":null
        }
      }
    },    
  ],
  'Primeira Liga': [{
    "fixture":{
      "id":898790,
      "referee":"H\u00e9lder Malheiro",
      "timezone":"UTC",
      "date":"2023-02-20T21:15:00+00:00",
      "timestamp":1676927700,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":null,
        "name":"Est\u00e1dio do Sport Lisboa e Benfica",
        "city":"Lisboa"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":94,
      "name":"Primeira Liga",
      "country":"Portugal",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/94.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/pt.svg",
      "season":2022,
      "round":"Regular Season - 21"
    },
    "teams":{
      "home":{
        "id":211,
        "name":"Benfica",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/211.png",
        "winner":null
      },
      "away":{
        "id":222,
        "name":"Boavista",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/222.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":898795,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-24T20:15:00+00:00",
      "timestamp":1677269700,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1276,
        "name":"Est\u00e1dio Municipal 22 de Junho",
        "city":"Vila Nova de Famalic\u00e3o"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":94,
      "name":"Primeira Liga",
      "country":"Portugal",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/94.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/pt.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":242,
        "name":"Famalicao",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/242.png",
        "winner":null
      },
      "away":{
        "id":216,
        "name":"Portimonense",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/216.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":898794,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T15:30:00+00:00",
      "timestamp":1677339000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1275,
        "name":"Est\u00e1dio Municipal de Arouca",
        "city":"Arouca"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":94,
      "name":"Primeira Liga",
      "country":"Portugal",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/94.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/pt.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":240,
        "name":"Arouca",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/240.png",
        "winner":null
      },
      "away":{
        "id":4716,
        "name":"Casa Pia",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/4716.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":898800,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T18:00:00+00:00",
      "timestamp":1677348000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1279,
        "name":"Est\u00e1dio dos Barreiros",
        "city":"Ilha da Madeira"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":94,
      "name":"Primeira Liga",
      "country":"Portugal",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/94.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/pt.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":214,
        "name":"Maritimo",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/214.png",
        "winner":null
      },
      "away":{
        "id":227,
        "name":"Santa Clara",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/227.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":898801,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T20:30:00+00:00",
      "timestamp":1677357000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":2817,
        "name":"Est\u00e1dio Do Vizela",
        "city":"Caldas de Vizela"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":94,
      "name":"Primeira Liga",
      "country":"Portugal",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/94.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/pt.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":810,
        "name":"Vizela",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/810.png",
        "winner":null
      },
      "away":{
        "id":211,
        "name":"Benfica",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/211.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  ],
  'Premier League': [{
    "fixture":{
      "id":868189,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-24T20:00:00+00:00",
      "timestamp":1677268800,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":535,
        "name":"Craven Cottage",
        "city":"London"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":39,
      "name":"Premier League",
      "country":"England",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/gb.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":36,
        "name":"Fulham",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/36.png",
        "winner":null
      },
      "away":{
        "id":39,
        "name":"Wolves",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/39.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":868193,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T12:30:00+00:00",
      "timestamp":1677328200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":562,
        "name":"St. James' Park",
        "city":"Newcastle upon Tyne"
      },
      "status":{
        "long":"Match Postponed",
        "short":"PST",
        "elapsed":null
      }
    },
    "league":{
      "id":39,
      "name":"Premier League",
      "country":"England",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/gb.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":34,
        "name":"Newcastle",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/34.png",
        "winner":null
      },
      "away":{
        "id":51,
        "name":"Brighton",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/51.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":868188,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T15:00:00+00:00",
      "timestamp":1677337200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":8560,
        "name":"Goodison Park",
        "city":"Liverpool"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":39,
      "name":"Premier League",
      "country":"England",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/gb.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":45,
        "name":"Everton",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/45.png",
        "winner":null
      },
      "away":{
        "id":66,
        "name":"Aston Villa",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/66.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":868190,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T15:00:00+00:00",
      "timestamp":1677337200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":546,
        "name":"Elland Road",
        "city":"Leeds, West Yorkshire"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":39,
      "name":"Premier League",
      "country":"England",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/gb.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":63,
        "name":"Leeds",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/63.png",
        "winner":null
      },
      "away":{
        "id":41,
        "name":"Southampton",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/41.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":868191,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T15:00:00+00:00",
      "timestamp":1677337200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":547,
        "name":"King Power Stadium",
        "city":"Leicester, Leicestershire"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":39,
      "name":"Premier League",
      "country":"England",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/gb.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":46,
        "name":"Leicester",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/46.png",
        "winner":null
      },
      "away":{
        "id":42,
        "name":"Arsenal",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/42.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
  'La Liga': [{
    "fixture":{
      "id":878156,
      "referee":"Mario Melero Lopez, Spain",
      "timezone":"UTC",
      "date":"2023-02-20T20:00:00+00:00",
      "timestamp":1676923200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1476,
        "name":"Coliseum Alfonso P\u00e9rez",
        "city":"Getafe"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":140,
      "name":"La Liga",
      "country":"Spain",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/140.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/es.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":546,
        "name":"Getafe",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/546.png",
        "winner":null
      },
      "away":{
        "id":532,
        "name":"Valencia",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/532.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":878168,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-24T20:00:00+00:00",
      "timestamp":1677268800,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1473,
        "name":"Estadio Manuel Mart\u00ednez Valero",
        "city":"Elche"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":140,
      "name":"La Liga",
      "country":"Spain",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/140.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/es.svg",
      "season":2022,
      "round":"Regular Season - 23"
    },
    "teams":{
      "home":{
        "id":797,
        "name":"Elche",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/797.png",
        "winner":null
      },
      "away":{
        "id":543,
        "name":"Real Betis",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/543.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":878165,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T13:00:00+00:00",
      "timestamp":1677330000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1474,
        "name":"RCDE Stadium",
        "city":"Cornella de Llobregat"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":140,
      "name":"La Liga",
      "country":"Spain",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/140.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/es.svg",
      "season":2022,
      "round":"Regular Season - 23"
    },
    "teams":{
      "home":{
        "id":540,
        "name":"Espanyol",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/540.png",
        "winner":null
      },
      "away":{
        "id":798,
        "name":"Mallorca",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/798.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":878164,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T15:15:00+00:00",
      "timestamp":1677338100,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":11915,
        "name":"Estadio Nuevo Mirandilla",
        "city":"C\u00e1diz"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":140,
      "name":"La Liga",
      "country":"Spain",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/140.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/es.svg",
      "season":2022,
      "round":"Regular Season - 23"
    },
    "teams":{
      "home":{
        "id":724,
        "name":"Cadiz",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/724.png",
        "winner":null
      },
      "away":{
        "id":728,
        "name":"Rayo Vallecano",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/728.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":878167,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T17:30:00+00:00",
      "timestamp":1677346200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1456,
        "name":"Estadio Santiago Bernab\u00e9u",
        "city":"Madrid"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":140,
      "name":"La Liga",
      "country":"Spain",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/140.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/es.svg",
      "season":2022,
      "round":"Regular Season - 23"
    },
    "teams":{
      "home":{
        "id":541,
        "name":"Real Madrid",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/541.png",
        "winner":null
      },
      "away":{
        "id":530,
        "name":"Atletico Madrid",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/530.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
  'Serie A': [{
    "fixture":{
      "id":882009,
      "referee":"Giacomo Camplone, Italy",
      "timezone":"UTC",
      "date":"2023-02-20T19:45:00+00:00",
      "timestamp":1676922300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":943,
        "name":"Stadio Olimpico Grande Torino",
        "city":"Torino"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":135,
      "name":"Serie A",
      "country":"Italy",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/135.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/it.svg",
      "season":2022,
      "round":"Regular Season - 23"
    },
    "teams":{
      "home":{
        "id":503,
        "name":"Torino",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/503.png",
        "winner":null
      },
      "away":{
        "id":520,
        "name":"Cremonese",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/520.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":882012,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T17:00:00+00:00",
      "timestamp":1677344400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":896,
        "name":"Stadio Carlo Castellani",
        "city":"Empoli"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":135,
      "name":"Serie A",
      "country":"Italy",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/135.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/it.svg",
      "season":2022,
      "round":"Regular Season - 24"
    },
    "teams":{
      "home":{
        "id":511,
        "name":"Empoli",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/511.png",
        "winner":null
      },
      "away":{
        "id":492,
        "name":"Napoli",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/492.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":882015,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T19:45:00+00:00",
      "timestamp":1677354300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":911,
        "name":"Stadio Comunale Via del Mare",
        "city":"Lecce"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":135,
      "name":"Serie A",
      "country":"Italy",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/135.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/it.svg",
      "season":2022,
      "round":"Regular Season - 24"
    },
    "teams":{
      "home":{
        "id":867,
        "name":"Lecce",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/867.png",
        "winner":null
      },
      "away":{
        "id":488,
        "name":"Sassuolo",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/488.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":882010,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-26T11:30:00+00:00",
      "timestamp":1677411000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":881,
        "name":"Stadio Renato Dall'Ara",
        "city":"Bologna"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":135,
      "name":"Serie A",
      "country":"Italy",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/135.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/it.svg",
      "season":2022,
      "round":"Regular Season - 24"
    },
    "teams":{
      "home":{
        "id":500,
        "name":"Bologna",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/500.png",
        "winner":null
      },
      "away":{
        "id":505,
        "name":"Inter",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/505.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":882018,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-26T14:00:00+00:00",
      "timestamp":1677420000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":933,
        "name":"Stadio Arechi",
        "city":"Salerno"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":135,
      "name":"Serie A",
      "country":"Italy",
      "logo":"https:\/\/media.api-sports.io\/football\/leagues\/135.png",
      "flag":"https:\/\/media-3.api-sports.io\/flags\/it.svg",
      "season":2022,
      "round":"Regular Season - 24"
    },
    "teams":{
      "home":{
        "id":514,
        "name":"Salernitana",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/514.png",
        "winner":null
      },
      "away":{
        "id":1579,
        "name":"Monza",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/1579.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
  Bundesliga: [{
    "fixture":{
      "id":871357,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-24T19:30:00+00:00",
      "timestamp":1677267000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":11899,
        "name":"MEWA ARENA",
        "city":"Mainz"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":78,
      "name":"Bundesliga",
      "country":"Germany",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/78.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/de.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":164,
        "name":"FSV Mainz 05",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/164.png",
        "winner":null
      },
      "away":{
        "id":163,
        "name":"Borussia Monchengladbach",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/163.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871354,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T14:30:00+00:00",
      "timestamp":1677335400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":738,
        "name":"Red Bull Arena",
        "city":"Leipzig"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":78,
      "name":"Bundesliga",
      "country":"Germany",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/78.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/de.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":173,
        "name":"RB Leipzig",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/173.png",
        "winner":null
      },
      "away":{
        "id":169,
        "name":"Eintracht Frankfurt",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/169.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871356,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T14:30:00+00:00",
      "timestamp":1677335400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":731,
        "name":"RheinEnergieStadion",
        "city":"K\u00f6ln"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":78,
      "name":"Bundesliga",
      "country":"Germany",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/78.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/de.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":192,
        "name":"FC Koln",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/192.png",
        "winner":null
      },
      "away":{
        "id":161,
        "name":"VfL Wolfsburg",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/161.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871358,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T14:30:00+00:00",
      "timestamp":1677335400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":724,
        "name":"PreZero Arena",
        "city":"Sinsheim"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":78,
      "name":"Bundesliga",
      "country":"Germany",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/78.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/de.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":167,
        "name":"1899 Hoffenheim",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/167.png",
        "winner":null
      },
      "away":{
        "id":165,
        "name":"Borussia Dortmund",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/165.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871359,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T14:30:00+00:00",
      "timestamp":1677335400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":694,
        "name":"Olympiastadion Berlin",
        "city":"Berlin"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":78,
      "name":"Bundesliga",
      "country":"Germany",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/78.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/de.svg",
      "season":2022,
      "round":"Regular Season - 22"
    },
    "teams":{
      "home":{
        "id":159,
        "name":"Hertha Berlin",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/159.png",
        "winner":null
      },
      "away":{
        "id":170,
        "name":"FC Augsburg",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/170.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
  'League 1': [{
    "fixture":{
      "id":871716,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-24T20:00:00+00:00",
      "timestamp":1677268800,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":19207,
        "name":"Decathlon Arena \u2013 Stade Pierre-Mauroy",
        "city":"Villeneuve d'Ascq"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":61,
      "name":"Ligue 1",
      "country":"France",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/61.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":79,
        "name":"Lille",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/79.png",
        "winner":null
      },
      "away":{
        "id":106,
        "name":"Stade Brestois 29",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/106.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871712,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T16:00:00+00:00",
      "timestamp":1677340800,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":634,
        "name":"Stade Raymond-Kopa",
        "city":"Angers"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":61,
      "name":"Ligue 1",
      "country":"France",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/61.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":77,
        "name":"Angers",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/77.png",
        "winner":null
      },
      "away":{
        "id":80,
        "name":"Lyon",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/80.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871717,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-25T20:00:00+00:00",
      "timestamp":1677355200,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":660,
        "name":"Stade de la Mosson",
        "city":"Montpellier"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":61,
      "name":"Ligue 1",
      "country":"France",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/61.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":82,
        "name":"Montpellier",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/82.png",
        "winner":null
      },
      "away":{
        "id":116,
        "name":"Lens",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/116.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871714,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-26T12:00:00+00:00",
      "timestamp":1677412800,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":656,
        "name":"Stade Yves Allainmat - Le Moustoir",
        "city":"Lorient"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":61,
      "name":"Ligue 1",
      "country":"France",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/61.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":97,
        "name":"Lorient",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/97.png",
        "winner":null
      },
      "away":{
        "id":108,
        "name":"Auxerre",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/108.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":871710,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-26T14:00:00+00:00",
      "timestamp":1677420000,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":632,
        "name":"Stade Fran\u00e7ois Coty",
        "city":"Ajaccio"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":61,
      "name":"Ligue 1",
      "country":"France",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/61.png",
      "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
      "season":2022,
      "round":"Regular Season - 25"
    },
    "teams":{
      "home":{
        "id":98,
        "name":"Ajaccio",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/98.png",
        "winner":null
      },
      "away":{
        "id":110,
        "name":"Estac Troyes",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/110.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
  'UEFA Europa League': [{
    "fixture":{
      "id":971770,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-23T17:45:00+00:00",
      "timestamp":1677174300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":662,
        "name":"Stade de la Beaujoire - Louis Fonteneau",
        "city":"Nantes"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":3,
      "name":"UEFA Europa League",
      "country":"World",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/3.png",
      "flag":null,
      "season":2022,
      "round":"Knockout Round Play-offs"
    },
    "teams":{
      "home":{
        "id":83,
        "name":"Nantes",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/83.png",
        "winner":null
      },
      "away":{
        "id":496,
        "name":"Juventus",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/496.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":971772,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-23T17:45:00+00:00",
      "timestamp":1677174300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":453,
        "name":"MCH Arena",
        "city":"Herning"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":3,
      "name":"UEFA Europa League",
      "country":"World",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/3.png",
      "flag":null,
      "season":2022,
      "round":"Knockout Round Play-offs"
    },
    "teams":{
      "home":{
        "id":397,
        "name":"FC Midtjylland",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/397.png",
        "winner":null
      },
      "away":{
        "id":228,
        "name":"Sporting CP",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/228.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":971774,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-23T17:45:00+00:00",
      "timestamp":1677174300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":659,
        "name":"Stade Louis II",
        "city":"Monaco"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":3,
      "name":"UEFA Europa League",
      "country":"World",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/3.png",
      "flag":null,
      "season":2022,
      "round":"Knockout Round Play-offs"
    },
    "teams":{
      "home":{
        "id":91,
        "name":"Monaco",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/91.png",
        "winner":null
      },
      "away":{
        "id":168,
        "name":"Bayer Leverkusen",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/168.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":971776,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-23T17:45:00+00:00",
      "timestamp":1677174300,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":1143,
        "name":"Philips Stadion",
        "city":"Eindhoven"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":3,
      "name":"UEFA Europa League",
      "country":"World",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/3.png",
      "flag":null,
      "season":2022,
      "round":"Knockout Round Play-offs"
    },
    "teams":{
      "home":{
        "id":197,
        "name":"PSV Eindhoven",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/197.png",
        "winner":null
      },
      "away":{
        "id":536,
        "name":"Sevilla",
        "logo":"https:\/\/media.api-sports.io\/football\/teams\/536.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  },
  {
    "fixture":{
      "id":971762,
      "referee":null,
      "timezone":"UTC",
      "date":"2023-02-23T20:00:00+00:00",
      "timestamp":1677182400,
      "periods":{
        "first":null,
        "second":null
      },
      "venue":{
        "id":556,
        "name":"Old Trafford",
        "city":"Manchester"
      },
      "status":{
        "long":"Not Started",
        "short":"NS",
        "elapsed":null
      }
    },
    "league":{
      "id":3,
      "name":"UEFA Europa League",
      "country":"World",
      "logo":"https:\/\/media-3.api-sports.io\/football\/leagues\/3.png",
      "flag":null,
      "season":2022,
      "round":"Knockout Round Play-offs"
    },
    "teams":{
      "home":{
        "id":33,
        "name":"Manchester United",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/33.png",
        "winner":null
      },
      "away":{
        "id":529,
        "name":"Barcelona",
        "logo":"https:\/\/media-3.api-sports.io\/football\/teams\/529.png",
        "winner":null
      }
    },
    "goals":{
      "home":null,
      "away":null
    },
    "score":{
      "halftime":{
        "home":null,
        "away":null
      },
      "fulltime":{
        "home":null,
        "away":null
      },
      "extratime":{
        "home":null,
        "away":null
      },
      "penalty":{
        "home":null,
        "away":null
      }
    }
  }],
}

export const mockScores = {
  'UEFA Champions League': [
    {
      fixture: {
        id: 971797,
        referee: 'Davide Massa, Italy',
        timezone: 'UTC',
        date: '2023-02-15T20:00:00+00:00',
        timestamp: 1676491200,
        periods: { first: 1676491200, second: 1676494800 },
        venue: { id: 176, name: 'Jan Breydelstadion', city: 'Brugge' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 569,
          name: 'Club Brugge KV',
          logo: 'https://media-3.api-sports.io/football/teams/569.png',
          winner: false,
        },
        away: {
          id: 211,
          name: 'Benfica',
          logo: 'https://media.api-sports.io/football/teams/211.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971799,
        referee: 'Jesus Gil Manzano, Spain',
        timezone: 'UTC',
        date: '2023-02-15T20:00:00+00:00',
        timestamp: 1676491200,
        periods: { first: 1676491200, second: 1676494800 },
        venue: { id: 19381, name: 'SIGNAL IDUNA PARK', city: 'Dortmund' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 165,
          name: 'Borussia Dortmund',
          logo: 'https://media.api-sports.io/football/teams/165.png',
          winner: true,
        },
        away: {
          id: 49,
          name: 'Chelsea',
          logo: 'https://media-3.api-sports.io/football/teams/49.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971795,
        referee: 'Michael Oliver, England',
        timezone: 'UTC',
        date: '2023-02-14T20:00:00+00:00',
        timestamp: 1676404800,
        periods: { first: 1676404800, second: 1676408400 },
        venue: { id: 671, name: 'Parc des Princes', city: 'Paris' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
          winner: false,
        },
        away: {
          id: 157,
          name: 'Bayern Munich',
          logo: 'https://media.api-sports.io/football/teams/157.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971793,
        referee: 'Sandro Scharer, Switzerland',
        timezone: 'UTC',
        date: '2023-02-14T20:00:00+00:00',
        timestamp: 1676404800,
        periods: { first: 1676404800, second: 1676408400 },
        venue: { id: 907, name: 'Stadio Giuseppe Meazza', city: 'Milano' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 489,
          name: 'AC Milan',
          logo: 'https://media.api-sports.io/football/teams/489.png',
          winner: true,
        },
        away: {
          id: 47,
          name: 'Tottenham',
          logo: 'https://media.api-sports.io/football/teams/47.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946941,
        referee: 'Orel Grinfeeld, Israel',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 555, name: 'Etihad Stadium', city: 'Manchester' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group G - 6',
      },
      teams: {
        home: {
          id: 50,
          name: 'Manchester City',
          logo: 'https://media-3.api-sports.io/football/teams/50.png',
          winner: true,
        },
        away: {
          id: 536,
          name: 'Sevilla',
          logo: 'https://media-3.api-sports.io/football/teams/536.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 3, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946942,
        referee: 'Aliyar Aghayev, Azerbaijan',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 11600, name: 'Parken', city: 'K\u00f8benhavn' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group G - 6',
      },
      teams: {
        home: {
          id: 400,
          name: 'FC Copenhagen',
          logo: 'https://media.api-sports.io/football/teams/400.png',
          winner: null,
        },
        away: {
          id: 165,
          name: 'Borussia Dortmund',
          logo: 'https://media.api-sports.io/football/teams/165.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 1, away: 1 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946939,
        referee: 'Francois Letexier, France',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 519, name: 'Stamford Bridge', city: 'London' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group E - 6',
      },
      teams: {
        home: {
          id: 49,
          name: 'Chelsea',
          logo: 'https://media.api-sports.io/football/teams/49.png',
          winner: true,
        },
        away: {
          id: 620,
          name: 'Dinamo Zagreb',
          logo: 'https://media-3.api-sports.io/football/teams/620.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946943,
        referee: 'Carlos Del Cerro Grande, Spain',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 909, name: 'Allianz Stadium', city: 'Torino' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group H - 6',
      },
      teams: {
        home: {
          id: 496,
          name: 'Juventus',
          logo: 'https://media-3.api-sports.io/football/teams/496.png',
          winner: false,
        },
        away: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media-3.api-sports.io/football/teams/85.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 2 },
      score: {
        halftime: { home: 1, away: 1 },
        fulltime: { home: 1, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946940,
        referee: 'Antonio Mateu, Spain',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 907, name: 'Stadio Giuseppe Meazza', city: 'Milano' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group E - 6',
      },
      teams: {
        home: {
          id: 489,
          name: 'AC Milan',
          logo: 'https://media-3.api-sports.io/football/teams/489.png',
          winner: true,
        },
        away: {
          id: 571,
          name: 'Red Bull Salzburg',
          logo: 'https://media.api-sports.io/football/teams/571.png',
          winner: false,
        },
      },
      goals: { home: 4, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 4, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946944,
        referee: 'Anthony Taylor, England',
        timezone: 'UTC',
        date: '2022-11-02T20:00:00+00:00',
        timestamp: 1667419200,
        periods: { first: 1667419200, second: 1667422800 },
        venue: { id: 868, name: 'Sammy Ofer Stadium', city: 'Haifa' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 2,
        name: 'UEFA Champions League',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/2.png',
        flag: null,
        season: 2022,
        round: 'Group H - 6',
      },
      teams: {
        home: {
          id: 4195,
          name: 'Maccabi Haifa',
          logo: 'https://media.api-sports.io/football/teams/4195.png',
          winner: false,
        },
        away: {
          id: 211,
          name: 'Benfica',
          logo: 'https://media.api-sports.io/football/teams/211.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 6 },
      score: {
        halftime: { home: 1, away: 1 },
        fulltime: { home: 1, away: 6 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'Primeira Liga': [
    {
      fixture: {
        id: 898788,
        referee: 'Claudio Filipe Ruivo Pereira, Portugal',
        timezone: 'UTC',
        date: '2023-02-19T20:30:00+00:00',
        timestamp: 1676838600,
        periods: { first: 1676838600, second: 1676842200 },
        venue: {
          id: 1262,
          name: 'Est\u00e1dio Nacional',
          city: 'Jamor, Oeiras',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 4716,
          name: 'Casa Pia',
          logo: 'https://media.api-sports.io/football/teams/4716.png',
          winner: null,
        },
        away: {
          id: 224,
          name: 'Guimaraes',
          logo: 'https://media.api-sports.io/football/teams/224.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898792,
        referee: 'Fabio Jose Costa Verissimo, Portugal',
        timezone: 'UTC',
        date: '2023-02-19T18:00:00+00:00',
        timestamp: 1676829600,
        periods: { first: 1676829600, second: 1676833200 },
        venue: {
          id: 1291,
          name: 'Est\u00e1dio Municipal de Braga',
          city: 'Braga',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 217,
          name: 'SC Braga',
          logo: 'https://media.api-sports.io/football/teams/217.png',
          winner: true,
        },
        away: {
          id: 240,
          name: 'Arouca',
          logo: 'https://media-3.api-sports.io/football/teams/240.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898791,
        referee: 'Andre Filipe Domingues Narciso, Portugal',
        timezone: 'UTC',
        date: '2023-02-19T15:30:00+00:00',
        timestamp: 1676820600,
        periods: { first: 1676820600, second: 1676824200 },
        venue: {
          id: 1289,
          name: 'Est\u00e1dio de S\u00e3o Miguel',
          city: 'Ponta Delgada, Ilha de S\u00e3o Miguel, A\u00e7ores',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 227,
          name: 'Santa Clara',
          logo: 'https://media.api-sports.io/football/teams/227.png',
          winner: false,
        },
        away: {
          id: 242,
          name: 'Famalicao',
          logo: 'https://media-3.api-sports.io/football/teams/242.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 3 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898786,
        referee: 'Vitor Ferreira, Portugal',
        timezone: 'UTC',
        date: '2023-02-18T20:30:00+00:00',
        timestamp: 1676752200,
        periods: { first: 1676752200, second: 1676755800 },
        venue: { id: 1286, name: 'Est\u00e1dio Do Drag\u00e3o', city: 'Porto' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 212,
          name: 'FC Porto',
          logo: 'https://media.api-sports.io/football/teams/212.png',
          winner: true,
        },
        away: {
          id: 226,
          name: 'Rio Ave',
          logo: 'https://media-3.api-sports.io/football/teams/226.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898789,
        referee: 'Luis Miguel Branco Godinho, Portugal',
        timezone: 'UTC',
        date: '2023-02-18T18:00:00+00:00',
        timestamp: 1676743200,
        periods: { first: 1676743200, second: 1676746800 },
        venue: {
          id: 1285,
          name: 'Est\u00e1dio Municipal de Portim\u00e3o',
          city: 'Portim\u00e3o',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 216,
          name: 'Portimonense',
          logo: 'https://media-3.api-sports.io/football/teams/216.png',
          winner: true,
        },
        away: {
          id: 214,
          name: 'Maritimo',
          logo: 'https://media.api-sports.io/football/teams/214.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898784,
        referee: 'Nuno Miguel Serrano Almeida, Portugal',
        timezone: 'UTC',
        date: '2023-02-18T18:00:00+00:00',
        timestamp: 1676743200,
        periods: { first: 1676743200, second: 1676746800 },
        venue: {
          id: 1274,
          name: 'Est\u00e1dio Ant\u00f3nio Coimbra da Mota',
          city: 'Estoril',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 230,
          name: 'Estoril',
          logo: 'https://media-3.api-sports.io/football/teams/230.png',
          winner: false,
        },
        away: {
          id: 234,
          name: 'Pacos Ferreira',
          logo: 'https://media.api-sports.io/football/teams/234.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 3 },
      score: {
        halftime: { home: 0, away: 2 },
        fulltime: { home: 1, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898785,
        referee: 'Ricardo Baixinho, Portugal',
        timezone: 'UTC',
        date: '2023-02-17T20:15:00+00:00',
        timestamp: 1676664900,
        periods: { first: 1676664900, second: 1676668500 },
        venue: {
          id: 2811,
          name: 'Est\u00e1dio Cidade de Barcelos',
          city: 'Barcelos',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 762,
          name: 'GIL Vicente',
          logo: 'https://media-3.api-sports.io/football/teams/762.png',
          winner: null,
        },
        away: {
          id: 810,
          name: 'Vizela',
          logo: 'https://media-3.api-sports.io/football/teams/810.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898775,
        referee: 'Manuel Mota da Silva, Portugal',
        timezone: 'UTC',
        date: '2023-02-13T21:15:00+00:00',
        timestamp: 1676322900,
        periods: { first: 1676322900, second: 1676326500 },
        venue: {
          id: 1267,
          name: 'Est\u00e1dio do Bessa S\u00e9culo XXI',
          city: 'Porto',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 20',
      },
      teams: {
        home: {
          id: 222,
          name: 'Boavista',
          logo: 'https://media.api-sports.io/football/teams/222.png',
          winner: null,
        },
        away: {
          id: 4716,
          name: 'Casa Pia',
          logo: 'https://media.api-sports.io/football/teams/4716.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898782,
        referee: 'Gustavo Correia, Portugal',
        timezone: 'UTC',
        date: '2023-02-13T19:00:00+00:00',
        timestamp: 1676314800,
        periods: { first: 1676314800, second: 1676318400 },
        venue: {
          id: 1288,
          name: 'Est\u00e1dio do Rio Ave Futebol Clube',
          city: 'Vila do Conde',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 20',
      },
      teams: {
        home: {
          id: 226,
          name: 'Rio Ave',
          logo: 'https://media-3.api-sports.io/football/teams/226.png',
          winner: true,
        },
        away: {
          id: 230,
          name: 'Estoril',
          logo: 'https://media.api-sports.io/football/teams/230.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 898780,
        referee: 'Rui Manuel Gomes Costa, Portugal',
        timezone: 'UTC',
        date: '2023-02-12T20:30:00+00:00',
        timestamp: 1676233800,
        periods: { first: 1676233800, second: 1676237400 },
        venue: {
          id: 1279,
          name: 'Est\u00e1dio dos Barreiros',
          city: 'Ilha da Madeira',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 94,
        name: 'Primeira Liga',
        country: 'Portugal',
        logo: 'https://media.api-sports.io/football/leagues/94.png',
        flag: 'https://media-3.api-sports.io/flags/pt.svg',
        season: 2022,
        round: 'Regular Season - 20',
      },
      teams: {
        home: {
          id: 214,
          name: 'Maritimo',
          logo: 'https://media-3.api-sports.io/football/teams/214.png',
          winner: false,
        },
        away: {
          id: 217,
          name: 'SC Braga',
          logo: 'https://media-3.api-sports.io/football/teams/217.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 2 },
      score: {
        halftime: { home: 1, away: 2 },
        fulltime: { home: 1, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'Premier League': [
    {
      fixture: {
        id: 868184,
        referee: 'Michael Oliver, England',
        timezone: 'UTC',
        date: '2023-02-19T16:30:00+00:00',
        timestamp: 1676824200,
        periods: { first: 1676824200, second: 1676827800 },
        venue: { id: 593, name: 'Tottenham Hotspur Stadium', city: 'London' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 47,
          name: 'Tottenham',
          logo: 'https://media.api-sports.io/football/teams/47.png',
          winner: true,
        },
        away: {
          id: 48,
          name: 'West Ham',
          logo: 'https://media-3.api-sports.io/football/teams/48.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868181,
        referee: 'Stuart Attwell, England',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 556, name: 'Old Trafford', city: 'Manchester' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 33,
          name: 'Manchester United',
          logo: 'https://media-3.api-sports.io/football/teams/33.png',
          winner: true,
        },
        away: {
          id: 46,
          name: 'Leicester',
          logo: 'https://media.api-sports.io/football/teams/46.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868182,
        referee: 'Anthony Taylor, England',
        timezone: 'UTC',
        date: '2023-02-18T17:30:00+00:00',
        timestamp: 1676741400,
        periods: { first: 1676741400, second: 1676745000 },
        venue: {
          id: 562,
          name: "St. James' Park",
          city: 'Newcastle upon Tyne',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 34,
          name: 'Newcastle',
          logo: 'https://media-3.api-sports.io/football/teams/34.png',
          winner: false,
        },
        away: {
          id: 40,
          name: 'Liverpool',
          logo: 'https://media-3.api-sports.io/football/teams/40.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 2 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868185,
        referee: 'Salisbury Michael, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: {
          id: 600,
          name: 'Molineux Stadium',
          city: 'Wolverhampton, West Midlands',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 39,
          name: 'Wolves',
          logo: 'https://media.api-sports.io/football/teams/39.png',
          winner: false,
        },
        away: {
          id: 35,
          name: 'Bournemouth',
          logo: 'https://media.api-sports.io/football/teams/35.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868183,
        referee: 'Graham Scott, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: {
          id: 566,
          name: 'The City Ground',
          city: 'Nottingham, Nottinghamshire',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 65,
          name: 'Nottingham Forest',
          logo: 'https://media-3.api-sports.io/football/teams/65.png',
          winner: null,
        },
        away: {
          id: 50,
          name: 'Manchester City',
          logo: 'https://media-3.api-sports.io/football/teams/50.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868180,
        referee: 'Andy Madley, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: { id: 8560, name: 'Goodison Park', city: 'Liverpool' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 45,
          name: 'Everton',
          logo: 'https://media-3.api-sports.io/football/teams/45.png',
          winner: true,
        },
        away: {
          id: 63,
          name: 'Leeds',
          logo: 'https://media-3.api-sports.io/football/teams/63.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868179,
        referee: 'David Coote, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: { id: 519, name: 'Stamford Bridge', city: 'London' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 49,
          name: 'Chelsea',
          logo: 'https://media.api-sports.io/football/teams/49.png',
          winner: false,
        },
        away: {
          id: 41,
          name: 'Southampton',
          logo: 'https://media.api-sports.io/football/teams/41.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868178,
        referee: 'England Darren, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: {
          id: 508,
          name: 'The American Express Community Stadium',
          city: 'Falmer, East Sussex',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 51,
          name: 'Brighton',
          logo: 'https://media-3.api-sports.io/football/teams/51.png',
          winner: false,
        },
        away: {
          id: 36,
          name: 'Fulham',
          logo: 'https://media.api-sports.io/football/teams/36.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868177,
        referee: 'Paul Tierney, England',
        timezone: 'UTC',
        date: '2023-02-18T15:00:00+00:00',
        timestamp: 1676732400,
        periods: { first: 1676732400, second: 1676736000 },
        venue: {
          id: 10503,
          name: 'Gtech Community Stadium',
          city: 'Brentford, Middlesex',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 55,
          name: 'Brentford',
          logo: 'https://media-3.api-sports.io/football/teams/55.png',
          winner: null,
        },
        away: {
          id: 52,
          name: 'Crystal Palace',
          logo: 'https://media-3.api-sports.io/football/teams/52.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 868176,
        referee: 'Simon Hooper, England',
        timezone: 'UTC',
        date: '2023-02-18T12:30:00+00:00',
        timestamp: 1676723400,
        periods: { first: 1676723400, second: 1676727000 },
        venue: { id: 495, name: 'Villa Park', city: 'Birmingham' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 39,
        name: 'Premier League',
        country: 'England',
        logo: 'https://media.api-sports.io/football/leagues/39.png',
        flag: 'https://media.api-sports.io/flags/gb.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 66,
          name: 'Aston Villa',
          logo: 'https://media-3.api-sports.io/football/teams/66.png',
          winner: false,
        },
        away: {
          id: 42,
          name: 'Arsenal',
          logo: 'https://media.api-sports.io/football/teams/42.png',
          winner: true,
        },
      },
      goals: { home: 2, away: 4 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 2, away: 4 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'La Liga': [
    {
      fixture: {
        id: 878152,
        referee: 'Pablo Gonzales Fuertes, Spain',
        timezone: 'UTC',
        date: '2023-02-19T20:00:00+00:00',
        timestamp: 1676836800,
        periods: { first: 1676836800, second: 1676840400 },
        venue: { id: 18630, name: 'Spotify Camp Nou', city: 'Barcelona' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 529,
          name: 'Barcelona',
          logo: 'https://media.api-sports.io/football/teams/529.png',
          winner: true,
        },
        away: {
          id: 724,
          name: 'Cadiz',
          logo: 'https://media.api-sports.io/football/teams/724.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 2, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878159,
        referee: 'Juan Martinez Munuera, Spain',
        timezone: 'UTC',
        date: '2023-02-19T17:30:00+00:00',
        timestamp: 1676827800,
        periods: { first: 1676827800, second: 1676831400 },
        venue: {
          id: 19217,
          name: 'Est\u00e1dio C\u00edvitas Metropolitano',
          city: 'Madrid',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 530,
          name: 'Atletico Madrid',
          logo: 'https://media-3.api-sports.io/football/teams/530.png',
          winner: true,
        },
        away: {
          id: 531,
          name: 'Athletic Club',
          logo: 'https://media-3.api-sports.io/football/teams/531.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878158,
        referee: 'Jesus Gil Manzano, Spain',
        timezone: 'UTC',
        date: '2023-02-19T15:15:00+00:00',
        timestamp: 1676819700,
        periods: { first: 1676819700, second: 1676823300 },
        venue: { id: 1488, name: 'Estadio de Vallecas', city: 'Madrid' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 728,
          name: 'Rayo Vallecano',
          logo: 'https://media-3.api-sports.io/football/teams/728.png',
          winner: null,
        },
        away: {
          id: 536,
          name: 'Sevilla',
          logo: 'https://media.api-sports.io/football/teams/536.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878154,
        referee: 'Carlos Del Cerro Grande, Spain',
        timezone: 'UTC',
        date: '2023-02-19T13:00:00+00:00',
        timestamp: 1676811600,
        periods: { first: 1676811600, second: 1676815200 },
        venue: {
          id: 1473,
          name: 'Estadio Manuel Mart\u00ednez Valero',
          city: 'Elche',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 797,
          name: 'Elche',
          logo: 'https://media-3.api-sports.io/football/teams/797.png',
          winner: false,
        },
        away: {
          id: 540,
          name: 'Espanyol',
          logo: 'https://media.api-sports.io/football/teams/540.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878157,
        referee: 'Jos\u00e9 Luis Munuera Montero, Spain',
        timezone: 'UTC',
        date: '2023-02-18T20:00:00+00:00',
        timestamp: 1676750400,
        periods: { first: 1676750400, second: 1676754000 },
        venue: { id: 1486, name: 'Estadio El Sadar', city: 'Iru\u00f1ea' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 727,
          name: 'Osasuna',
          logo: 'https://media.api-sports.io/football/teams/727.png',
          winner: false,
        },
        away: {
          id: 541,
          name: 'Real Madrid',
          logo: 'https://media.api-sports.io/football/teams/541.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878155,
        referee: 'Jose Maria Sanchez Martinez, Spain',
        timezone: 'UTC',
        date: '2023-02-18T17:30:00+00:00',
        timestamp: 1676741400,
        periods: { first: 1676741400, second: 1676745000 },
        venue: {
          id: 12597,
          name: 'Visit Mallorca Estadi',
          city: 'Palma de Mallorca',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 798,
          name: 'Mallorca',
          logo: 'https://media-3.api-sports.io/football/teams/798.png',
          winner: true,
        },
        away: {
          id: 533,
          name: 'Villarreal',
          logo: 'https://media.api-sports.io/football/teams/533.png',
          winner: false,
        },
      },
      goals: { home: 4, away: 2 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 4, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878153,
        referee: 'Antonio Mateu Lahoz, Spain',
        timezone: 'UTC',
        date: '2023-02-18T15:15:00+00:00',
        timestamp: 1676733300,
        periods: { first: 1676733300, second: 1676736900 },
        venue: {
          id: 1489,
          name: 'Estadio Benito Villamar\u00edn',
          city: 'Sevilla',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 543,
          name: 'Real Betis',
          logo: 'https://media-3.api-sports.io/football/teams/543.png',
          winner: true,
        },
        away: {
          id: 720,
          name: 'Valladolid',
          logo: 'https://media-3.api-sports.io/football/teams/720.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878160,
        referee: 'Miguel Angel Ortiz Arias, Spain',
        timezone: 'UTC',
        date: '2023-02-18T13:00:00+00:00',
        timestamp: 1676725200,
        periods: { first: 1676725200, second: 1676728800 },
        venue: {
          id: 1491,
          name: 'Reale Arena',
          city: 'Donostia-San Sebasti\u00e1n',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 548,
          name: 'Real Sociedad',
          logo: 'https://media-3.api-sports.io/football/teams/548.png',
          winner: null,
        },
        away: {
          id: 538,
          name: 'Celta Vigo',
          logo: 'https://media-3.api-sports.io/football/teams/538.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878161,
        referee: 'Valentin Pizarro Gomez, Spain',
        timezone: 'UTC',
        date: '2023-02-17T20:00:00+00:00',
        timestamp: 1676664000,
        periods: { first: 1676664000, second: 1676667600 },
        venue: {
          id: 1478,
          name: 'Estadi Municipal de Montilivi',
          city: 'Girona',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 547,
          name: 'Girona',
          logo: 'https://media.api-sports.io/football/teams/547.png',
          winner: true,
        },
        away: {
          id: 723,
          name: 'Almeria',
          logo: 'https://media-3.api-sports.io/football/teams/723.png',
          winner: false,
        },
      },
      goals: { home: 6, away: 2 },
      score: {
        halftime: { home: 4, away: 0 },
        fulltime: { home: 6, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 878149,
        referee: 'Ricardo De Burgos Bengoetxea, Spain',
        timezone: 'UTC',
        date: '2023-02-15T20:00:00+00:00',
        timestamp: 1676491200,
        periods: { first: 1676491200, second: 1676494800 },
        venue: {
          id: 1456,
          name: 'Estadio Santiago Bernab\u00e9u',
          city: 'Madrid',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 140,
        name: 'La Liga',
        country: 'Spain',
        logo: 'https://media-3.api-sports.io/football/leagues/140.png',
        flag: 'https://media-3.api-sports.io/flags/es.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 541,
          name: 'Real Madrid',
          logo: 'https://media.api-sports.io/football/teams/541.png',
          winner: true,
        },
        away: {
          id: 797,
          name: 'Elche',
          logo: 'https://media-3.api-sports.io/football/teams/797.png',
          winner: false,
        },
      },
      goals: { home: 4, away: 0 },
      score: {
        halftime: { home: 3, away: 0 },
        fulltime: { home: 4, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'Serie A': [
    {
      fixture: {
        id: 882004,
        referee: 'Simone Sozza, Italy',
        timezone: 'UTC',
        date: '2023-02-19T19:45:00+00:00',
        timestamp: 1676835900,
        periods: { first: 1676835900, second: 1676839500 },
        venue: { id: 910, name: 'Stadio Olimpico', city: 'Roma' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 497,
          name: 'AS Roma',
          logo: 'https://media.api-sports.io/football/teams/497.png',
          winner: true,
        },
        away: {
          id: 504,
          name: 'Verona',
          logo: 'https://media-3.api-sports.io/football/teams/504.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882008,
        referee: 'Federico La Penna, Italy',
        timezone: 'UTC',
        date: '2023-02-19T17:00:00+00:00',
        timestamp: 1676826000,
        periods: { first: 1676826000, second: 1676829600 },
        venue: { id: 939, name: 'Stadio Alberto Picco', city: 'La Spezia' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 515,
          name: 'Spezia',
          logo: 'https://media-3.api-sports.io/football/teams/515.png',
          winner: false,
        },
        away: {
          id: 496,
          name: 'Juventus',
          logo: 'https://media.api-sports.io/football/teams/496.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882005,
        referee: 'Rosario Abisso, Italy',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 933, name: 'Stadio Arechi', city: 'Salerno' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 514,
          name: 'Salernitana',
          logo: 'https://media.api-sports.io/football/teams/514.png',
          winner: false,
        },
        away: {
          id: 487,
          name: 'Lazio',
          logo: 'https://media.api-sports.io/football/teams/487.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882001,
        referee: 'Alessandro Prontera, Italy',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 902, name: 'Stadio Artemio Franchi', city: 'Firenze' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 502,
          name: 'Fiorentina',
          logo: 'https://media-3.api-sports.io/football/teams/502.png',
          winner: null,
        },
        away: {
          id: 511,
          name: 'Empoli',
          logo: 'https://media.api-sports.io/football/teams/511.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882000,
        referee: 'Marco Piccinini, Italy',
        timezone: 'UTC',
        date: '2023-02-19T11:30:00+00:00',
        timestamp: 1676806200,
        periods: { first: 1676806200, second: 1676809800 },
        venue: { id: 879, name: 'Gewiss Stadium', city: 'Bergamo' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 499,
          name: 'Atalanta',
          logo: 'https://media.api-sports.io/football/teams/499.png',
          winner: false,
        },
        away: {
          id: 867,
          name: 'Lecce',
          logo: 'https://media.api-sports.io/football/teams/867.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 2 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882002,
        referee: 'Federico Dionisi, Italy',
        timezone: 'UTC',
        date: '2023-02-18T19:45:00+00:00',
        timestamp: 1676749500,
        periods: { first: 1676749500, second: 1676753100 },
        venue: { id: 907, name: 'Stadio Giuseppe Meazza', city: 'Milano' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 505,
          name: 'Inter',
          logo: 'https://media-3.api-sports.io/football/teams/505.png',
          winner: true,
        },
        away: {
          id: 494,
          name: 'Udinese',
          logo: 'https://media-3.api-sports.io/football/teams/494.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 1 },
      score: {
        halftime: { home: 1, away: 1 },
        fulltime: { home: 3, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882003,
        referee: 'Antonio Rapuano, Italy',
        timezone: 'UTC',
        date: '2023-02-18T17:00:00+00:00',
        timestamp: 1676739600,
        periods: { first: 1676739600, second: 1676743200 },
        venue: { id: 12086, name: 'U-Power Stadium', city: 'Monza' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 1579,
          name: 'Monza',
          logo: 'https://media-3.api-sports.io/football/teams/1579.png',
          winner: false,
        },
        away: {
          id: 489,
          name: 'AC Milan',
          logo: 'https://media.api-sports.io/football/teams/489.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882006,
        referee: 'Massimiliano Irrati, Italy',
        timezone: 'UTC',
        date: '2023-02-18T14:00:00+00:00',
        timestamp: 1676728800,
        periods: { first: 1676728800, second: 1676732400 },
        venue: {
          id: 905,
          name: 'Stadio Comunale Luigi Ferraris',
          city: 'Genova',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 498,
          name: 'Sampdoria',
          logo: 'https://media-3.api-sports.io/football/teams/498.png',
          winner: false,
        },
        away: {
          id: 500,
          name: 'Bologna',
          logo: 'https://media-3.api-sports.io/football/teams/500.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 2 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 882007,
        referee: 'Andrea Colombo, Italy',
        timezone: 'UTC',
        date: '2023-02-17T19:45:00+00:00',
        timestamp: 1676663100,
        periods: { first: 1676663100, second: 1676666700 },
        venue: {
          id: 935,
          name: 'MAPEI Stadium - Citt\u00e0 del Tricolore',
          city: "Reggio nell'Emilia",
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 23',
      },
      teams: {
        home: {
          id: 488,
          name: 'Sassuolo',
          logo: 'https://media-3.api-sports.io/football/teams/488.png',
          winner: false,
        },
        away: {
          id: 492,
          name: 'Napoli',
          logo: 'https://media-3.api-sports.io/football/teams/492.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 2 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 881998,
        referee: 'Fabio Maresca, Italy',
        timezone: 'UTC',
        date: '2023-02-13T19:45:00+00:00',
        timestamp: 1676317500,
        periods: { first: 1676317500, second: 1676321100 },
        venue: {
          id: 905,
          name: 'Stadio Comunale Luigi Ferraris',
          city: 'Genova',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 135,
        name: 'Serie A',
        country: 'Italy',
        logo: 'https://media-3.api-sports.io/football/leagues/135.png',
        flag: 'https://media-3.api-sports.io/flags/it.svg',
        season: 2022,
        round: 'Regular Season - 22',
      },
      teams: {
        home: {
          id: 498,
          name: 'Sampdoria',
          logo: 'https://media.api-sports.io/football/teams/498.png',
          winner: null,
        },
        away: {
          id: 505,
          name: 'Inter',
          logo: 'https://media.api-sports.io/football/teams/505.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  Bundesliga: [
    {
      fixture: {
        id: 871345,
        referee: 'Robert Schroder, Germany',
        timezone: 'UTC',
        date: '2023-02-19T18:30:00+00:00',
        timestamp: 1676831400,
        periods: { first: 1676831400, second: 1676835000 },
        venue: { id: 699, name: 'BayArena', city: 'Leverkusen' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 168,
          name: 'Bayer Leverkusen',
          logo: 'https://media-3.api-sports.io/football/teams/168.png',
          winner: false,
        },
        away: {
          id: 164,
          name: 'FSV Mainz 05',
          logo: 'https://media.api-sports.io/football/teams/164.png',
          winner: true,
        },
      },
      goals: { home: 2, away: 3 },
      score: {
        halftime: { home: 1, away: 2 },
        fulltime: { home: 2, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871344,
        referee: 'Harm Osmers, Germany',
        timezone: 'UTC',
        date: '2023-02-19T16:30:00+00:00',
        timestamp: 1676824200,
        periods: { first: 1676824200, second: 1676827800 },
        venue: { id: 19381, name: 'SIGNAL IDUNA PARK', city: 'Dortmund' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 165,
          name: 'Borussia Dortmund',
          logo: 'https://media-3.api-sports.io/football/teams/165.png',
          winner: true,
        },
        away: {
          id: 159,
          name: 'Hertha Berlin',
          logo: 'https://media.api-sports.io/football/teams/159.png',
          winner: false,
        },
      },
      goals: { home: 4, away: 1 },
      score: {
        halftime: { home: 2, away: 0 },
        fulltime: { home: 4, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871346,
        referee: 'Tobias Reichel, Germany',
        timezone: 'UTC',
        date: '2023-02-19T14:30:00+00:00',
        timestamp: 1676817000,
        periods: { first: 1676817000, second: 1676820600 },
        venue: {
          id: 748,
          name: 'Stadion An der Alten F\u00f6rsterei',
          city: 'Berlin',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 182,
          name: 'Union Berlin',
          logo: 'https://media.api-sports.io/football/teams/182.png',
          winner: null,
        },
        away: {
          id: 174,
          name: 'FC Schalke 04',
          logo: 'https://media.api-sports.io/football/teams/174.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871348,
        referee: 'Bastian Dankert, Germany',
        timezone: 'UTC',
        date: '2023-02-18T17:30:00+00:00',
        timestamp: 1676741400,
        periods: { first: 1676741400, second: 1676745000 },
        venue: {
          id: 10491,
          name: 'Deutsche Bank Park',
          city: 'Frankfurt am Main',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 169,
          name: 'Eintracht Frankfurt',
          logo: 'https://media-3.api-sports.io/football/teams/169.png',
          winner: true,
        },
        away: {
          id: 162,
          name: 'Werder Bremen',
          logo: 'https://media-3.api-sports.io/football/teams/162.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871352,
        referee: 'Benjamin Cortus, Germany',
        timezone: 'UTC',
        date: '2023-02-18T14:30:00+00:00',
        timestamp: 1676730600,
        periods: { first: 1676730600, second: 1676734200 },
        venue: { id: 750, name: 'Mercedes-Benz-Arena', city: 'Stuttgart' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 172,
          name: 'VfB Stuttgart',
          logo: 'https://media.api-sports.io/football/teams/172.png',
          winner: true,
        },
        away: {
          id: 192,
          name: 'FC Koln',
          logo: 'https://media.api-sports.io/football/teams/192.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871350,
        referee: 'Felix Zwayer, Germany',
        timezone: 'UTC',
        date: '2023-02-18T14:30:00+00:00',
        timestamp: 1676730600,
        periods: { first: 1676730600, second: 1676734200 },
        venue: { id: 751, name: 'Vonovia Ruhrstadion', city: 'Bochum' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 176,
          name: 'VfL BOCHUM',
          logo: 'https://media-3.api-sports.io/football/teams/176.png',
          winner: false,
        },
        away: {
          id: 160,
          name: 'SC Freiburg',
          logo: 'https://media-3.api-sports.io/football/teams/160.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 2 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871349,
        referee: 'Deniz Aytekin, Germany',
        timezone: 'UTC',
        date: '2023-02-18T14:30:00+00:00',
        timestamp: 1676730600,
        periods: { first: 1676730600, second: 1676734200 },
        venue: { id: 752, name: 'VOLKSWAGEN ARENA', city: 'Wolfsburg' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 161,
          name: 'VfL Wolfsburg',
          logo: 'https://media-3.api-sports.io/football/teams/161.png',
          winner: false,
        },
        away: {
          id: 173,
          name: 'RB Leipzig',
          logo: 'https://media-3.api-sports.io/football/teams/173.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 3 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871347,
        referee: 'Tobias Welz, Germany',
        timezone: 'UTC',
        date: '2023-02-18T14:30:00+00:00',
        timestamp: 1676730600,
        periods: { first: 1676730600, second: 1676734200 },
        venue: {
          id: 703,
          name: 'Stadion im BORUSSIA-PARK',
          city: 'M\u00f6nchengladbach',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 163,
          name: 'Borussia Monchengladbach',
          logo: 'https://media-3.api-sports.io/football/teams/163.png',
          winner: true,
        },
        away: {
          id: 157,
          name: 'Bayern Munich',
          logo: 'https://media.api-sports.io/football/teams/157.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 2 },
      score: {
        halftime: { home: 1, away: 1 },
        fulltime: { home: 3, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871351,
        referee: 'Patrick Ittrich, Germany',
        timezone: 'UTC',
        date: '2023-02-17T19:30:00+00:00',
        timestamp: 1676662200,
        periods: { first: 1676662200, second: 1676665800 },
        venue: { id: 698, name: 'WWK Arena', city: 'Augsburg' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 21',
      },
      teams: {
        home: {
          id: 170,
          name: 'FC Augsburg',
          logo: 'https://media-3.api-sports.io/football/teams/170.png',
          winner: true,
        },
        away: {
          id: 167,
          name: '1899 Hoffenheim',
          logo: 'https://media-3.api-sports.io/football/teams/167.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871338,
        referee: 'Daniel Siebert, Germany',
        timezone: 'UTC',
        date: '2023-02-12T16:30:00+00:00',
        timestamp: 1676219400,
        periods: { first: 1676219400, second: 1676223000 },
        venue: { id: 731, name: 'RheinEnergieStadion', city: 'K\u00f6ln' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 78,
        name: 'Bundesliga',
        country: 'Germany',
        logo: 'https://media.api-sports.io/football/leagues/78.png',
        flag: 'https://media-3.api-sports.io/flags/de.svg',
        season: 2022,
        round: 'Regular Season - 20',
      },
      teams: {
        home: {
          id: 192,
          name: 'FC Koln',
          logo: 'https://media.api-sports.io/football/teams/192.png',
          winner: true,
        },
        away: {
          id: 169,
          name: 'Eintracht Frankfurt',
          logo: 'https://media.api-sports.io/football/teams/169.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'League 1': [
    {
      fixture: {
        id: 871708,
        referee: 'Stephanie Frappart, France',
        timezone: 'UTC',
        date: '2023-02-19T19:45:00+00:00',
        timestamp: 1676835900,
        periods: { first: 1676835900, second: 1676839500 },
        venue: { id: 682, name: 'Stadium de Toulouse', city: 'Toulouse' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 96,
          name: 'Toulouse',
          logo: 'https://media-3.api-sports.io/football/teams/96.png',
          winner: false,
        },
        away: {
          id: 81,
          name: 'Marseille',
          logo: 'https://media-3.api-sports.io/football/teams/81.png',
          winner: true,
        },
      },
      goals: { home: 2, away: 3 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 2, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871704,
        referee: 'Pierre Gaillouste, France',
        timezone: 'UTC',
        date: '2023-02-19T16:05:00+00:00',
        timestamp: 1676822700,
        periods: { first: 1676822700, second: 1676826300 },
        venue: { id: 654, name: 'Stade Bollaert-Delelis', city: 'Lens' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 116,
          name: 'Lens',
          logo: 'https://media-3.api-sports.io/football/teams/116.png',
          winner: true,
        },
        away: {
          id: 83,
          name: 'Nantes',
          logo: 'https://media-3.api-sports.io/football/teams/83.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 1 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 3, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871709,
        referee: 'Beno\u00eet Bastien, France',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 684, name: "Stade de l'Aube", city: 'Troyes' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 110,
          name: 'Estac Troyes',
          logo: 'https://media-3.api-sports.io/football/teams/110.png',
          winner: false,
        },
        away: {
          id: 82,
          name: 'Montpellier',
          logo: 'https://media-3.api-sports.io/football/teams/82.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871707,
        referee: 'Bastien Dechepy, France',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 680, name: 'Roazhon Park', city: 'Rennes' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 94,
          name: 'Rennes',
          logo: 'https://media.api-sports.io/football/teams/94.png',
          winner: true,
        },
        away: {
          id: 99,
          name: 'Clermont Foot',
          logo: 'https://media-3.api-sports.io/football/teams/99.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 2, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871706,
        referee: 'Hakim Ben el Salem Hadj, France',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: { id: 641, name: 'Stade Francis-Le Bl\u00e9', city: 'Brest' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 106,
          name: 'Stade Brestois 29',
          logo: 'https://media.api-sports.io/football/teams/106.png',
          winner: false,
        },
        away: {
          id: 91,
          name: 'Monaco',
          logo: 'https://media-3.api-sports.io/football/teams/91.png',
          winner: true,
        },
      },
      goals: { home: 1, away: 2 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 1, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871701,
        referee: 'Eric Wattellier, France',
        timezone: 'UTC',
        date: '2023-02-19T14:00:00+00:00',
        timestamp: 1676815200,
        periods: { first: 1676815200, second: 1676818800 },
        venue: {
          id: 656,
          name: 'Stade Yves Allainmat - Le Moustoir',
          city: 'Lorient',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 97,
          name: 'Lorient',
          logo: 'https://media.api-sports.io/football/teams/97.png',
          winner: true,
        },
        away: {
          id: 98,
          name: 'Ajaccio',
          logo: 'https://media.api-sports.io/football/teams/98.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 2, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871703,
        referee: 'Willy Delajod, France',
        timezone: 'UTC',
        date: '2023-02-19T12:00:00+00:00',
        timestamp: 1676808000,
        periods: { first: 1676808000, second: 1676811600 },
        venue: { id: 671, name: 'Parc des Princes', city: 'Paris' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 85,
          name: 'Paris Saint Germain',
          logo: 'https://media.api-sports.io/football/teams/85.png',
          winner: true,
        },
        away: {
          id: 79,
          name: 'Lille',
          logo: 'https://media-3.api-sports.io/football/teams/79.png',
          winner: false,
        },
      },
      goals: { home: 4, away: 3 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 4, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871705,
        referee: 'Francois Letexier, France',
        timezone: 'UTC',
        date: '2023-02-18T20:00:00+00:00',
        timestamp: 1676750400,
        periods: { first: 1676750400, second: 1676754000 },
        venue: { id: 681, name: 'Stade de la Meinau', city: 'Strasbourg' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 95,
          name: 'Strasbourg',
          logo: 'https://media-3.api-sports.io/football/teams/95.png',
          winner: true,
        },
        away: {
          id: 77,
          name: 'Angers',
          logo: 'https://media-3.api-sports.io/football/teams/77.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 2, away: 0 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871702,
        referee: 'Marc Bollengier, France',
        timezone: 'UTC',
        date: '2023-02-18T16:00:00+00:00',
        timestamp: 1676736000,
        periods: { first: 1676736000, second: 1676739600 },
        venue: { id: 663, name: 'Allianz Riviera', city: 'Nice' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 84,
          name: 'Nice',
          logo: 'https://media-3.api-sports.io/football/teams/84.png',
          winner: null,
        },
        away: {
          id: 93,
          name: 'Reims',
          logo: 'https://media.api-sports.io/football/teams/93.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 871700,
        referee: 'J\u00e9r\u00f4me Brisard, France',
        timezone: 'UTC',
        date: '2023-02-17T20:00:00+00:00',
        timestamp: 1676664000,
        periods: { first: 1676664000, second: 1676667600 },
        venue: {
          id: 636,
          name: "Stade de l'Abb\u00e9 Deschamps",
          city: 'Auxerre',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media-3.api-sports.io/flags/fr.svg',
        season: 2022,
        round: 'Regular Season - 24',
      },
      teams: {
        home: {
          id: 108,
          name: 'Auxerre',
          logo: 'https://media.api-sports.io/football/teams/108.png',
          winner: true,
        },
        away: {
          id: 80,
          name: 'Lyon',
          logo: 'https://media.api-sports.io/football/teams/80.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
  'UEFA Europa League': [
    {
      fixture: {
        id: 971775,
        referee: 'Radu Marian Petrescu, Romania',
        timezone: 'UTC',
        date: '2023-02-16T20:00:00+00:00',
        timestamp: 1676577600,
        periods: { first: 1676577600, second: 1676581200 },
        venue: {
          id: 1494,
          name: 'Estadio Ram\u00f3n S\u00e1nchez Pizju\u00e1n',
          city: 'Sevilla',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 536,
          name: 'Sevilla',
          logo: 'https://media.api-sports.io/football/teams/536.png',
          winner: true,
        },
        away: {
          id: 197,
          name: 'PSV Eindhoven',
          logo: 'https://media-3.api-sports.io/football/teams/197.png',
          winner: false,
        },
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971773,
        referee: 'Orel Grinfeeld, Israel',
        timezone: 'UTC',
        date: '2023-02-16T20:00:00+00:00',
        timestamp: 1676577600,
        periods: { first: 1676577600, second: 1676581200 },
        venue: { id: 699, name: 'BayArena', city: 'Leverkusen' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 168,
          name: 'Bayer Leverkusen',
          logo: 'https://media-3.api-sports.io/football/teams/168.png',
          winner: false,
        },
        away: {
          id: 91,
          name: 'Monaco',
          logo: 'https://media-3.api-sports.io/football/teams/91.png',
          winner: true,
        },
      },
      goals: { home: 2, away: 3 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 2, away: 3 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971771,
        referee: 'Francois Letexier, France',
        timezone: 'UTC',
        date: '2023-02-16T20:00:00+00:00',
        timestamp: 1676577600,
        periods: { first: 1676577600, second: 1676581200 },
        venue: {
          id: 1293,
          name: 'Est\u00e1dio Jos\u00e9 Alvalade',
          city: 'Lisboa',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 228,
          name: 'Sporting CP',
          logo: 'https://media-3.api-sports.io/football/teams/228.png',
          winner: null,
        },
        away: {
          id: 397,
          name: 'FC Midtjylland',
          logo: 'https://media-3.api-sports.io/football/teams/397.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971769,
        referee: 'Joao Pedro Pinheiro, Portugal',
        timezone: 'UTC',
        date: '2023-02-16T20:00:00+00:00',
        timestamp: 1676577600,
        periods: { first: 1676577600, second: 1676581200 },
        venue: { id: 909, name: 'Allianz Stadium', city: 'Torino' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 496,
          name: 'Juventus',
          logo: 'https://media.api-sports.io/football/teams/496.png',
          winner: null,
        },
        away: {
          id: 83,
          name: 'Nantes',
          logo: 'https://media-3.api-sports.io/football/teams/83.png',
          winner: null,
        },
      },
      goals: { home: 1, away: 1 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 1, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971767,
        referee: 'Glenn Nyberg, Sweden',
        timezone: 'UTC',
        date: '2023-02-16T17:45:00+00:00',
        timestamp: 1676569500,
        periods: { first: 1676569500, second: 1676573100 },
        venue: { id: 148, name: 'Red Bull Arena', city: 'Wals-Siezenheim' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 571,
          name: 'Red Bull Salzburg',
          logo: 'https://media-3.api-sports.io/football/teams/571.png',
          winner: true,
        },
        away: {
          id: 497,
          name: 'AS Roma',
          logo: 'https://media-3.api-sports.io/football/teams/497.png',
          winner: false,
        },
      },
      goals: { home: 1, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 1, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971765,
        referee: 'Halil Umut Meler, Turkey',
        timezone: 'UTC',
        date: '2023-02-16T17:45:00+00:00',
        timestamp: 1676569500,
        periods: { first: 1676569500, second: 1676573100 },
        venue: { id: 1117, name: 'Johan Cruijff Arena', city: 'Amsterdam' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 194,
          name: 'Ajax',
          logo: 'https://media.api-sports.io/football/teams/194.png',
          winner: null,
        },
        away: {
          id: 182,
          name: 'Union Berlin',
          logo: 'https://media-3.api-sports.io/football/teams/182.png',
          winner: null,
        },
      },
      goals: { home: 0, away: 0 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 0, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971763,
        referee: 'Irfan Peljto, Bosnia & Herzegovina',
        timezone: 'UTC',
        date: '2023-02-16T17:45:00+00:00',
        timestamp: 1676569500,
        periods: { first: 1676569500, second: 1676573100 },
        venue: {
          id: 1253,
          name: 'Stadion Miejski Legii Warszawa im. Marsza\u0142ka J\u00f3zefa Pi\u0142sudskiego',
          city: 'Warszawa',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 550,
          name: 'Shakhtar Donetsk',
          logo: 'https://media.api-sports.io/football/teams/550.png',
          winner: true,
        },
        away: {
          id: 94,
          name: 'Rennes',
          logo: 'https://media-3.api-sports.io/football/teams/94.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 2, away: 0 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 971761,
        referee: 'Maurizio Mariani, Italy',
        timezone: 'UTC',
        date: '2023-02-16T17:45:00+00:00',
        timestamp: 1676569500,
        periods: { first: 1676569500, second: 1676573100 },
        venue: { id: 18630, name: 'Spotify Camp Nou', city: 'Barcelona' },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Knockout Round Play-offs',
      },
      teams: {
        home: {
          id: 529,
          name: 'Barcelona',
          logo: 'https://media-3.api-sports.io/football/teams/529.png',
          winner: null,
        },
        away: {
          id: 33,
          name: 'Manchester United',
          logo: 'https://media-3.api-sports.io/football/teams/33.png',
          winner: null,
        },
      },
      goals: { home: 2, away: 2 },
      score: {
        halftime: { home: 0, away: 0 },
        fulltime: { home: 2, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946848,
        referee: 'Ruddy Buquet, France',
        timezone: 'UTC',
        date: '2022-11-03T20:00:00+00:00',
        timestamp: 1667505600,
        periods: { first: 1667505600, second: 1667509200 },
        venue: {
          id: 1291,
          name: 'Est\u00e1dio Municipal de Braga',
          city: 'Braga',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 6',
      },
      teams: {
        home: {
          id: 217,
          name: 'SC Braga',
          logo: 'https://media-3.api-sports.io/football/teams/217.png',
          winner: true,
        },
        away: {
          id: 375,
          name: 'Malmo FF',
          logo: 'https://media-3.api-sports.io/football/teams/375.png',
          winner: false,
        },
      },
      goals: { home: 2, away: 1 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 2, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
    {
      fixture: {
        id: 946847,
        referee: 'Andris Treimanis, Latvia',
        timezone: 'UTC',
        date: '2022-11-03T20:00:00+00:00',
        timestamp: 1667505600,
        periods: { first: 1667505600, second: 1667509200 },
        venue: {
          id: 186,
          name: 'King Power at Den Dreef Stadion',
          city: 'Heverlee',
        },
        status: { long: 'Match Finished', short: 'FT', elapsed: 90 },
      },
      league: {
        id: 3,
        name: 'UEFA Europa League',
        country: 'World',
        logo: 'https://media-3.api-sports.io/football/leagues/3.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 6',
      },
      teams: {
        home: {
          id: 1393,
          name: 'Union St. Gilloise',
          logo: 'https://media-3.api-sports.io/football/teams/1393.png',
          winner: false,
        },
        away: {
          id: 182,
          name: 'Union Berlin',
          logo: 'https://media.api-sports.io/football/teams/182.png',
          winner: true,
        },
      },
      goals: { home: 0, away: 1 },
      score: {
        halftime: { home: 0, away: 1 },
        fulltime: { home: 0, away: 1 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
    },
  ],
};

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
