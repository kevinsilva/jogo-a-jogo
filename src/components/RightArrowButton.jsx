export default function RightArrowButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      &#8250;
    </button>
  );
}
