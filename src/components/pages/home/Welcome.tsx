import { useContext } from "react";
import scss from "./Welcome.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
type ContextType = {
	language: string;
	setLanguage: (value: string) => any;
};
export const Welcome = () => {
	const { language, setLanguage } = useContext(languageResultContext);
	console.log(language, "Welcome");
	const ENMeText = "Hi, I m Esentur Ismailov";
	const RuMeText = "Привет, я Эсентур Исмаилов";
	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<div className={scss.me_content}>
							<div className={scss.main_text_div}>
								<h1>{language === "EN" ? ENMeText : RuMeText}</h1>
								<h2>
									{language === "EN"
										? "I AM A Front-End Developer"
										: "Я Front-End Разработчик"}
								</h2>
							</div>
							<p>
								{language === "EN"
									? "As an experienced Full-Stack developer, I am dedicated to turning ideas into innovative web applications. Explore my recent projects and articles showcasing my skills in both Back-End and Front-End development"
									: "Как опытный Full-Stack разработчик, я стремлюсь превращать идеи в инновационные веб-приложения. Изучите мои недавние проекты и статьи, демонстрирующие мои навыки в области Back-End и Front-End-разработки."}
							</p>
							<div className={scss.icons_div}> 
								<IconBrandGithub width={'45px'} height={'45px'}/>
								<IconBrandLinkedin />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
