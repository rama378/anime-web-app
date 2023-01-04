import './Logo.css';

const Logo = () => {
	return (
		<div>
			<div className='Logo__icon'>
				<div className='Logo__icontext'>
					A<span className='Logo__icontextcenter'>W</span>A
				</div>
			</div>
			<div className='Logo__appname'>
				Anime Web App
			</div>
		</div>
	);
};

export default Logo;
