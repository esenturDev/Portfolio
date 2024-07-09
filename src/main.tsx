// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.scss";

// ReactDOM.createRoot(document.getElementById("root")!).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import messages from "./messages"; // Файл с вашими переводами
import "./index.scss";
import LanguageContext from "./context/LanguageContext";
const locale = navigator.language.split("-")[0] || "en";

ReactDOM.render(
	<IntlProvider locale={locale} messages={messages[locale]}>
		<LanguageContext>
			<App />
		</LanguageContext>
	</IntlProvider>,
	document.getElementById("root")
);
