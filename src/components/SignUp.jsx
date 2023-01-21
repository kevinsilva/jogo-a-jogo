import { useState } from 'react';
import { isValid } from '../utils/utilities';

export default function SignUp({
  users,
  setUsers,
  setSignIn,
  setSigned,
  team,
  setTeam,
  setError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || password == '')
      return setError('Please enter your account details');
    if (!isValid.email.format(email) || !isValid.email.unique(users, email))
      return setError('Email must be valid, Please try again!');
    if (!isValid.password.format(password))
      return setError('Password must be over 5 characters');
    setUsers([...users, { email, password, team }]);
    setSigned(true);
    setError('');
    console.log(users); // why it does not show after setUsers?
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form__input-container">
        <label htmlFor="" className="form__label">
          Email
        </label>
        <input
          className="form__input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__input-container">
        <label htmlFor="" className="form__label">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form__select-container">
        <label htmlFor="" className="form__label">
          Select your team
        </label>
        <select
          className="form__select"
          name=""
          id=""
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="" selected>
            &nbsp;
          </option>
          <option value="benfica">Benfica</option>
          <option value="realMadrid">Real Madrid</option>
        </select>
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
