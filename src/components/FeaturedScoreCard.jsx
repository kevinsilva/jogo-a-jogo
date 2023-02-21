import React from 'react';
import { formatDate } from '../utils/utilities';

export default function FeaturedScoreCard({ scoreData }) {
  return (
    <div className="featured-card">
      <div className="featured-card__side featured-card__side--front">
        <div className="featured-card__header">
          <h6 className="featured-card__info">{scoreData.league.name}</h6>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__home">
            <h5 className="featured-card__home-name">
              {scoreData.teams.home.name.slice(0, 3)}
            </h5>
            <img
              className="featured-card__home-img"
              src={scoreData.teams.home.logo}
              alt=""
            />
          </div>
          <div className="featured-card__away">
            <img
              className="featured-card__away-img"
              src={scoreData.teams.away.logo}
              alt=""
            />
            <h5 className="featured-card__away-name">
              {scoreData.teams.away.name.slice(0, 3)}
            </h5>
          </div>
          <hr className="line" />
          <div className="featured-card__score">
            <h5 className="featured-card__score-home">
              {scoreData.goals.home}&nbsp;-
            </h5>
            <h5 className="featured-card__score-away">
              &nbsp;{scoreData.goals.away}
            </h5>
          </div>
        </div>
        <div className="featured-card__footer">
          <h6 className="featured-card__info">
            {formatDate(scoreData.fixture.date)}
          </h6>
        </div>
      </div>
      <div className="featured-card__side featured-card__side--back">
        <div className="featured-card__header">
          <h6 className="featured-card__info">Recinto</h6>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__stadium">
            <h5 className="featured-card__stadium-name">
              {scoreData.fixture.venue.name}
            </h5>
          </div>
          <hr className="line" />
          <div className="featured-card__city">
            <h5 className="featured-card__city-name">
              {scoreData.fixture.venue.city}
            </h5>
          </div>
        </div>
        <div className="featured-card__footer">
          <h6 className="featured-card__info">Local</h6>
        </div>
      </div>
    </div>
  );
}
