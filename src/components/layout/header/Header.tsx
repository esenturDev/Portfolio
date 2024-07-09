/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import scss from "./Header.module.scss";
import { FormattedMessage } from "react-intl";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../../ul/button/Button";

interface LinksTypes {
	to: string;
	label: any;
	spy: boolean;
	smooth: boolean;
	offset: number;
	duration: number;
}

export const Header = () => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);

	React.useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 10) {
				setHeaderScroll(true);
			} else {
				setHeaderScroll(false);
			}
		};

		changeBackground();
		window.addEventListener("scroll", changeBackground);

		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	const offsetScroll = -30;
	const durationScroll = 500;

	const PagesCard: LinksTypes[] = [
		{
			label: <FormattedMessage id="page.header.home" />,
			to: "/",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll,
		},
		{
			label: <FormattedMessage id="page.header.about" />,
			to: "about",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll,
		},
		{
			label: <FormattedMessage id="page.header.project" />,
			to: "project",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll,
		},
		{
			label: <FormattedMessage id="page.header.contact" />,
			to: "contact",
			spy: true,
			smooth: true,
			offset: offsetScroll,
			duration: durationScroll,
		},
	];

	const handleScroll = () => {
		setTimeout(() => {
			window.scrollBy(0, 1);
		}, 570);
	};

	const result = "http://result";

	return (
		<header className={scss.Header}>
			<div
				className={
					headerScroll
						? `${scss.headerScroll} ${scss.active}`
						: `${scss.headerScroll}`
				}>
				<div className="container">
					<div className={scss.content}>
						<h1>
							esentur<span>Dev</span>
						</h1>
						<nav>
							{PagesCard.map((link, index) => (
								<ScrollLink
									key={index + 1}
									to={link.to}
									spy={link.spy}
									smooth={link.smooth}
									offset={link.offset}
									duration={link.duration}
									onClick={handleScroll}
									className={scss.link}
									activeClass={scss.active}>
									{link.label}
								</ScrollLink>
							))}
							<Button>
								<a
									style={{
										color: "rgb(0, 0, 231)",
										fontSize: "13px",
										fontWeight: 400,
									}}
									href={result}>
									Резюме
								</a>
							</Button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
