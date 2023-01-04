import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
	const { children, style, ...rest } = props;

	return (
		<button {...rest} className={`Button Button--${style}`}>{props.children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.string,
};

Button.defaultProps = {
	style: 'default',
};

export default Button;
