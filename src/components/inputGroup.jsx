import propTypes from 'prop-types';

export default function InputGroup({
  name,
  id,
  type,
  labelText,
  onChange,
  value,
  isRequired,
  isTextArea = false,
  className = null,
}) {
  return (
    <label htmlFor={id} className={className}>
      <span className="labelText">{labelText}</span>
      {isTextArea ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className='form-input'
          {...(isRequired ? { required: true } : {})}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className='form-input'
          {...(isRequired ? { required: true } : {})}
        />
      )}
    </label>
  );
}

InputGroup.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  labelText: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isRequired: propTypes.bool,
  isTextArea: propTypes.bool,
  className: propTypes.string,
};
