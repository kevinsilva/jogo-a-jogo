import '../styles/Popup.scss';

export default function Popup({ trigger, open, onClose, children }) {
  return (
    <>
      <div className={`popup popup--${open ? 'visible' : 'hidden'}`}>
        <div>{children}</div>
        <button className="popup__btn-close" onClick={onClose}>
          &nbsp;
        </button>
      </div>
      {trigger}
    </>
  );
}
