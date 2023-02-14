import { useState, useContext } from 'react';
import Popup from './Popup';
import Form from './Form';
import { AppContext } from '../App';
import '../styles/Header.scss';

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const context = useContext(AppContext);

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="src/assets/Vector.svg" alt="" />
        {/* <h1>Jogo a Jogo</h1> */}
      </div>

      {!context.isUserOnline() ? (
        <Popup
          open={isPopupOpen}
          onClose={() => {
            setPopupOpen(false);
            // document.body.style.overflow = 'auto';
          }}
          trigger={
            <button
              className="header__btn"
              onClick={() => {
                setPopupOpen(!isPopupOpen);
                // document.body.style.overflow = 'hidden';
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
          className="header__btn"
          onClick={() => {
            context.signOut();
            setPopupOpen(false);
          }}
        >
          Sign Out
        </button>
      )}
    </header>
  );
}
