import './Header.css';
import Logo from '../../common/components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import UserProfile from '../../components/UserProfile/UserProfile';

const Header = () => {
	return (
		<div className='Header'>
			<div className='Header__logo'>
				<Logo />
			</div>
			
			<Menu />
			{/* <UserProfile /> */}
		</div>
	);
};

export default Header;
