import { useState } from "react";

import App from "../../../App";
import { Login } from "../../login/Login";
import { Register } from "../../login/Register";

import "./loginWrapper.css";

export const LoginWrapper = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState("");
	const [isRegister, setIsRegister] = useState(true);

	const handleLogIn = () => {
		setIsLoggedIn(true);
		setUserName("pepito");
	};

	if (isLoggedIn) {
		return <App userName={userName} setIsLoggedIn={setIsLoggedIn} />;
	} else {
		return (
			<>
				{isRegister ? (
					<Login setIsRegister={setIsRegister} setIsLoggedIn={setIsLoggedIn} />
				) : (
					<Register
						setIsRegister={setIsRegister}
						setIsLoggedIn={setIsLoggedIn}
					/>
				)}
			</>
		);
	}
};
