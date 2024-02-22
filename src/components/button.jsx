import propTypes from 'prop-types';

export default function Button({ className = null, onClick, name, id = null }) {
  return <button className={className} id={id} onClick={onClick}>{name}</button>;
}

Button.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
  name: propTypes.string,
  id: propTypes.string
};
