import { API_KEY, getCurrentSeason } from './utilities';
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

export async function fetchLeagueMatches(leagueID, totalMatches, lastOrNext) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?league=${leagueID}&${lastOrNext}=${totalMatches}`,
    getRequestOptions()
  );
  const response = await promise;
  const result = await response.json();

  return result;
}

export async function fetchTeamStatistics(teamID, leagueID) {
  const season = getCurrentSeason();

  const promise = fetch(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamID}&league=${leagueID}`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}

export async function fetchTeamMatch(teamID, lastOrNext) {
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?team=${teamID}&${lastOrNext}=1`,
    getRequestOptions()
  );
  const response = await promise;
  const result = await response.json();

  return result;
}
