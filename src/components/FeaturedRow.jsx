import { useEffect, useState } from 'react';
import {
  CLUBS,
  calcFeaturePoints,
  compareFirstIndex,
} from '../utils/utilities';
import { fetchTeamStatistics } from '../utils/services';
import { mockFetchData } from '../mocks/services';
import { mockFeaturedScores, mockFeaturedPreviews } from '../mocks/handlers';
import FeaturedScoreCard from './FeaturedScoreCard';
import FeaturedPreviewCard from './FeaturedPreviewCard';

export default function FeaturedRow() {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  // useEffect(() => {
  //   const copyClubs = structuredClone(CLUBS);
  //   let formArray = [];
  //   let error = false;

  //   Object.values(copyClubs).map((club) => {
  //     fetchTeamStatistics(club.id, club.league)
  //       .then((result) => {
  //         formArray.push(calcFeaturePoints(result.response.form), club.id);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         error = true;
  //       });
  //   });

  //   if (!error) {
  //     formArray.sort(compareFirstIndex);
  //     formArray.forEach((array, index) => {
  //       if (index < 5) {
  //         Promise.all([
  //           fetchTeamMatch(array[0], 'last'),
  //           fetchTeamMatch(array[0], 'next'),
  //         ]).then(([scores, previews]) => {
  //           setScoreData(scoreData, ...scores.response);
  //           setPreviewData(previewData, ...previews.response);
  //         }).catch((error) => {
  //           console.log(error);
  //           setState('rejected');
  //         }

  //       }
  //     });
  //   } else {
  //     Promise.all([
  //       mockFetchData(mockFeaturedScores),
  //       mockFetchData(mockFeaturedPreviews),
  //     ])
  //       .then(([scores, previews]) => {
  //         console.log(scores, previews);
  //         setScoreData(scores);
  //         setPreviewData(previews);
  //         setState('fulfilled');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setState('rejected');
  //       });
  //   }
  // }, []);

  useEffect(() => {
    Promise.all([
      mockFetchData(mockFeaturedScores),
      mockFetchData(mockFeaturedPreviews),
    ])
      .then(([scores, previews]) => {
        console.log(scores, previews);
        setScoreData(scores);
        setPreviewData(previews);
        // setState('pending');
        setState('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        setState('rejected');
      });
  }, []);

  // if (state == 'pending') return <h1>Loading...</h1>;
  if (state == 'pending') return <div className="spinner"></div>;
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
