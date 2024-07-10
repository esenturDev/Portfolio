import { useContext, useState } from "react";
import scss from "./Welcome.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import mePhoto from "../../../assets/photos/me photo.jpg";
import { TechStack } from "../../../utils";
type ContextType = {
	language: string;
	setLanguage: (value: string) => any;
};
export const Welcome = () => {
	const [techStackName, setTechStackName] = useState<number | null>(null);
	const { language } = useContext(languageResultContext);
	console.log(language, "Welcome");
	const ENMeText = "Hi, I m Esentur Ismailov";
	const RuMeText = "Привет, я Эсентур Исмаилов";
	return (
		<section id="/" className={scss.Welcome}>
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
								<a href="https://github.com/esenturDev">
									<IconBrandGithub className={scss.icon} />
								</a>
								<a href="#">
									<IconBrandLinkedin className={scss.icon} />
								</a>
							</div>
						</div>
						<img src={mePhoto} alt="" />
					</div>
					<div className={scss.Tech_Stack_div}>
						<h3>{language === "EN" ? "Tech Stack |" : "Технический стек |"}</h3>
						<div className={scss.cards}>
							{TechStack.map((el, index) => (
								<>
									<div
										onMouseEnter={() => setTechStackName(index + 1)}
										onMouseLeave={() => setTechStackName(null)}
										className={scss.card}
										key={index + 1}>
										<img src={el.logo} alt={el.name} />
										{techStackName === index + 1 && (
											<p className={scss.TechStackText}>{el.name}</p>
										)}
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
