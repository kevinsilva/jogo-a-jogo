import { useState } from 'react';
import '../styles/SignForm.scss';

export default function SignForm({ onClose, setSigned, setUsername, setTeam }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [signMode, setSignMode] = useState('login');

  function handleSubmit(e) {
    e.preventDefault();
    if (signMode == 'login') {
    }
    if (signMode == 'registration') {
    }
  }

  return (
    <div>
      <form className="sign-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="email"
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
            placeholder="email"
          />
          <label htmlFor=""></label>
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordInput}
            placeholder="password"
          />
          <label htmlFor=""></label>
        </div>
        <div>
          <p>favorite team</p>
          <select name="favorite-team" id="">
            <option value="">&nbsp;</option>
            <option value="benfica">Benfica</option>
            <option value="real-madrid">Real Madrid</option>
            <option value="barcelona">Barcelona</option>
          </select>
        </div>
        <div>
          <p
            onClick={() =>
              setSignMode(signMode == 'login' ? 'registration' : 'login')
            }
          >
            {signMode == 'login' ? 'create account' : 'sign in instead'}
          </p>
          <button type="submit">
            {signMode == 'login' ? 'sign in' : 'create account'}
          </button>
        </div>
      </form>
      <button onClick={onClose}>close</button>
    </div>
  );
}
