function Select({ label, id, options = [], required = false }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} required={required}>
        <option value="">Selecciona una opción</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      <br />
    </>
  );
}

export default Select;
