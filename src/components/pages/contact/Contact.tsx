import { useContext } from "react";
import scss from "./Contact.module.scss";
import { languageResultContext } from "../../../context/LanguageContext";
import { IconBrandGmail, IconPhoneCheck } from "@tabler/icons-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "../../ul/button/Button";
const Contact = () => {
	const { language } = useContext(languageResultContext);
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<ContactFormType>({
		mode: "onBlur",
	});
	const onSubmit: SubmitHandler<ContactFormType> = (data, event) => {
		console.log(data, "data");
		event?.preventDefault();
		event?.stopPropagation();
		reset();
	};
	return (
		<section className={scss.Contact}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content_1}>
						<h2>{language === "EN" ? "GET IN TOUCH" : "СВЯЖИТЕСЬ С НАМИ"}</h2>
						<div className={scss.my_contact}>
							<p>
								<IconBrandGmail /> nurlanuuluesentur@gmail.com
							</p>
							<p>
								<IconPhoneCheck /> +996 779 674 593
							</p>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
						<Controller
							name="name"
							control={control}
							defaultValue=""
							rules={{
								required: "Напишите ваше имя обязателен для заполнения",
								minLength: {
									value: 2,
									message:
										"Напишите ваше имя должен содержать минимум 2 символов",
								},
							}}
							render={({ field }) => (
								<div>
									<input
										className={scss.input}
										style={errors.name && { border: "1px solid red" }}
										id="name"
										placeholder={language === "EN" ? "Your name" : "Ваше имя"}
										{...field}
									/>
								</div>
							)}
						/>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							rules={{
								required: "Email обязателен для заполнения",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
									message:
										"Введите действительный email адрес с доменом @gmail.com",
								},
							}}
							render={({ field }) => (
								<div>
									<input
										className={scss.input}
										style={errors.email && { border: "1px solid red" }}
										id="email"
										placeholder={language === "EN" ? "Your email" : "Ваш email"}
										{...field}
									/>
								</div>
							)}
						/>
						<Controller
							name="contact"
							control={control}
							defaultValue=""
							rules={{
								required: "Тема для обращения обязателен для заполнения",
								minLength: {
									value: 4,
									message:
										"Тема для обращения должен содержать минимум 4 символов",
								},
							}}
							render={({ field }) => (
								<div>
									<input
										className={scss.input}
										style={errors.contact && { border: "1px solid red" }}
										id="contact"
										placeholder={
											language === "EN"
												? "Subject of inquiry"
												: "Тема для обращения"
										}
										{...field}
									/>
								</div>
							)}
						/>
						<Controller
							name="message"
							control={control}
							defaultValue=""
							rules={{
								required: "message обязателен для заполнения",
								minLength: {
									value: 6,
									message: "message должен содержать минимум 6 символов",
								},
							}}
							render={({ field }) => (
								<div className={scss.div_for_message}>
									<input
										type="text"
										id="message"
										{...field}
										style={errors.message && { border: "1px solid red" }}
										placeholder={
											language === "EN" ? "Your message" : "Ваше сообщение"
										}
									/>
								</div>
							)}
						/>
						{(errors.email && (
							<p className={scss.error_text}>{errors.email.message}</p>
						)) ||
							(errors.name && (
								<p className={scss.error_text}>{errors.name.message}</p>
							)) ||
							(errors.message && (
								<p className={scss.error_text}>{errors.message.message}</p>
							)) ||
							(errors.contact && (
								<p className={scss.error_text}>{errors.contact.message}</p>
							))}
						<Button type="submit">
							{language === "EN" ? "Submit" : "Отправит"}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
