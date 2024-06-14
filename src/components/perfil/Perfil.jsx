import "./perfil.css";

export const Perfil = ({ type, seen, userName, profilePic }) => {
	return (
		<>
			<div className={`perfil_contenedor ${type}`}>
				<div
					className="perfil_img__contenedor"
					style={{
						borderColor: seen ? "grey" : "violet",
						borderWidth: "4px",
						borderStyle: "solid",
					}}
				>
					<img src={profilePic} alt="" className="perfil_img" />
				</div>
				<p className="perfil_nombre__usuario">{userName}</p>
			</div>
		</>
	);
};
