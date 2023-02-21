import React from 'react';
export default function LeftArrowButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      &#8249;
    </button>
  );
}
