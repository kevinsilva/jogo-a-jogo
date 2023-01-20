import { useState } from 'react';
import SignBtn from './SignBtn';
import Popup from './Popup';
import SignForm from './SignForm';

export default function Header({ userSigned, setSigned, team, setTeam }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <header>
      <h1>Logo</h1>
      <SignBtn
        user={userSigned}
        handleClick={() => setPopupOpen(!isPopupOpen)}
      />
      <Popup open={isPopupOpen}>
        <SignForm
          onClose={() => setPopupOpen(false)}
          setSigned={setSigned}
          setUserName={setUsername}
          setTeam={setTeam}
        />
      </Popup>
      <p>{username}</p>
    </header>
  );
}
