import MatchesRow from './MatchesRow';
import { LEAGUES } from '../utils/utilities';

export default function Leagues() {
  return (
    <section className="section section--leagues">
      <div className="section__title-container">
        <h2 className="section__title">
          as melhores
          <span className="section__title section__title--emphasis">
            competições
          </span>
        </h2>
      </div>
      <div className="section__container section__container--leagues">
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
    </section>
  );
}
