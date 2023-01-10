import { formatDate } from '../utils/utilities';
import '../styles/FeaturedCard.scss';

export default function FeaturedPreviewCard({ scoreData }) {
  return (
    <div className="featured-card">
      <div className="featured-card__header">
        <h4 className="featured-card__league-name">Champions League</h4>
      </div>
      <div className="featured-card__sections featured-card__sections--preview">
        <div className="featured-card__home-section">
          <h3 className="featured-card__home-name">SLB</h3>
          {/* <img className="featured-card__home-img" src="#" alt="" /> */}
        </div>
        <div className="featured-card__away-section">
          {/* <img className="featured-card__away-img" src="#" alt="" /> */}
          <h3 className="featured-card__away-name">RMD</h3>
        </div>
        <hr className="featured-card__section-line" />
        <div className="featured-card__tv-info">
          <h4 className="featured-card__tv-name">Eleven TV</h4>
        </div>
      </div>
      <div className="featured-card__footer">
        <h4 className="featured-card__date">02/05 19:45</h4>
      </div>
    </div>
  );
}
