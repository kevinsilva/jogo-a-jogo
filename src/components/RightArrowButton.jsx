import React from 'react';

export default function RightArrowButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      &#8250;
    </button>
  );
}
