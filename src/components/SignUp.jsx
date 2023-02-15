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
          label="Palavra-passe"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="form__select-container">
        <SelectInput
          label="Seleccione o seu clube"
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
          Iniciar sessão
        </p>
        <button className="form__submit-btn" type="submit">
          Criar conta
        </button>
      </div>
    </form>
  );
}
