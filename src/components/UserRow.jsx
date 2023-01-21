import React, { useEffect, useState } from 'react';
import { mockFetchData } from '../mocks/services';
import { mockUserScores, mockUserPreviews } from '../mocks/handlers';
import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import '../styles/MatchesRow.scss';

export default function UserRow({ team, season }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    Promise.all([
      mockFetchData(mockUserScores),
      mockFetchData(mockUserPreviews),
    ])
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
    <React.Fragment>
      <h2 className="user-row__title">Your Team</h2>
      <div className="scrollable-row">
        {scoreData.map((data, index) => (
          <ScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <PreviewCard key={index} previewData={data} />
        ))}
      </div>
    </React.Fragment>
  );
}
