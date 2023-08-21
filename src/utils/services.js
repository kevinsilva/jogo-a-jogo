import { getCurrentSeason } from './utilities';

const API_KEY = import.meta.env.VITE_API_KEY;

const getRequestOptions = () => {
  const myHeaders = new Headers();
  myHeaders.append('x-apisports-key', API_KEY);

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

  console.log(result);
  if (!Array.isArray(result.errors)) throw new Error('Error fetching data');
  // if (result.errors.length > 0) throw new Error('Error fetching data');
  return result;
}

export async function fetchTeamMatches(teamID, lastOrNext, totalMatches = 1) {
  const season = getCurrentSeason();
  const promise = fetch(
    `https://v3.football.api-sports.io/fixtures?team=${teamID}&${lastOrNext}=${totalMatches}&season=${season}`,
    getRequestOptions()
  );
  const response = await promise;
  const result = await response.json();

  if (!Array.isArray(result.errors)) throw new Error('Error fetching data');
  return result.response[0];
}

export async function getFeaturedMatches(teams) {
  const matches = {
    last: [],
    next: [],
  };

  for (const teamID of teams) {
    if (matches.last.length < 2) {
      const lastMatch = await fetchTeamMatches(teamID, 'last');
      const nextMatch = await fetchTeamMatches(teamID, 'next');

      if (!matches.last.includes(lastMatch)) matches.last.push(lastMatch);
      if (!matches.next.includes(nextMatch)) matches.next.push(nextMatch);
    }
  }
  return matches;
}

export async function getTeamsForm(teamsObj) {
  return Promise.all(
    Object.values(teamsObj).map(async (team) => {
      const stats = await fetchTeamStats(team.id, team.league);
      return [team.id, stats.response.form];
    })
  );
}

export async function fetchTeamStats(teamID, leagueID) {
  const season = getCurrentSeason();

  const promise = fetch(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamID}&league=${leagueID}`,
    getRequestOptions()
  );

  const response = await promise;
  const result = await response.json();

  return result;
}
