import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';
import Footer from './components/Footer';
import { isValid, isUserValid, getUserTeam, LEAGUES } from './utils/utilities';

export const AppContext = React.createContext();

const baseUsers = [
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
  const [users, setUsers] = useState(baseUsers);

  useEffect(() => {
    console.log('get');
    const storedUsers = JSON.parse(localStorage.getItem('data'));
    if (storedUsers) setUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (users !== baseUsers)
      localStorage.setItem('data', JSON.stringify(users));
  }, [users]);

  const addUser = (email, password, team) => {
    if (email == '' || password == '')
      return 'Please enter your account details';
    if (
      !isValid.email.format(email) ||
      !isValid.email.unique(context.users, email)
    )
      return 'Email must be valid, Please try again!';
    if (!isValid.password.format(password))
      return 'Password must be over 5 characters';
    const newUsers = [...users, { email, password, team, isOnline: true }];
    setUsers(newUsers);
    return '';
  };

  const signUser = (email, password) => {
    if (email == '' || password == '')
      return 'Please enter your account details';
    if (isUserValid(context.users, email, password)) {
      const copyUsers = structuredClone(context.users);
      const foundUser = copyUsers.find((user) => user.email == email);
      foundUser.isOnline = true;
      setUsers(copyUsers);
      return '';
    } else {
      // setPassword('');
      return 'Info does not match, please try again';
    }
  };

  const signOut = () => {
    const copyUsers = structuredClone(context.users);
    const foundUser = copyUsers.find((user) => user.isOnline == true);
    foundUser.isOnline = false;
    setUsers(copyUsers);
  };

  const isUserOnline = () => {
    return users.find((user) => user.isOnline) ? true : false;
  };

  const context = {
    users,
    addUser,
    signUser,
    signOut,
    isUserOnline,
  };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
      <FeaturedRow />
      {/* {isUserOnline() && getUserTeam(users)} */}
      {isUserOnline() && getUserTeam(users) && (
        <UserRow team={getUserTeam(users)} />
      )}

      <div className="matches__title-container">
        <h2 className="matches__title">
          as melhores<span className="emphasis"> competições</span>
        </h2>
      </div>

      <MatchesRow
        leagueName={'UEFA Champions League'}
        leagueID={2}
        totalMatches={LEAGUES['UEFA Champions League'].matchesByRound}
      />

      <MatchesRow
        leagueName={'Primeira Liga'}
        leagueID={94}
        totalMatches={LEAGUES['Primeira Liga'].matchesByRound}
      />
      <MatchesRow
        leagueName={'Premier League'}
        leagueID={39}
        totalMatches={LEAGUES['Premier League'].matchesByRound}
      />
      <MatchesRow
        leagueName={'La Liga'}
        leagueID={140}
        totalMatches={LEAGUES['La Liga'].matchesByRound}
      />

      <MatchesRow
        leagueName={'Serie A'}
        leagueID={135}
        totalMatches={LEAGUES['Serie A'].matchesByRound}
      />

      <MatchesRow
        leagueName={'Bundesliga'}
        leagueID={78}
        totalMatches={LEAGUES['Bundesliga'].matchesByRound}
      />

      <MatchesRow
        leagueName={'League 1'}
        leagueID={61}
        totalMatches={LEAGUES['League 1'].matchesByRound}
      />

      <MatchesRow
        leagueName={'UEFA Europa League'}
        leagueID={3}
        totalMatches={LEAGUES['UEFA Europa League'].matchesByRound}
      />
      <Footer />
    </div>
  );
}

export default App;
