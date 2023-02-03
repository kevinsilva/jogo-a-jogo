import { API_KEY } from './utilities';
// API_KEY = 'ccc6e9ccf15214149d1e671f5a8c116e';

const getRequestOptions = () => {
  const myHeaders = new Headers();
  myHeaders.append('x-apisports-key', 'ccc6e9ccf15214149d1e671f5a8c116e');

  return {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
};

export default async function fetchLeagueMatches(
  leagueID,
  totalMatches,
  lastOrNext
) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?league=${leagueID}&${lastOrNext}=${totalMatches}`,
    getRequestOptions()
  );
  const response = await promise;
  const result = await response.json();

  return result;
}

async function fetchLeagueLastMatches(leagueID, season, totalMatches) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?league=${leagueID}&season=${season}&last=${totalMatches}`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}

async function fetchTeamStatistics(season, teamID, leagueID) {
  const promise = fetch(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamID}&league=${leagueID}`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}

async function fetchTeamLastMatch(teamID) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?team=${teamID}&last=1`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}

async function fetchTeamNextMatch(teamID) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?team=${teamID}&next=1`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}
