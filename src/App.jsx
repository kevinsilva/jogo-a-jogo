import { useState } from 'react';
import reactLogo from './assets/react.svg';

import FeaturedScoreCard from './components/FeaturedScoreCard';
import FeaturedPreviewCard from './components/FeaturedPreviewCard';
import MatchesRow from './components/MatchesRow';

function App() {
  return (
    <div className="App">
      <FeaturedPreviewCard />
      <FeaturedScoreCard />
      <MatchesRow />
    </div>
  );
}

export default App;
