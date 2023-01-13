import { formatDate, LEAGUES, CLUBS } from '../utils/utilities';
import '../styles/FeaturedCard.scss';

export default function FeaturedPreviewCard({ previewData }) {
  return (
    <div className="featured-card">
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
          {/* <img className="featured-card__home-img" src="#" alt="" /> */}
        </div>
        <div className="featured-card__away-section">
          {/* <img className="featured-card__away-img" src="#" alt="" /> */}
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
  );
}
