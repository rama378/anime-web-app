import './HomeLayout.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"

const HomeLayout = (props) => {
	return (
		<div className="HomeLayout">
			<Header />

			<div>
					{props.children}
			</div>

			<Footer />
		</div>
	);
};

export default HomeLayout;
