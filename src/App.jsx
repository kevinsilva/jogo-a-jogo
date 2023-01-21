import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';

function App() {
  const [isUserSigned, setUserSigned] = useState(false);
  const [favoriteTeam, setFavoriteTeam] = useState(null);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    console.log(data.favoriteTeam);
    if (data.isUserSigned) setUserSigned(data.isUserSigned);
    if (data.favoriteTeam) setFavoriteTeam(data.favoriteTeam);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'data',
      JSON.stringify({
        isUserSigned: isUserSigned,
        favoriteTeam: favoriteTeam,
      })
    );
  }, [isUserSigned, favoriteTeam]);

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
