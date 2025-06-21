function Input({ label, id, type = "text", required = false, ...rest }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={required} {...rest} />
      <br />
    </>
  );
}

export default Input;
