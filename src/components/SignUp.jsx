import React, { useState, useContext } from 'react';
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
      <h5 className="form__title">Acompanha o teu clube!</h5>
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
      <div className="form__input-container">
        <SelectInput
          label="Selecciona o teu clube"
          value={favoriteTeam}
          onChange={setFavoriteTeam}
          options={favoriteTeamOptions}
        />
      </div>
      <div className="form__button-container">
        <p
          className="secondary-button"
          onClick={() => {
            onError('');
            onSignInClick(true);
          }}
        >
          Iniciar sessão
        </p>
        <button className="primary-button" type="submit">
          Criar conta
        </button>
      </div>
    </form>
  );
}
