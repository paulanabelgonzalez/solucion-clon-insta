import { useState } from "react";

import "./login.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Register = ({ setIsRegister, setIsLoggedIn }) => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [typePassword, setTypePassword] = useState("password");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [isValid, setIsValid] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();

		if (password === repeatPassword) {
			setIsValid(true);
		} else {
			alert("Las contraseñas no coinciden");
		}

		if (userName !== "" && email !== "" && password !== "") {
			setIsValid(true);
		} else {
			alert("Por favor complete todos los campos");
		}

		if (
			password === repeatPassword &&
			userName !== "" &&
			email !== "" &&
			password !== ""
		) {
			alert("Se ha registrado exitosamente");
			setIsLoggedIn(true);
			setIsRegister(true);
		}
	};

	return (
		<div>
			<h2>Registrate</h2>
			<form onSubmit={handleRegister}>
				<div className="input_container">
					<label htmlFor="nombre">Nombre de usuario</label>
					<input
						type="text"
						placeholder="Ej: Maria Antonieta"
						id="nombre"
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>

				<div className="input_container">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="Ej: MariaAntonieta@gmail.com"
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>

				<div className="input_container">
					<label htmlFor="contraseña">Contraseña</label>
					<input
						type={typePassword}
						id="contraseña"
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

				<div className="input_container">
					<label htmlFor="repetir_contraseña">Repetir Contraseña</label>
					<input
						type={typePassword}
						id="repetir_contraseña"
						value={repeatPassword}
						onChange={(e) => {
							setRepeatPassword(e.target.value);
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
				Ya tiene cuenta?{" "}
				<span className="register_btn" onClick={() => setIsRegister(true)}>
					Iniciar Sesión
				</span>
			</p>
		</div>
	);
};
