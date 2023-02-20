import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Error from './Error';

export default function Form() {
  const [mode, setMode] = useState('sign in');
  const [error, setError] = useState('');

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
      {error && <Error type="form" children={error} />}
    </div>
  );
}
