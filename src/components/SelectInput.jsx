export default function SelectInput({ label, value, onChange, options }) {
  return (
    <>
      <label htmlFor="" className="form__label">
        {label}
      </label>
      <select
        className="form__input"
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
