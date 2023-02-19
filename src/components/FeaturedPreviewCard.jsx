import {
  formatDate,
  LEAGUES,
  TEAMS,
  calcRemainingTime,
} from '../utils/utilities';

export default function FeaturedPreviewCard({ previewData }) {
  return (
    <div className="featured-card">
      <div className="featured-card__side featured-card__side--front">
        <div className="featured-card__header">
          <h4 className="featured-card__info">{previewData.league.name}</h4>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__home">
            <h3 className="featured-card__home-name">
              {previewData.teams.home.name.slice(0, 3)}
            </h3>
            <img
              className="featured-card__home-img"
              src={previewData.teams.home.logo}
              alt=""
            />
          </div>
          <div className="featured-card__away">
            <img
              className="featured-card__away-img"
              src={previewData.teams.away.logo}
              alt=""
            />
            <h3 className="featured-card__away-name">
              {previewData.teams.away.name.slice(0, 3)}
            </h3>
          </div>
          <hr className="line" />
          <div className="featured-card__tv">
            <h4 className="featured-card__tv-name">
              {LEAGUES[previewData.league.name].tvChannel[0]}
            </h4>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__info">
            {formatDate(previewData.fixture.date)}
          </h4>
        </div>
      </div>
      <div className="featured-card__side featured-card__side--back">
        <div className="featured-card__header">
          <h4 className="featured-card__info">Pontapé de Saída</h4>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__timer">
            <h4 className="featured-card__timer-phrase">
              {calcRemainingTime(previewData.fixture.timestamp)}
            </h4>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__info">
            {formatDate(previewData.fixture.date)}
          </h4>
        </div>
      </div>
    </div>
  );
}
