import { formatDate } from '../utils/utilities';
import '../styles/MatchesCard.scss';

export default function ScoreCard({ scoreData }) {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <h4 className="match-card__league-name">{scoreData.league.name}</h4>
        <h4 className="match-card__date">
          {formatDate(scoreData.fixture.date)}
        </h4>
      </div>
      <div className="match-card__sections match-card__sections--score">
        <div className="match-card__home-section">
          <h3 className="match-card__home-name">{scoreData.teams.home.name}</h3>
          <h3 className="match-card__home-goals">{scoreData.goals.home}</h3>
        </div>
        <div className="match-card__away-section">
          <h3 className="match-card__away-name">{scoreData.teams.away.name}</h3>
          <h3 className="match-card__away-goals">{scoreData.goals.away}</h3>
        </div>
      </div>
    </div>
  );
}
