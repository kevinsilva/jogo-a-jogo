import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';

export const AppContext = React.createContext();

function App() {
  const [isUserSigned, setUserSigned] = useState(false);
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [value, setValue] = useState(0);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('data'));
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

  const context = {
    isUserSigned,
    setUserSigned,
  };

  console.log('muito fixe');
  console.log('app:', value);

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Header team={favoriteTeam} setTeam={setFavoriteTeam} />
      </AppContext.Provider>
      <FeaturedRow />
      {isUserSigned && favoriteTeam && <UserRow team={favoriteTeam} />}
      <MatchesRow />
    </div>
  );
}

export default App;
