import { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import '../styles/Form.scss';

export default function Form({ team, setTeam }) {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([
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
  ]);

  return (
    <div className="form">
      {signIn ? (
        <SignIn
          users={users}
          onSignIn={(boolean) => setSignIn(boolean)}
          setTeam={setTeam}
          onError={(msg) => setError(msg)}
        />
      ) : (
        <SignUp
          users={users}
          setUsers={setUsers}
          onSignIn={(boolean) => setSignIn(boolean)}
          team={team}
          setTeam={setTeam}
          setError={setError}
          onError={(msg) => setError(msg)}
        />
      )}
      <p className="form__error-msg">{error}&nbsp;</p>
    </div>
  );
}
