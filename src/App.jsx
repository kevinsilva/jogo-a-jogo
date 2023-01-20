import { useState } from 'react';
import reactLogo from './assets/react.svg';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';

function App() {
  const [isUserSigned, setUserSigned] = useState(false);
  const [favoriteTeam, setFavoriteTeam] = useState('');

  return (
    <div className="App">
      <Header
        userSigned={isUserSigned}
        setSigned={setUserSigned}
        team={favoriteTeam}
        setTeam={setFavoriteTeam}
      />
      <FeaturedRow />
      {isUserSigned && favoriteTeam && <UserRow team={favoriteTeam} />}
      <MatchesRow />
    </div>
  );
}

export default App;
