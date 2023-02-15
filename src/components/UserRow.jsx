import { useEffect, useState } from 'react';
import { getMockData, mockFetchData } from '../mocks/services';
import { mockUserScores, mockUserPreviews } from '../mocks/handlers';
import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import '../styles/MatchesRow.scss';
import { fetchTeamMatches } from '../utils/services';

export default function UserRow({ team }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  // useEffect(() => {
  //   Promise.all([
  //     fetchTeamMatches(team, 10, 'last'),
  //     fetchTeamMatches(team, 3, 'next'),
  //   ])
  //     .then(([scores, previews]) => {
  //       setScoreData(scores.response);
  //       setPreviewData(previews.response);
  //       setState('fulfilled');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       getMockData(mockUserScores, mockUserPreviews)
  //         .then(([scores, previews]) => {
  //           setScoreData(scores);
  //           setPreviewData(previews);
  //           setState('fulfilled');
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setState('rejected');
  //         });
  //     });
  // }, []);

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

  if (state == 'pending') return <div className="spinner"></div>;
  if (state == 'rejected') return <h1>Error, try again later</h1>;

  return (
    <>
      <div className="matches__title-container">
        <h2 className="matches__title">
          o meu clube
          <span className="emphasis">{team}</span>
        </h2>
      </div>
      <h2 className="user-row__title">❤️ Todas as competições</h2>
      <div className="scrollable-row" id="user-row">
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
