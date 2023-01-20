import { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import '../styles/Form.scss';

export default function Form({ setSigned, team, setTeam }) {
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
          setSignIn={setSignIn}
          setSigned={setSigned}
          team={team}
          setTeam={setTeam}
          setError={setError}
        />
      ) : (
        <SignUp
          users={users}
          setUsers={setUsers}
          setSignIn={setSignIn}
          setSigned={setSigned}
          team={team}
          setTeam={setTeam}
          setError={setError}
        />
      )}
      <p className="form__error-msg">{error}&nbsp;</p>
    </div>
  );
}
