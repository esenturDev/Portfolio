import React, { FC } from "react";
import scss from "./Input.module.scss";

type InputPropsTypes = {
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => string;
	onClick?: () => void;
};
const Input: FC<InputPropsTypes> = ({ onChange, onClick, value, type }) => {
	return (
		<input
			type={type}
			value={value}
			onClick={onClick}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default Input;
