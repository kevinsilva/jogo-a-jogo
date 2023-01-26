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
      <h1>Jogo a Jogo</h1>
      {!context.isUserSigned ? (
        <Popup
          open={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          trigger={
            <button className="btn" onClick={() => setPopupOpen(!isPopupOpen)}>
              Sign In
            </button>
          }
        >
          <Form />
        </Popup>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setPopupOpen(!isPopupOpen);
            // setSigned(false);
            context.setUserSigned(false);
          }}
        >
          Sign Out
        </button>
      )}
    </header>
  );
}
