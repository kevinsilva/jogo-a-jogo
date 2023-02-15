import { useEffect, useState } from 'react';
import { FEATURED_TEAMS } from '../utils/utilities';
import { getFeaturedMatches } from '../utils/services';
import { mockFetchData } from '../mocks/services';
import { mockFeaturedScores, mockFeaturedPreviews } from '../mocks/handlers';
import FeaturedScoreCard from './FeaturedScoreCard';
import FeaturedPreviewCard from './FeaturedPreviewCard';
import Error from './Error';

// import '../styles/MatchesRow.scss';

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

  // useEffect(() => {
  //   Promise.all([
  //     getFeaturedMatches(FEATURED_TEAMS, 'last'),
  //     getFeaturedMatches(FEATURED_TEAMS, 'next'),
  //   ])
  //     .then(([scores, previews]) => {
  //       console.log('DATA: ', scores, previews);
  //       setScoreData(scores);
  //       setPreviewData(previews);
  //       setState('fulfilled');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       getMockFeatured();
  //     });
  // }, []);

  if (state == 'pending') return <div className="spinner"></div>;
  if (state == 'rejected') return <Error />;

  return (
    <div className="intro">
      <div className="featured__title-container">
        <h2 className="featured__title">
          jogos
          <br />
          em
          <span className="emphasis">destaque</span>
        </h2>
        {/* <h4 className="featured__subtitle"></h4> */}
      </div>
      <div className="animation__text-container">
        {/* <span className="animation__arrow">
          <span></span>
          <span></span>
          <span></span>
        </span> */}
        {/* <h3 className="animation__text"></h3> */}
      </div>
      <div className="scrollable-row" id="featured-row">
        {scoreData.map((data, index) => (
          <FeaturedScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <FeaturedPreviewCard key={index} previewData={data} />
        ))}
      </div>
    </div>
  );
}
