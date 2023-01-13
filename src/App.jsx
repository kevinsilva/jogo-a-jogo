import { useState } from 'react';
import reactLogo from './assets/react.svg';

import FeaturedRow from './components/FeaturedRow';
import MatchesRow from './components/MatchesRow';

function App() {
  return (
    <div className="App">
      <FeaturedRow />
      <MatchesRow />
    </div>
  );
}

export default App;
