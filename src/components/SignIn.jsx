import { useState } from 'react';
import { isUserValid } from '../utils/utilities';

export default function SignIn({
  users,
  setSignIn,
  setSigned,
  setTeam,
  setError,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || password == '')
      return setError('Please enter your account details');
    if (isUserValid(users, email, password)) {
      setTeam(users.filter((user) => user.email == email)[0].team);
      setSigned(true);
      setError('');
    } else {
      setError('Info does not match, please try again');
      setPassword('');
    }
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
      <div className="form__btn-container">
        <p
          className="form__option-btn"
          onClick={() => {
            setError('');
            setSignIn(false);
          }}
        >
          Create account
        </p>
        <button className="form__submit-btn" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
}
