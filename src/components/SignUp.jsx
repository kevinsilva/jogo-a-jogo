import React, { useState } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { AppContext } from '../App';
import { isValid, favoriteTeamOptions } from '../utils/utilities';

export default function SignUp({
  users,
  setUsers,
  onSignIn,
  team,
  setTeam,
  onError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = React.useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || password == '')
      return onError('Please enter your account details');
    if (!isValid.email.format(email) || !isValid.email.unique(users, email))
      return onError('Email must be valid, Please try again!');
    if (!isValid.password.format(password))
      return onError('Password must be over 5 characters');
    const newUsers = [...users, { email, password, team }];
    setUsers(newUsers);
    context.setUserSigned(true);
    onError('');
    console.log(users); // why does not show after setUsers?
    console.log(newUsers);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form__input-container">
        <TextInput label="Email" value={email} onChange={setEmail} />
      </div>
      <div className="form__input-container">
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="form__select-container">
        <SelectInput
          label="Select your team"
          value={team}
          onChange={setTeam}
          options={favoriteTeamOptions}
        />
      </div>
      <div className="form__btn-container">
        <p
          className="form__option-btn"
          onClick={() => {
            onError('');
            onSignIn(true);
          }}
        >
          Sign in instead
        </p>
        <button className="form__submit-btn" type="submit">
          Create Account
        </button>
      </div>
    </form>
  );
}
