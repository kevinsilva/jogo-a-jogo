import { useState, useEffect } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../styles/Form.scss';

export default function Form() {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('form mounted');
    return () => {
      console.log('form unmounted');
    };
  }, []);

  return (
    <div className="form">
      {signIn ? (
        <SignIn
          onSignIn={(boolean) => setSignIn(boolean)}
          onError={(msg) => setError(msg)}
        />
      ) : (
        <SignUp
          onSignIn={(boolean) => setSignIn(boolean)}
          onError={(msg) => setError(msg)}
        />
      )}
      <p className="form__error-msg">{error}&nbsp;</p>
    </div>
  );
}
