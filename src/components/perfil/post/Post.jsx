import { Likes } from "../likes/Likes";
import { Perfil } from "../perfil/Perfil";

import "./post.css";

export const Post = ({
	seen,
	userName,
	profilePic,
	postImg,
	postDescripcion,
}) => {
	let contador = 10;

	return (
		<div className="post_contenedor">
			<Perfil
				type="post"
				seen={seen}
				userName={userName}
				profilePic={profilePic}
			/>
			<img src={postImg} alt="imagen posteo" className="post_img" />

			<Likes contador={contador} />

			<p className="post_descripcion">{postDescripcion}</p>
		</div>
	);
};
