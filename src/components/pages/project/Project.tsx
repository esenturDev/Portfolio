import scss from "./Project.module.scss";
interface projectsTypes {
	title: string;
	link: string;
	codeLink: string;
	description: Array<string>;
	stack: Array<string>;
	image: string;
}
export const Project = () => {
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
			image: "",
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
			image: "",
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
			image: "",
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
			image: "",
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
					
				</div>
			</div>
		</section>
	);
};
