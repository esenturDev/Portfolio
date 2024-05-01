import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
interface ButtonPropsTypes {
	children: ReactNode;
	onClick: () => void;
}
export const Button: FC<ButtonPropsTypes> = ({ children, onClick }) => {
	return <button onClick={onClick}>{children}</button>;
};
