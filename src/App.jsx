import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import Matches from './components/Matches';
import Footer from './components/Footer';
import {
  isValid,
  isUserValid,
  getUserTeam,
  restoreScroll,
} from './utils/utilities';

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
    const storedUsers = JSON.parse(localStorage.getItem('data'));
    if (storedUsers) setUsers(storedUsers);
  }, []);

  useEffect(() => {
    console.log(users);
    if (users !== baseUsers)
      localStorage.setItem('data', JSON.stringify(users));
  }, [users]);

  const addUser = (email, password, team) => {
    if (email == '' || password == '')
      return 'Introduza os seus detalhes de conta.';
    if (
      !isValid.email.format(email) ||
      !isValid.email.unique(context.users, email)
    )
      return 'Introduza um email válido!';
    if (!isValid.password.format(password))
      return 'A palavra-passe deve ter mais de 5 caracteres.';
    const newUsers = [...users, { email, password, team, isOnline: true }];
    setUsers(newUsers);
    restoreScroll();
    return '';
  };

  const signUser = (email, password) => {
    if (email == '' || password == '')
      return 'Introduza os seus detalhes de conta.';
    if (isUserValid(context.users, email, password)) {
      const copyUsers = structuredClone(context.users);
      const foundUser = copyUsers.find((user) => user.email == email);
      foundUser.isOnline = true;
      setUsers(copyUsers);
      restoreScroll();
      return '';
    } else {
      // setPassword('');
      return 'As informações não correspondem. Por favor, tente novamente.';
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

      {isUserOnline() && getUserTeam(users) && (
        <UserRow team={getUserTeam(users)} />
      )}
      <Matches />
      <Footer />
    </div>
  );
}

export default App;
