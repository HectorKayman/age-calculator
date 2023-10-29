export function FormInput({
  id,
  value,
  placeholder,
  onChangeInput,
  isValid,
  errorMessage,
  children,
}) {
  return (
    <div className="input-div">
      <label className={!isValid ? 'error-label' : ''} htmlFor={id}>
        {children}
      </label>
      <input
        className={!isValid ? 'error-input' : ''}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {!isValid && <div className="error-field">{errorMessage}</div>}
    </div>
  );
}
