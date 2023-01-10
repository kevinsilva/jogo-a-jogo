import { formatDate, LEAGUES } from '../utils/utilities';
import '../styles/MatchesCard.scss';

export default function PreviewCard({ previewData }) {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <h4 className="match-card__league-name">{previewData.league.name}</h4>
        <h4 className="match-card__date">
          {formatDate(previewData.fixture.date)}
        </h4>
      </div>
      <div className="match-card__sections match-card__sections--preview">
        <div className="match-card__teams">
          <h3 className="match-card__home-name">
            {previewData.teams.home.name}
          </h3>
          <h3 className="match-card__away-name">
            {previewData.teams.away.name}
          </h3>
        </div>
        <div className="match-card__tv-info">
          <h4 className="match-card__tv-name">
            {LEAGUES[previewData.league.name].tvChannel[0]}
          </h4>
        </div>
      </div>
    </div>
  );
}
