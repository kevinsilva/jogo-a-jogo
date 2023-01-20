export default function ({ user, handleClick }) {
  if (!user) return <button onClick={handleClick}>Entrar</button>;
  else return null;
}
