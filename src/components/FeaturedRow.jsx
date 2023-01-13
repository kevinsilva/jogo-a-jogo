import { useEffect, useState } from 'react';
import { mockFetchData } from '../mocks/services';
import { mockFeaturedScores, mockFeaturedPreviews } from '../mocks/handlers';
import FeaturedScoreCard from './FeaturedScoreCard';
import FeaturedPreviewCard from './FeaturedPreviewCard';

export default function FeaturedRow() {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    Promise.all([
      mockFetchData(mockFeaturedScores),
      mockFetchData(mockFeaturedPreviews),
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
    <div className="scrollable-row">
      {scoreData.map((data, index) => (
        <FeaturedScoreCard key={index} scoreData={data} />
      ))}
      {previewData.map((data, index) => (
        <FeaturedPreviewCard key={index} previewData={data} />
      ))}
    </div>
  );
}
