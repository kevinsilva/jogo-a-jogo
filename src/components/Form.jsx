import { useState, useEffect } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../styles/Form.scss';

export default function Form() {
  const [mode, setMode] = useState('sign in');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('form mounted');
    return () => {
      console.log('form unmounted');
    };
  }, []);

  return (
    <div className="form">
      {mode == 'sign in' ? (
        <SignIn
          onSignUpClick={() => setMode('sign up')}
          onError={(msg) => setError(msg)}
        />
      ) : (
        <SignUp
          onSignInClick={() => setMode('sign in')}
          onError={(msg) => setError(msg)}
        />
      )}
      <p className="form__error-msg">{error}&nbsp;</p>
    </div>
  );
}
