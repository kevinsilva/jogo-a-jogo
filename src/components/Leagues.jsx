import React from 'react';

import MatchesRow from './MatchesRow';
import { LEAGUES } from '../utils/utilities';

export default function Leagues() {
  return (
    <section className="leagues">
      <div className="section__title-container">
        <h3 className="section__title">
          as melhores
          <span className="section__title section__title--emphasis">
            competições
          </span>
        </h3>
      </div>
      <div className="section__container section__container--leagues">
        <MatchesRow
          leagueName={'UEFA Champions League'}
          leagueID={2}
          totalMatches={LEAGUES['UEFA Champions League'].matchesByRound}
          // mock={false}
        />

        <MatchesRow
          leagueName={'Primeira Liga'}
          leagueID={94}
          totalMatches={LEAGUES['Primeira Liga'].matchesByRound}
          mock={false}
        />
        <MatchesRow
          leagueName={'Premier League'}
          leagueID={39}
          totalMatches={LEAGUES['Premier League'].matchesByRound}
          // mock={false}
        />
        <MatchesRow
          leagueName={'La Liga'}
          leagueID={140}
          totalMatches={LEAGUES['La Liga'].matchesByRound}
          // mock={false}
        />

        <MatchesRow
          leagueName={'Serie A'}
          leagueID={135}
          totalMatches={LEAGUES['Serie A'].matchesByRound}
          // mock={false}
        />

        <MatchesRow
          leagueName={'Bundesliga'}
          leagueID={78}
          totalMatches={LEAGUES['Bundesliga'].matchesByRound}
          // mock={false}
        />

        <MatchesRow
          leagueName={'League 1'}
          leagueID={61}
          totalMatches={LEAGUES['League 1'].matchesByRound}
          // mock={false}
        />

        <MatchesRow
          leagueName={'UEFA Europa League'}
          leagueID={3}
          totalMatches={LEAGUES['UEFA Europa League'].matchesByRound}
          // mock={false}
        />
      </div>
    </section>
  );
}
