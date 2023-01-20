import '../styles/Popup.scss';

export default function Popup({ open, children }) {
  if (open)
    return (
      <div>
        <div className="popup">{children}</div>
      </div>
    );
}
