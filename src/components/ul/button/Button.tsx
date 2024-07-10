import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
interface ButtonPropsTypes {
	children: ReactNode;
	onClick?: () => void;
	type?: string;
}
export const Button: FC<ButtonPropsTypes> = ({ children, onClick, type }) => {
	return <button type={type! || 'submit'} onClick={onClick} className={scss.button}>{children}</button>;
};
