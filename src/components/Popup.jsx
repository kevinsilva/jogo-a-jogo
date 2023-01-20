import React from 'react';
import '../styles/Popup.scss';

export default function Popup({ trigger, open, onClose, children }) {
  return (
    <React.Fragment>
      <div className={`popup popup--${open ? 'visible' : 'hidden'}`}>
        <div>{children}</div>
        <button className="popup__btn-close" onClick={onClose}>
          X
        </button>
      </div>
      {trigger}
    </React.Fragment>
  );
}
