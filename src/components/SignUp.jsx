import { useState, useContext } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { AppContext } from '../App';
import { favoriteTeamOptions } from '../utils/utilities';

export default function SignUp({ onSignInClick, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');

  const context = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = context.addUser(email, password, favoriteTeam);
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
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="form__select-container">
        <SelectInput
          label="Select your team"
          value={favoriteTeam}
          onChange={setFavoriteTeam}
          options={favoriteTeamOptions}
        />
      </div>
      <div className="form__btn-container">
        <p
          className="form__option-btn"
          onClick={() => {
            onError('');
            onSignInClick(true);
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
