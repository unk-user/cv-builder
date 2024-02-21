import propTypes from 'prop-types';

export default function Button({ className = null, onClick, name }) {
  return <button className={className} onClick={onClick}>{name}</button>;
}

Button.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
  name: propTypes.string,
};
