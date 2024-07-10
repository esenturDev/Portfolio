import { useContext } from "react";
import scss from "./Project.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
interface projectsTypes {
	title: string;
	link: string;
	codeLink: string;
	description: Array<string>;
	stack: Array<string>;
	image: string;
}
export const Project = () => {
	const { language } = useContext(languageResultContext);
	const projectsCards: projectsTypes[] = [
		{
			title: "gadgetarium",
			link: "https://gadgetarium-js12.vercel.app/",
			codeLink: "https://github.com/peaksoft-school/gadgetarium-js12",
			stack: [
				"TypeScript",
				"RTQ Query",
				"Ant Design",
				"React-hook-form",
				"Scss",
			],
			image:
				"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8",
			description: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus",
				"tempora incidunt quasi officia atque iste. Ducimus repellat similique, inventore provident saepe ipsum",
				"nulla nam sed itaque odio	illum id exercitationem autem et hic molestias explicabo recusandae non",
				"aperiam repudiandae voluptas distinctio voluptates optio! Exercitationem?",
			],
		},
		{
			title: "gadgetarium",
			link: "https://gadgetarium-js12.vercel.app/",
			codeLink: "https://github.com/peaksoft-school/gadgetarium-js12",
			stack: [
				"TypeScript",
				"RTQ Query",
				"Ant Design",
				"React-hook-form",
				"Scss",
			],
			image:
				"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8",
			description: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus",
				"tempora incidunt quasi officia atque iste. Ducimus repellat similique, inventore provident saepe ipsum",
				"nulla nam sed itaque odio	illum id exercitationem autem et hic molestias explicabo recusandae non",
				"aperiam repudiandae voluptas distinctio voluptates optio! Exercitationem?",
			],
		},
		{
			title: "gadgetarium",
			link: "https://gadgetarium-js12.vercel.app/",
			codeLink: "https://github.com/peaksoft-school/gadgetarium-js12",
			stack: [
				"TypeScript",
				"RTQ Query",
				"Ant Design",
				"React-hook-form",
				"Scss",
			],
			image:
				"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8",
			description: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus",
				"tempora incidunt quasi officia atque iste. Ducimus repellat similique, inventore provident saepe ipsum",
				"nulla nam sed itaque odio	illum id exercitationem autem et hic molestias explicabo recusandae non",
				"aperiam repudiandae voluptas distinctio voluptates optio! Exercitationem?",
			],
		},
		{
			title: "gadgetarium",
			link: "https://gadgetarium-js12.vercel.app/",
			codeLink: "https://github.com/peaksoft-school/gadgetarium-js12",
			stack: [
				"TypeScript",
				"RTQ Query",
				"Ant Design",
				"React-hook-form",
				"Scss",
			],
			image:
				"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8",
			description: [
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus",
				"tempora incidunt quasi officia atque iste. Ducimus repellat similique, inventore provident saepe ipsum",
				"nulla nam sed itaque odio	illum id exercitationem autem et hic molestias explicabo recusandae non",
				"aperiam repudiandae voluptas distinctio voluptates optio! Exercitationem?",
			],
		},
	];
	return (
		<section className={scss.Project}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.main_text_for_projects_div}>
						<h1>{language === "EN" ? "PROJECTS" : "ПРОЕКТЫ"}</h1>
						<p>
							{language === "EN"
								? "Each project is a unique piece of development"
								: "Каждый проект - это уникальная разработка"}
						</p>
					</div>
					<div className={scss.container_projects_cards}>
						{projectsCards.map((project, index) => (
							<div
								className={
									index % 2 === 0
										? `${scss.card} ${scss.card_active}`
										: `${scss.card}`
								}
								key={index + 1}>
								<div className={scss.texts_div_card}>
									<h2>{project.title}</h2>
									<div className={scss.description}>
										{project.description.map((text, index) => (
											<p key={index + 1}>{text}</p>
										))}
									</div>
								</div>
								<img src={project.image} alt={project.title} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
