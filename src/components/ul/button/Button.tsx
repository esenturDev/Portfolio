import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
interface ButtonPropsTypes {
	children: ReactNode;
	// onClick: () => void;
}
export const Button: FC<ButtonPropsTypes> = ({ children }) => {
	return <button className={scss.button}>{children}</button>;
};
