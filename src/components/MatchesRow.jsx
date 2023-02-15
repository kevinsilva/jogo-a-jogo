import { useEffect, useState } from 'react';
import { fetchLeagueMatches } from '../utils/services';
import { mockFetchData } from '../mocks/services';
import { mockScores, mockPreviews } from '../mocks/handlers';
import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import Error from './Error';
// import '../styles/MatchesRow.scss';

export default function MatchesRow({ leagueName, leagueID, totalMatches }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  function getMockMatches() {
    return Promise.all([mockFetchData(mockScores), mockFetchData(mockPreviews)])
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
  }

  useEffect(() => {
    Promise.all([mockFetchData(mockScores), mockFetchData(mockPreviews)])
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

  // useEffect(() => {
  //   Promise.all([
  //     fetchLeagueMatches(leagueID, totalMatches, 'last'),
  //     fetchLeagueMatches(leagueID, totalMatches, 'next'),
  //   ])
  //     .then(([scores, previews]) => {
  //       console.log('MATCHES: ', scores, previews);
  //       setScoreData(scores.response);
  //       setPreviewData(previews.response);
  //       setState('fulfilled');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       getMockMatches();
  //     });
  // }, []);

  if (state == 'pending') return <div className="spinner"></div>;
  if (state == 'rejected') return <Error />;

  return (
    <>
      <h2 className="match-row__title">{leagueName}</h2>
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
