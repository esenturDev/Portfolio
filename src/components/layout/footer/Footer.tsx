import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import scss from "./Footer.module.scss";
const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<p>Copyright © 2021-2024. All rights are reserved</p>
					<div>
						<a href="https://github.com/esenturDev">
							<IconBrandGithub className={scss.icon} />
						</a>
						<a href="#">
							<IconBrandLinkedin className={scss.icon} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
