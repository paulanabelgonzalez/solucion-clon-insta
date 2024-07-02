import { Likes } from "../likes/Likes";
import { Perfil } from "../perfil/Perfil";

import "./post.css";

export const Post = ({
	seen,
	userName,
	profilePic,
	postImg,
	postDescription,
}) => {
	return (
		<div className="post_contenedor">
			<Perfil
				type="post"
				seen={seen}
				userName={userName}
				profilePic={profilePic}
			/>
			<img src={postImg} alt="imagen posteo" className="post_img" />

			<Likes />

			<p className="post_descripcion">{postDescription}</p>
		</div>
	);
};
