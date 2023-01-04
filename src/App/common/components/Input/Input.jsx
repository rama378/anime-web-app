import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
	const { size, className, icon, ...rest } = props;

	return (
		<div className={`Input__wrapper ${className}`}>
			<input {...rest} className={`Input Input--${size}`} />
			{icon}
		</div>
	);
};

Input.propTypes = {
	size: PropTypes.string,
	className: PropTypes.string,
	icon: PropTypes.any,
};

Input.defaultProps = {
	size: 'default',
	className: null,
	icon: null,
};

export default Input;
