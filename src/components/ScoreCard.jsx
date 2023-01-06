import { formatDate } from '../utils/utilities';
import '../styles/MatchesCard.scss';

export default function ScoreCard({ scoreData }) {
  return (
    <div className="card">
      <div className="card__header">
        <h4 className="card__league-name">{scoreData.league.name}</h4>
        <h4 className="card__date">{formatDate(scoreData.fixture.date)}</h4>
      </div>
      <div className="card__sections card__sections--score">
        <div className="card__home-section">
          <h3 className="card__home-name">{scoreData.teams.home.name}</h3>
          <h3 className="card__home-goals">{scoreData.goals.home}</h3>
        </div>
        <div className="card__away-section">
          <h3 className="card__away-name">{scoreData.teams.away.name}</h3>
          <h3 className="card__away-goals">{scoreData.goals.away}</h3>
        </div>
      </div>
    </div>
  );
}
