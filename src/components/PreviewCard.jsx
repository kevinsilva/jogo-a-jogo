import { formatDate, LEAGUES } from '../utils/utilities';

export default function PreviewCard({ previewData }) {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <h4 className="match-card__league">{previewData.league.name}</h4>
        <h4 className="match-card__date">
          {formatDate(previewData.fixture.date)}
        </h4>
      </div>
      <div className="match-card__main match-card__main--preview">
        <div className="match-card__teams">
          <div className="match-card__home">
            <img
              className="match-card__home-img"
              src={previewData.teams.home.logo}
              alt=""
            />
            <h3 className="match-card__home-name">
              {previewData.teams.home.name}
            </h3>
          </div>
          <div className="match-card__away">
            <img
              className="match-card__away-img"
              src={previewData.teams.away.logo}
              alt=""
            />
            <h3 className="match-card__away-name">
              {previewData.teams.away.name}
            </h3>
          </div>
        </div>
        <div className="match-card__tv">
          <h4 className="match-card__tv-name">
            {LEAGUES[previewData.league.name]?.tvChannel[0] ?? 'Not defined'}
          </h4>
        </div>
      </div>
    </div>
  );
}
