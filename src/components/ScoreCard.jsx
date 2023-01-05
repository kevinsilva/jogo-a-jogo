import formatDate from '../utils/utilities';
import '../styles/ScoreCard.scss';

export default function ScoreCard({ matchData }) {
  return (
    <div className="card">
      <div className="card__header">
        <h4 className="card__league-name">{matchData.league.name}</h4>
        <h4 className="card__date">{formatDate(matchData.fixture.date)}</h4>
      </div>
      <div>
        <div className="card__home-section">
          <h3 className="card__home-name">{matchData.teams.home.name}</h3>
          <h3 className="card__home-goals">{matchData.goals.home}</h3>
        </div>
        <div className="card__away-section">
          <h3 className="card__away-name">{matchData.teams.away.name}</h3>
          <h3 className="card__away-goals">{matchData.goals.away}</h3>
        </div>
      </div>
    </div>
  );
}
