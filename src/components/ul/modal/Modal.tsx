import { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

interface ModalPropsTypes {
	children: ReactNode;
}
const Modal: FC<ModalPropsTypes> = ({ children }) => {
	return (
		<div className={scss.modal_container}>
			<div className={scss.modal_content}>{children}</div>
		</div>
	);
};

export default Modal;
