import { useContext } from "react";
import scss from "./Welcome.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
type ContextType = {
	language: string;
	setLanguage: (value: string) => any;
};
export const Welcome = () => {
	const { language, setLanguage } = useContext(languageResultContext);
	console.log(language, "Welcome");

	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
          <div>
            
          </div>
        </div>
			</div>
		</section>
	);
};
