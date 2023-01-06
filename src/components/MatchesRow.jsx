import { useEffect, useState } from 'react';
import { mockFetchMatches } from '../mocks/services';
import ScoreCard from './ScoreCard';
import '../styles/MatchesRow.scss';

export default function MatchesRow({ leagueID, season, totalMatches }) {
  const [state, setState] = useState('pending');
  const [matchesData, setMatchesData] = useState(null);

  useEffect(() => {
    mockFetchMatches()
      .then((data) => {
        console.log('use', data);
        setMatchesData(data);
        setState('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        setState('rejected');
      });
  }, []);

  if (state == 'pending') return <h1>Loading...</h1>;
  if (state == 'rejected') return <h1>Error, try again later</h1>;

  return (
    <div className="scrollable-row">
      {matchesData.map((data, index) => (
        <ScoreCard key={index} matchData={data} />
      ))}
    </div>
  );
}
