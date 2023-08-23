import React, { useEffect, useState, useRef } from 'react';

import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import Error from './Error';
import RightArrowButton from './RightArrowButton';
import LeftArrowButton from './LeftArrowButton';

import { getMockData } from '../mocks/services';
import { mockUserScores, mockUserPreviews } from '../mocks/handlers';
import {
  getTeamLabel,
  handleLeftButtonClick,
  handleRightButtonClick,
} from '../utils/utilities';
import { getUserMatches } from '../utils/services';

export default function UserRow({ team }) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const scrollableRef = useRef(null);

  useEffect(() => {
    getUserMatches(team)
      .then(({ last: scores, next: previews }) => {
        console.log(scores, previews);
        setScoreData(scores);
        setPreviewData(previews);
        setState('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        getMockData(mockUserScores, mockUserPreviews)
          .then(([scores, previews]) => {
            setScoreData(scores);
            setPreviewData(previews);
            setState('fulfilled');
          })
          .catch((error) => {
            console.log(error);
            setState('rejected');
          });
      });
  }, []);
  // useEffect(() => {
  //   Promise.all([
  //     fetchTeamMatches(team, 1, 'last'),
  //     fetchTeamMatches(team, 5, 'next'),
  //   ])
  //     .then(([scores, previews]) => {
  //       setScoreData(scores);
  //       setPreviewData(previews);
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

  if (state == 'pending') return <div className="loading-spinner">&nbsp;</div>;
  if (state == 'rejected') return <Error />;

  return (
    <section className="user">
      <div className="section__title-container">
        <h3 className="section__title">
          o meu clube
          <span className="section__title section__title--emphasis">
            {getTeamLabel(team)}
          </span>
        </h3>
      </div>
      <h4 className="matches-row__title matches-row__title--user">
        ❤️ Todas as competições
      </h4>
      <div className="scrollable-row" id="user-row" ref={scrollableRef}>
        {[...scoreData].reverse().map((data, index) => (
          <ScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <PreviewCard key={index} previewData={data} />
        ))}
      </div>
      <LeftArrowButton
        onClick={() => handleLeftButtonClick(scrollableRef)}
        className="left-arrow left-arrow--user-row"
      />
      <RightArrowButton
        onClick={() => handleRightButtonClick(scrollableRef)}
        className="right-arrow right-arrow--user-row"
      />
    </section>
  );
}
