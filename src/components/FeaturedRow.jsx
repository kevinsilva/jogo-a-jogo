import React, { useEffect, useState, useRef } from 'react';

import FeaturedScoreCard from './FeaturedScoreCard';
import FeaturedPreviewCard from './FeaturedPreviewCard';
import Error from './Error';
import RightArrowButton from './RightArrowButton';
import LeftArrowButton from './LeftArrowButton';

import {
  FEATURED_TEAMS,
  handleLeftButtonClick,
  handleRightButtonClick,
} from '../utils/utilities';
import { getFeaturedMatches } from '../utils/services';
import { getMockData } from '../mocks/services';
import { mockFeaturedScores, mockFeaturedPreviews } from '../mocks/handlers';
import { sortFeaturedTeams } from '../utils/utilities';

export default function FeaturedRow() {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const scrollableRef = useRef(null);

  useEffect(() => {
    getFeaturedMatches(sortFeaturedTeams(FEATURED_TEAMS), 2)
      .then(({ last: scores, next: previews }) => {
        console.log(scores, previews);
        setScoreData(scores);
        setPreviewData(previews);
        setState('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        getMockData(mockFeaturedScores, mockFeaturedPreviews)
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

  if (state == 'pending') return <div className="loading-spinner">&nbsp;</div>;
  if (state == 'rejected') return <Error />;

  return (
    <section className="featured">
      <div className="featured__title-container">
        <h1 className="section__title">
          jogos
          <br />
          em
          <span className="section__title section__title--emphasis">
            destaque
          </span>
        </h1>
        <h2 className="featured__subtitle">
          &#8594; deslize para previsões
          <br />
          &#8592; deslize para resultados
        </h2>
      </div>
      <div className="scrollable-row" id="featured-row" ref={scrollableRef}>
        {scoreData.map((data, index) => (
          <FeaturedScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <FeaturedPreviewCard key={index} previewData={data} />
        ))}
      </div>
      <LeftArrowButton
        onClick={() => handleLeftButtonClick(scrollableRef)}
        className="left-arrow left-arrow--featured"
      />
      <RightArrowButton
        onClick={() => handleRightButtonClick(scrollableRef)}
        className="right-arrow right-arrow--featured"
      />
    </section>
  );
}
