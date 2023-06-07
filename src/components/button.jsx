import PropTypes from 'prop-types';
import './button.css';
export function Button({ text, onHandleClick, type }) {
  return (
    <button type={type} className="button" onClick={onHandleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func,
  type: PropTypes.string,
};
