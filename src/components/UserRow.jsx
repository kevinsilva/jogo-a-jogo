import { useEffect, useState, useRef } from 'react';
import { getMockData, mockFetchData } from '../mocks/services';
import { mockUserScores, mockUserPreviews } from '../mocks/handlers';
import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import Error from './Error';
import RightArrowButton from './RightArrowButton';
import LeftArrowButton from './LeftArrowButton';
import { getTeamLabel } from '../utils/utilities';
import { fetchTeamMatches } from '../utils/services';

export default function UserRow({ team }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const scrollableRef = useRef(null);

  const handleLeftButtonClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft += 200;
    }
  };

  const handleRightButtonClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft -= 200;
    }
  };

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

  if (state == 'pending') return <div className="loading-spinner">&nbsp;</div>;
  if (state == 'rejected') return <Error />;
  // if (state == 'rejected') return <h1>Error, try again later</h1>;

  return (
    <section className="user">
      <div className="section__title-container">
        <h2 className="section__title">
          o meu clube
          <span className="section__title section__title--emphasis">
            {getTeamLabel(team)}
          </span>
        </h2>
      </div>
      <h2 className="matches-row__title matches-row__title--user">
        ❤️ Todas as competições
      </h2>
      <div className="scrollable-row" id="user-row" ref={scrollableRef}>
        {scoreData.map((data, index) => (
          <ScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <PreviewCard key={index} previewData={data} />
        ))}
      </div>
      <LeftArrowButton
        onClick={handleLeftButtonClick}
        className="matches__left-arrow"
      />
      <RightArrowButton
        onClick={handleRightButtonClick}
        className="matches__right-arrow"
      />
    </section>
  );
}
