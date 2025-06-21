function Checkbox({ label, id, required = false }) {
  return (
    <>
      <input type="checkbox" id={id} name={id} required={required} />
      <label htmlFor={id}>{label}</label><br />
    </>
  );
}

export default Checkbox;
