import React, { createContext, ReactNode, useState } from "react";

export  const languageResultContext = createContext(
	"EN" || localStorage.getItem("language")!
);
interface LanguageContextTypes {
	children: ReactNode;
}
const LanguageContext = ({ children }: LanguageContextTypes) => {
	const [language, setLanguage] = useState(
		localStorage.getItem("language")! || "EN"
	);
	const valueObject = {
		language,
		setLanguage,
	};
	return (
		<languageResultContext.Provider value={valueObject}>
			{children}
		</languageResultContext.Provider>
	);
};

export default LanguageContext;
