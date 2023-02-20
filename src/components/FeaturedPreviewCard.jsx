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
          <h6 className="featured-card__info">{previewData.league.name}</h6>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__home">
            <h5 className="featured-card__home-name">
              {previewData.teams.home.name.slice(0, 3)}
            </h5>
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
            <h5 className="featured-card__away-name">
              {previewData.teams.away.name.slice(0, 3)}
            </h5>
          </div>
          <hr className="line" />
          <div className="featured-card__tv">
            <h5 className="featured-card__tv-name">
              {LEAGUES[previewData.league.name].tvChannel[0]}
            </h5>
          </div>
        </div>
        <div className="featured-card__footer">
          <h6 className="featured-card__info">
            {formatDate(previewData.fixture.date)}
          </h6>
        </div>
      </div>
      <div className="featured-card__side featured-card__side--back">
        <div className="featured-card__header">
          <h6 className="featured-card__info">Pontapé de Saída</h6>
        </div>
        <div className="featured-card__main">
          <div className="featured-card__timer">
            <h5 className="featured-card__timer-phrase">
              {calcRemainingTime(previewData.fixture.timestamp)}
            </h5>
          </div>
        </div>
        <div className="featured-card__footer">
          <h6 className="featured-card__info">
            {formatDate(previewData.fixture.date)}
          </h6>
        </div>
      </div>
    </div>
  );
}
