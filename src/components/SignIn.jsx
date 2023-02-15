import { useContext, useState } from 'react';
import TextInput from './TextInput';
import { AppContext } from '../App';

export default function SignIn({ onSignUpClick, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = context.signUser(email, password);
    setPassword('');
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
          Criar conta
        </p>
        <button className="form__submit-btn" type="submit">
          Entrar
        </button>
      </div>
    </form>
  );
}
