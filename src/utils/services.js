import { API_KEY } from './utilities';

const getRequestOptions = () => {
  const myHeaders = new Headers();
  myHeaders.append('x-apisports-key', API_KEY);

  return {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
};

export default async function fetchLeagueLastMatches(
  leagueID,
  season,
  totalMatches
) {
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
