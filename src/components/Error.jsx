export default function Error({ type = 'generic', children }) {
  if (type == 'form')
    return (
      <p className="error__msg error__msg--red">
        <img
          className="alert-icon alert-icon--red"
          src="src/assets/alert.svg"
        />
        {children}
      </p>
    );
  return (
    <div className="error__container">
      <p className="error__msg">
        <img className="alert-icon" src="src/assets/alert.svg" />
        Ocorreu um erro. Por favor, tente novamente.
      </p>
    </div>
  );
}
