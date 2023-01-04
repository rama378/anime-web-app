import PropTypes from 'prop-types';
import './Card.css';
import {ReactComponent as UserRatingIcon} from "../../assets/images/icon/star-comment-alt.svg";
import { formatNumber } from '../../utils/numberUtils';

const Card = (props) => {
	const {detail, className, ...rest} = props;
	
	return (
		<div className={`Card__wrapper ${className}`}>
			<div className='Card' {...rest}>
				<div className='Card__imagewrapper'>
					<img src={detail?.images?.webp?.image_url} className='Card__image' />
				</div>

				<div className='Card__title'>{detail?.title}</div>

				<div className='Card__footer'>
					<div>
						<UserRatingIcon className='Card__ratingicon' /> {detail?.score} ({formatNumber(detail?.scored_by)})
					</div>
					<div className='Card__rating'>
						<span className='Card__ratinglabel'>Rating : </span> {detail?.rating}
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	detail: PropTypes.object.isRequired,
	className: PropTypes.string,
};

Card.defaultProps = {
	className: null,
};

export default Card;
