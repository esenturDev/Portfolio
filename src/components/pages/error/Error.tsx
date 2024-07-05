import scss from "./Error.module.scss";
const Error = () => {
	return (
		<section className={scss.ErrorPage}>
			<div className="container">
				<div className={scss.content}>Error</div>
			</div>
		</section>
	);
};

export default Error;
