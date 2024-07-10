import { useContext } from "react";
import scss from "./About.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
const About = () => {
	const { language } = useContext(languageResultContext);
	console.log(language, "test");

	return (
		<section id="about" className={scss.about}>
			<div className="container">
				<div className={scss.content}>
					<img
						src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
						alt="photo for veb developer"
					/>
					<div className={scss.me_info_div}>
						<h1>{language === "EN" ? "ABOUT ME" : "ОБО МНЕ"}</h1>
						<h3>
							{language === "EN"
								? "Experienced Front-End Developer from Kyrgyzstan"
								: "Опытный Front-End разработчик из Кыргызстана"}
						</h3>
						<p>
							{language === "EN"
								? "As a Full-Stack developer, my skill set covers a wide range of technologies, including ORM and CRM. My primary objective is to create and maintain responsive websites with a focus on delivering impeccable user experiences and ensuring robust Back-End security. My specialization lies in developing dynamic interfaces using clean and optimized code. I am also adept at employing cutting-edge development tools and adhering to advanced methodologies. My involvement in cross-functional teams is a pivotal factor that enables the creation of exceptional web applications."
								: "Как Full-Stack разработчик, мои компетенции охватывают широкий спектр технологий, включая ORM и CRM. Моя основная цель - создание и поддержание отзывчивых веб-сайтов с акцентом на обеспечение безупречного пользовательского опыта и надежной безопасности Back-End. Моя специализация заключается в разработке динамичных интерфейсов с использованием чистого и оптимизированного кода. Я также умею применять передовые инструменты разработки и следовать передовым методологиям. Мое участие в межфункциональных командах является ключевым фактором, позволяющим создавать выдающиеся веб-приложения."}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
