import { APP_NAME } from '../../common/constants/constant';
import { getCurrentYear } from '../../common/utils/dateUtils';
import './Footer.css';

const Footer = () => {
	return (
		<div className='Footer'>
			@ {getCurrentYear()} {APP_NAME}
		</div>
	);
};

export default Footer;
