import { useContext, useState } from 'react';
import TextInput from './TextInput';
import { AppContext } from '../App';
import { isUserValid } from '../utils/utilities';

export default function SignIn({ onSignUpClick, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = context.signUser(email, password);
    context.setUserSigned(!Boolean(error));
    onError(error);
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
            onSignUpClick(false);
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
