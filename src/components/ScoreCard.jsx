import { formatDate } from '../utils/utilities';

export default function ScoreCard({ scoreData }) {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <h4 className="match-card__league">{scoreData.league.name}</h4>
        <h4 className="match-card__date">
          {formatDate(scoreData.fixture.date)}
        </h4>
      </div>
      <div className="match-card__main match-card__main--score">
        <div className="match-card__home">
          <img
            className="match-card__home-img"
            src={scoreData.teams.home.logo}
            alt=""
          />
          <h3 className="match-card__home-name">{scoreData.teams.home.name}</h3>
          <h3 className="match-card__home-goals">{scoreData.goals.home}</h3>
        </div>
        <div className="match-card__away">
          <img
            className="match-card__away-img"
            src={scoreData.teams.away.logo}
            alt=""
          />
          <h3 className="match-card__away-name">{scoreData.teams.away.name}</h3>
          <h3 className="match-card__away-goals">{scoreData.goals.away}</h3>
        </div>
      </div>
    </div>
  );
}
