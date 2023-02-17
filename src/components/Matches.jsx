import MatchesRow from './MatchesRow';
import { LEAGUES } from '../utils/utilities';

export default function Matches() {
  return (
    <div className="matches-container">
      <div className="matches__title-container">
        <h2 className="matches__title">
          as melhores<span className="emphasis"> competições</span>
        </h2>
      </div>
      <div className="matches__section">
        <MatchesRow
          leagueName={'UEFA Champions League'}
          leagueID={2}
          totalMatches={LEAGUES['UEFA Champions League'].matchesByRound}
        />

        <MatchesRow
          leagueName={'Primeira Liga'}
          leagueID={94}
          totalMatches={LEAGUES['Primeira Liga'].matchesByRound}
        />
        <MatchesRow
          leagueName={'Premier League'}
          leagueID={39}
          totalMatches={LEAGUES['Premier League'].matchesByRound}
        />
        <MatchesRow
          leagueName={'La Liga'}
          leagueID={140}
          totalMatches={LEAGUES['La Liga'].matchesByRound}
        />

        <MatchesRow
          leagueName={'Serie A'}
          leagueID={135}
          totalMatches={LEAGUES['Serie A'].matchesByRound}
        />

        <MatchesRow
          leagueName={'Bundesliga'}
          leagueID={78}
          totalMatches={LEAGUES['Bundesliga'].matchesByRound}
        />

        <MatchesRow
          leagueName={'League 1'}
          leagueID={61}
          totalMatches={LEAGUES['League 1'].matchesByRound}
        />

        <MatchesRow
          leagueName={'UEFA Europa League'}
          leagueID={3}
          totalMatches={LEAGUES['UEFA Europa League'].matchesByRound}
        />
      </div>
    </div>
  );
}
