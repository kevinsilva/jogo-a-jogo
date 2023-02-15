import { formatDate } from '../utils/utilities';

export default function FeaturedScoreCard({ scoreData }) {
  return (
    <div className="featured-card">
      <div className="featured-card__side featured-card__side--front">
        <div className="featured-card__header">
          <h4 className="featured-card__league-name">
            {scoreData.league.name}
          </h4>
        </div>
        <div className="featured-card__sections featured-card__sections--score">
          <div className="featured-card__home-section">
            <h3 className="featured-card__home-name">
              {scoreData.teams.home.name.slice(0, 3)}
            </h3>
            <img
              className="featured-card__home-img"
              src={scoreData.teams.home.logo}
              alt=""
            />
          </div>
          <div className="featured-card__away-section">
            <img
              className="featured-card__away-img"
              src={scoreData.teams.away.logo}
              alt=""
            />
            <h3 className="featured-card__away-name">
              {scoreData.teams.away.name.slice(0, 3)}
            </h3>
          </div>
          <hr className="featured-card__section-line" />
          <div className="featured-card__score-section">
            <h3 className="featured-card__home-goals">
              {scoreData.goals.home}&nbsp;-
            </h3>
            <h3 className="featured-card__away-goals">
              &nbsp;{scoreData.goals.away}
            </h3>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__date">
            {formatDate(scoreData.fixture.date)}
          </h4>
        </div>
      </div>
      <div className="featured-card__side featured-card__side--back">
        <div className="featured-card__header">
          <h4 className="featured-card__title">Recinto</h4>
        </div>
        <div className="featured-card__sections featured-card__sections--score">
          <div className="featured-card__stadium-section">
            <h4 className="featured-card__stadium-name">
              {scoreData.fixture.venue.name}
            </h4>
          </div>
          <hr className="featured-card__section-line" />
          <div className="featured-card__city-section">
            <h4 className="featured-card__city-name">
              {scoreData.fixture.venue.city}
            </h4>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__footnote">Local</h4>
        </div>
      </div>
    </div>
  );
}
