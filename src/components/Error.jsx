import React from 'react';

export default function Error({
  type = 'generic',
  children = 'Ocorreu um erro. Por favor, tente novamente.',
}) {
  if (type == 'form')
    return (
      <p className="error__msg">
        <img
          className="alert-icon alert-icon--red"
          src="/src/assets/alert.svg"
        />
        {children}
      </p>
    );
  return (
    <div className="error__container">
      <p className="error__msg">
        <img className="alert-icon" src="/src/assets/alert.svg" />
        {children}
      </p>
    </div>
  );
}
