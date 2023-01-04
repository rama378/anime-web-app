import './UserProfile.css';
import {ReactComponent as UserIcon} from "../../common/assets/images/icon/user.svg";
import Button from '../../common/components/Button/Button';

const UserProfile = () => {
	return (
		<div>
			<div className='UserProfile__user'>Name</div>
			<Button>
				<UserIcon />
			</Button>
		</div>
	);
};

export default UserProfile;
