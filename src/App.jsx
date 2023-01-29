import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';

export const AppContext = React.createContext();
const initialUsers = [
  {
    email: 'kevin@gmail.com',
    password: 'abc',
    team: 'benfica',
  },
  {
    email: 'william@gmail.com',
    password: '123',
    team: 'benfica',
  },
];

function App() {
  const [isUserSigned, setUserSigned] = useState(false);
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [users, setUsers] = useState(initialUsers);
  // useEffect(() => {
  //   const data = JSON.parse(window.localStorage.getItem('data'));
  //   if (data.isUserSigned) setUserSigned(data.isUserSigned);
  //   if (data.favoriteTeam) setFavoriteTeam(data.favoriteTeam);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     'data',
  //     JSON.stringify({
  //       isUserSigned: isUserSigned,
  //       favoriteTeam: favoriteTeam,
  //     })
  //   );
  // }, [isUserSigned, favoriteTeam]);

  const context = {
    isUserSigned,
    setUserSigned,
    favoriteTeam,
    setFavoriteTeam,
    users,
    setUsers, //TODO: nao passar o setter! (pois perde-se o controle)
  };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
      <FeaturedRow />
      {isUserSigned && favoriteTeam && <UserRow team={favoriteTeam} />}
      <MatchesRow />
    </div>
  );
}

export default App;
