import React from 'react';

import { formatDate } from '../utils/utilities';

export default function ScoreCard({ scoreData }) {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <h6 className="match-card__league">{scoreData.league.name}</h6>
        <h6 className="match-card__date">
          {formatDate(scoreData.fixture.date)}
        </h6>
      </div>
      <div className="match-card__main match-card__main--score">
        <div className="match-card__home">
          <img
            className="match-card__home-img"
            src={scoreData.teams.home.logo}
            alt=""
          />
          <h5 className="match-card__home-name">{scoreData.teams.home.name}</h5>
          <h5 className="match-card__home-goals">{scoreData.goals.home}</h5>
        </div>
        <div className="match-card__away">
          <img
            className="match-card__away-img"
            src={scoreData.teams.away.logo}
            alt=""
          />
          <h5 className="match-card__away-name">{scoreData.teams.away.name}</h5>
          <h5 className="match-card__away-goals">{scoreData.goals.away}</h5>
        </div>
      </div>
    </div>
  );
}
