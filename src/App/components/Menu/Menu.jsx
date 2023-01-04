import { useNavigate } from 'react-router-dom';
import Button from '../../common/components/Button/Button';
import { PAGE } from '../../common/constants/constant';
import './Menu.css';

const Menu = () => {
	const navigate = useNavigate();
	
	const openLogInPage = () => {
		navigate(PAGE.LOGIN);
	};

	const openSignUpPage = () => {
		navigate(PAGE.SIGNUP);
	};

	return (
		<div>
			<Button onClick={openSignUpPage} style="clear">Sign Up</Button>
			<Button onClick={openLogInPage}>Log In</Button>
		</div>
	);
};

export default Menu;
