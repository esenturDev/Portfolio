import HomePage from "../pages/HomePage";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<HomePage />
			</main>
			<Footer />
		</div>
	);
};
