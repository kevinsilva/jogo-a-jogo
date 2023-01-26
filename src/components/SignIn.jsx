import { useContext, useState } from 'react';
import TextInput from './TextInput';
import { AppContext } from '../App';
import { isUserValid } from '../utils/utilities';

export default function SignIn({ users, onSignIn, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    if (email == '' || password == '')
      return onError('Please enter your account details');
    if (isUserValid(users, email, password)) {
      context.setFavoriteTeam(
        users.filter((user) => user.email == email)[0].team
      );
      context.setUserSigned(true);
      onError('');
    } else {
      onError('Info does not match, please try again');
      setPassword('');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form__input-container">
        <TextInput label="Email" value={email} onChange={setEmail} />
      </div>
      <div className="form__input-container">
        <TextInput
          label="Password"
          value={password}
          onChange={setPassword}
          type="password"
        />
      </div>
      <div className="form__btn-container">
        <p
          className="form__option-btn"
          onClick={() => {
            onError('');
            onSignIn(false);
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
