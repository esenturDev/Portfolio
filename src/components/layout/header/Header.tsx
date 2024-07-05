import React, { useState } from "react";
import scss from "./Header.module.scss";
interface linksTypes {
  to: string;
  href: string;
  
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
            <h1>esenturDev</h1>
            <nav>

            </nav>
          </div>
				</div>
			</div>
		</header>
	);
};
