import { useState } from 'react';

import Popup from './Popup';
import Form from './Form';

import '../styles/Header.scss';

export default function Header({ userSigned, setSigned, team, setTeam }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <header className="header">
      <h1>Jogo a Jogo</h1>
      {!userSigned ? (
        <Popup
          open={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          trigger={
            <button className="btn" onClick={() => setPopupOpen(!isPopupOpen)}>
              Sign In
            </button>
          }
        >
          <Form setSigned={setSigned} team={team} setTeam={setTeam} />
        </Popup>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setPopupOpen(!isPopupOpen);
            setSigned(false);
          }}
        >
          Sign Out
        </button>
      )}
    </header>
  );
}
