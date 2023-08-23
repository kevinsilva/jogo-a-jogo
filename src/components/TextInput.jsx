import React from 'react';

export default function TextInput({ label, value, onChange, type = 'text' }) {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <>
      <label htmlFor={inputId} className="form__label">
        {label}
      </label>
      <input
        className="form__input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name="formInput"
        id={inputId}
      />
    </>
  );
}
