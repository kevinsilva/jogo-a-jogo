import { useState, useContext } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { AppContext } from '../App';
import { isValid, favoriteTeamOptions } from '../utils/utilities';

export default function SignUp({
  users,
  onUsers,
  onSignIn,
  team,
  onTeam,
  onError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || password == '')
      return onError('Please enter your account details');
    if (!isValid.email.format(email) || !isValid.email.unique(users, email))
      return onError('Email must be valid, Please try again!');
    if (!isValid.password.format(password))
      return onError('Password must be over 5 characters');
    const newUsers = [...users, { email, password, team }];
    onUsers(newUsers);
    context.setUserSigned(true);
    onError('');
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
          onChange={onTeam}
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
