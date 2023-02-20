import { useState, useContext } from 'react';
import Popup from './Popup';
import Form from './Form';
import { AppContext } from '../App';
import { preventScroll, restoreScroll } from '../utils/utilities';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const context = useContext(AppContext);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo-main"
          src="src/assets/logo.svg"
          alt="logo"
          onClick={() => {
            setPopupOpen(false);
            restoreScroll();
          }}
        />
      </div>

      {!context.isUserOnline() ? (
        <Popup
          open={isPopupOpen}
          onClose={() => {
            setPopupOpen(false);
            restoreScroll();
          }}
          trigger={
            <button
              className="primary-button"
              onClick={() => {
                setPopupOpen(!isPopupOpen);
                preventScroll();
              }}
            >
              Entrar
            </button>
          }
        >
          <Form />
        </Popup>
      ) : (
        <button
          className="primary-button"
          onClick={() => {
            context.signOut();
            setPopupOpen(false);
          }}
        >
          Terminar sessão
        </button>
      )}
    </header>
  );
}
