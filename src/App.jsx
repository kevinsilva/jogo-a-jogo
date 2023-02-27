import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import FeaturedRow from './components/FeaturedRow';
import UserRow from './components/UserRow';
import Leagues from './components/Leagues';
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
    team: 211,
  },
  {
    email: 'william@gmail.com',
    password: '123',
    team: 211,
  },
];

function App() {
  const [users, setUsers] = useState(baseUsers);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('data'));
    if (storedUsers) setUsers(storedUsers);
  }, []);

  useEffect(() => {
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
    const newUsers = [...users, { email, password, team, isSignedIn: true }];
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
      foundUser.isSignedIn = true;
      setUsers(copyUsers);
      restoreScroll();
      return '';
    } else {
      return 'As informações não correspondem. Por favor, tente novamente.';
    }
  };

  const signOut = () => {
    const copyUsers = structuredClone(context.users);
    const foundUser = copyUsers.find((user) => user.isSignedIn == true);
    foundUser.isSignedIn = false;
    setUsers(copyUsers);
  };

  const isUserSignedIn = () => {
    return users.find((user) => user.isSignedIn) ? true : false;
  };

  const context = {
    users,
    addUser,
    signUser,
    signOut,
    isUserSignedIn,
  };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
      <FeaturedRow />

      {isUserSignedIn() && getUserTeam(users) && (
        <UserRow team={getUserTeam(users)} />
      )}
      <Leagues />
      <Footer />
    </div>
  );
}

export default App;
