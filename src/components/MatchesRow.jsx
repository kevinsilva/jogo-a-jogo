import { useEffect, useState } from 'react';
import { mockFetchPreviews, mockFetchScores } from '../mocks/services';
import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import '../styles/MatchesRow.scss';

export default function MatchesRow({ leagueID, season, totalMatches }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    Promise.all([mockFetchScores(), mockFetchPreviews()])
      .then(([scores, previews]) => {
        console.log(scores, previews);
        setScoreData(scores);
        setPreviewData(previews);
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
    <>
      <h2 className="match-row__title">Primeira Liga</h2>
      <div className="scrollable-row">
        {scoreData.map((data, index) => (
          <ScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <PreviewCard key={index} previewData={data} />
        ))}
      </div>
    </>
  );
}
