import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import MatchesRow from './components/MatchesRow';
import { isValid, isUserValid, getUserTeam } from './utils/utilities';

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
      const updateUser = copyUsers.find((user) => user.email == email);
      updateUser.isOnline = true;
      setUsers(copyUsers);
      return '';
    } else {
      setPassword('');
      return 'Info does not match, please try again';
    }
  };

  const signOut = () => {
    const copyUsers = structuredClone(context.users);
    const updateUser = copyUsers.find((user) => user.isOnline == true);
    updateUser.isOnline = false;
    setUsers(copyUsers);
  };

  const isUserOnline = () => {
    return users.find((user) => user.isOnline) ? true : false;
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

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
      {isUserOnline() && getUserTeam(users)}
      {isUserOnline() && getUserTeam(users) && (
        <UserRow team={getUserTeam(users)} />
      )}
      <MatchesRow />
    </div>
  );
}

export default App;
