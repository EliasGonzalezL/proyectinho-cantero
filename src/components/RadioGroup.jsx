function RadioGroup({ label, name, options = [] }) {
  return (
    <>
      <label>{label}</label><br />
      {options.map((opt, index) => (
        <span key={index}>
          <input
            type="radio"
            id={opt}
            name={name}
            value={opt}
            defaultChecked={index === 0}
          />
          <label htmlFor={opt}>{opt}</label>
        </span>
      ))}
      <br />
    </>
  );
}

export default RadioGroup;
