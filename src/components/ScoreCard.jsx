import formatDate from '../utils/utilities';

export default function ScoreCard({ matchData }) {
  return (
    <div className="card-container">
      <div className="">
        <h4>{matchData.league.name}</h4>
        <h4>{formatDate(matchData.fixture.date)}</h4>
      </div>
      <div>
        <div>
          <h3>{matchData.teams.home.name}</h3>
          <h3>{matchData.goals.home}</h3>
        </div>
        <div>
          <h3>{matchData.teams.away.name}</h3>
          <h3>{matchData.goals.away}</h3>
        </div>
      </div>
    </div>
  );
}
