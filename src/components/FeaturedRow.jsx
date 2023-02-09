import { useEffect, useState } from 'react';
import { FEATURED_TEAMS } from '../utils/utilities';
import { getFeaturedMatches } from '../utils/services';
import { mockFetchData } from '../mocks/services';
import { mockFeaturedScores, mockFeaturedPreviews } from '../mocks/handlers';
import FeaturedScoreCard from './FeaturedScoreCard';
import FeaturedPreviewCard from './FeaturedPreviewCard';

export default function FeaturedRow() {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  function getMockFeatured() {
    return Promise.all([
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
  }

  // function center() {
  //   const container = document.getElementById('#scrollable-row');
  //   const items = document.querySelectorAll('.featured-card');
  //   const middleIndex = Math.floor(items.length / 2);
  //   const middleItem = items[middleIndex];

  //   container.scrollLeft =
  //     middleItem.offsetLeft -
  //     (container.offsetWidth - middleItem.offsetWidth) / 2;
  // }

  useEffect(() => {
    Promise.all([
      getFeaturedMatches(FEATURED_TEAMS, 'last'),
      getFeaturedMatches(FEATURED_TEAMS, 'next'),
    ])
      .then(([scores, previews]) => {
        console.log('DATA: ', scores, previews);
        setScoreData(scores);
        setPreviewData(previews);
        setState('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        getMockFeatured();
      });
  }, []);

  // if (state == 'pending') return <h1>Loading...</h1>;
  if (state == 'pending') return <div className="spinner"></div>;
  if (state == 'rejected') return <h1>Error, try again later</h1>;

  return (
    <div className="scrollable-row" id="featured-row">
      {scoreData.map((data, index) => (
        <FeaturedScoreCard key={index} scoreData={data} />
      ))}
      {previewData.map((data, index) => (
        <FeaturedPreviewCard key={index} previewData={data} />
      ))}
    </div>
  );
}
