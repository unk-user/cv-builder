/* eslint-disable react/prop-types */
export default function InputGroup({
  name,
  id,
  type,
  labelText,
  onChange,
  value,
  isRequired,
  isTextArea = false
}) {

  return(
    <label htmlFor={id}>
      <span className="labelText">{labelText}</span>
      {isTextArea ? (
        <textarea name={name} id={id} value={value} onChange={onChange} {...(isRequired ? {required: true} : {})}></textarea>
      ) : (
        <input name={name} type={type} id={id} value={value} onChange={onChange} {...(isRequired ? {required: true} : {})}/>
      )}
    </label>
  )
}