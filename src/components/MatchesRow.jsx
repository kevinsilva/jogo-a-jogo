import React, { useEffect, useState, useRef } from 'react';

import ScoreCard from './ScoreCard';
import PreviewCard from './PreviewCard';
import Error from './Error';
import RightArrowButton from './RightArrowButton';
import LeftArrowButton from './LeftArrowButton';

import { fetchLeagueMatches } from '../utils/services';
import { getMockData } from '../mocks/services';
import {
  handleLeftButtonClick,
  handleRightButtonClick,
} from '../utils/utilities';
import { mockScores, mockPreviews } from '../mocks/handlers';

export default function MatchesRow({
  leagueName,
  leagueID,
  totalMatches,
  mock = true,
}) {
  const [state, setState] = useState('pending');
  const [scoreData, setScoreData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const scrollableRef = useRef(null);

  useEffect(() => {
    if (mock) {
      getMockData(mockScores[leagueName], mockPreviews[leagueName])
        .then(([scores, previews]) => {
          setScoreData(scores);
          setPreviewData(previews);
          setState('fulfilled');
        })
        .catch((error) => {
          console.log(error);
          setState('rejected');
        });
    } else {
      Promise.all([
        fetchLeagueMatches(leagueID, totalMatches, 'last'),
        fetchLeagueMatches(leagueID, totalMatches, 'next'),
      ])
        .then(([scores, previews]) => {
          setScoreData(scores.response);
          setPreviewData(previews.response);
          setState('fulfilled');
        })
        .catch((error) => {
          console.log(error);
          setState('rejected');
        });
    }
  }, []);

  if (state == 'pending') return <div className="loading-spinner">&nbsp;</div>;
  if (state == 'rejected') return <Error />;

  return (
    <div className="matches-row">
      <h4 className="matches-row__title matches-row__title--leagues">
        {leagueName}
      </h4>
      <div className="scrollable-row" ref={scrollableRef}>
        {[...scoreData].reverse().map((data, index) => (
          <ScoreCard key={index} scoreData={data} />
        ))}
        {previewData.map((data, index) => (
          <PreviewCard key={index} previewData={data} />
        ))}
      </div>
      <LeftArrowButton
        onClick={() => handleLeftButtonClick(scrollableRef)}
        className="left-arrow left-arrow--matches-row"
      />
      <RightArrowButton
        onClick={() => handleRightButtonClick(scrollableRef)}
        className="right-arrow right-arrow--matches-row"
      />
    </div>
  );
}
