import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import { ProjectPage } from "../pages/ProjectPage";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<HomePage />
				<AboutPage />
				<ProjectPage />
				<ContactPage />
			</main>
			<Footer />
		</div>
	);
};
