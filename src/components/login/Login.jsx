import { useState } from "react";

import "./login.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = ({ setIsRegister, setIsLoggedIn }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [typePassword, setTypePassword] = useState("password");

	const usuario = {
		usuario: "Paula",
		contraseña: "Pau123",
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		// formulario no controlado para nada (sin usar estados capturo los valores de los input)
		// console.log(e.target.nombre.value, e.target.contraseña.value);

		const datos = {
			usuario: userName,
			contraseña: password,
		};

		if (
			datos.usuario === usuario.usuario &&
			datos.contraseña === usuario.contraseña
		) {
			setIsLoggedIn(true);
		} else {
			alert("Los datos ingresados no coinciden con ningún usuario registrado.");
		}
	};

	// const handleCheckInput = (e) => {
	// 	setUserName(e.target.value);
	// 	if (userName === "reset") {
	// 		setUserName("");
	// 	}
	// };

	return (
		<div>
			<h2>Iniciar Sesión</h2>
			<form onSubmit={handleSubmitForm}>
				<div className="input_container">
					<label htmlFor="nombre">Nombre de usuario</label>
					<input
						type="text"
						placeholder="Ej: Maria Antonieta"
						id="nombre"
						name="nombre"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						// ej:  input controlado
						// onChange={handleCheckInput}
					/>
					{/* <p>nombre:{userName}</p> */}
				</div>

				<div className="input_container">
					<label htmlFor="contraseña">Contraseña</label>
					<input
						type={typePassword}
						id="contraseña"
						name="contraseña"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							<FaEyeSlash />;
						}}
					/>
					<span className="view_password">
						{typePassword === "password" ? (
							<FaEye onClick={() => setTypePassword("")} />
						) : (
							<FaEyeSlash onClick={() => setTypePassword("password")} />
						)}
					</span>
				</div>

				<input type="submit" value="Iniciar Sesión" />
			</form>
			<p className="register_legend">
				Aun no tiene cuenta?{" "}
				<span className="register_btn" onClick={() => setIsRegister(false)}>
					Regístrate
				</span>
			</p>
		</div>
	);
};
