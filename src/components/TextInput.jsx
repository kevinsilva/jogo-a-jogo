import React from 'react';

export default function TextInput({ label, value, onChange, type = 'text' }) {
  return (
    <>
      <label htmlFor="" className="form__label">
        {label}
      </label>
      <input
        className="form__input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
