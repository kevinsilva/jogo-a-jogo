import {
  formatDate,
  LEAGUES,
  CLUBS,
  calcRemainingTime,
} from '../utils/utilities';
import '../styles/FeaturedCard.scss';

export default function FeaturedPreviewCard({ previewData }) {
  return (
    <div className="featured-card">
      <div className="featured-card__side featured-card__side--front">
        <div className="featured-card__header">
          <h4 className="featured-card__league-name">
            {previewData.league.name}
          </h4>
        </div>
        <div className="featured-card__sections featured-card__sections--preview">
          <div className="featured-card__home-section">
            <h3 className="featured-card__home-name">
              {previewData.teams.home.name.slice(0, 3)}
            </h3>
            <img
              className="featured-card__home-img"
              // src={previewData.teams.home.logo}
              alt=""
            />
          </div>
          <div className="featured-card__away-section">
            <img
              className="featured-card__away-img"
              // src={previewData.teams.away.logo}
              alt=""
            />
            <h3 className="featured-card__away-name">
              {previewData.teams.away.name.slice(0, 3)}
            </h3>
          </div>
          <hr className="featured-card__section-line" />
          <div className="featured-card__tv-info">
            <h4 className="featured-card__tv-name">
              {LEAGUES[previewData.league.name].tvChannel[0]}
            </h4>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__date">
            {formatDate(previewData.fixture.date)}
          </h4>
        </div>
      </div>
      <div className="featured-card__side featured-card__side--back">
        <div className="featured-card__header">
          <h4 className="featured-card__title">Pontapé de Saída</h4>
        </div>
        <div className="featured-card__sections featured-card__sections--preview">
          <div className="featured-card__timer-section">
            <h4 className="featured-card__timer">
              {calcRemainingTime(previewData.fixture.timestamp)}
            </h4>
          </div>
        </div>
        <div className="featured-card__footer">
          <h4 className="featured-card__date">
            {formatDate(previewData.fixture.date)}
          </h4>
        </div>
      </div>
    </div>
  );
}
