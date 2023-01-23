import React, { useState } from 'react';
import { AppContext } from '../App';
import { isValid } from '../utils/utilities';

const favoriteTeamOptions = [
  { label: '', value: '' },
  { label: 'Benfica', value: 'benfica' },
  { label: 'Real Madrid', value: 'realMadrid' },
];

export default function SignUp({
  users,
  setUsers,
  setSignIn,
  team,
  setTeam,
  setError,
  onError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = React.useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == '' || password == '')
      return setError('Please enter your account details');
    if (!isValid.email.format(email) || !isValid.email.unique(users, email))
      // return setError('Email must be valid, Please try again!');
      return onError({
        msg: 'Email must be valid, Please try again!',
        code: 123,
      });
    if (!isValid.password.format(password))
      return setError('Password must be over 5 characters');
    const newUsers = [...users, { email, password, team }];
    setUsers(newUsers);
    context.setUserSigned(true);
    setError('');
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
            setError('');
            setSignIn(true);
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

function TextInput({ label, value, onChange, type = 'text' }) {
  return (
    <>
      <label htmlFor="" className="form__label">
        {label}
      </label>
      <input
        className="form__input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <>
      <label htmlFor="" className="form__label">
        {label}
      </label>
      <select
        className="form__select"
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
