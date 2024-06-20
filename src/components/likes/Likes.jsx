import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./likes.css";

export const Likes = () => {
	const [liked, setLiked] = useState(false);
	const [cantidadLikes, setCantidadLikes] = useState(1);

	const handleToggleLike = () => {
		if (liked) {
			setLiked(false);
			setCantidadLikes(cantidadLikes - 1);
		} else {
			setLiked(true);
			setCantidadLikes(cantidadLikes + 1);
		}

		// tambien se puede hacer: setLiked(!prev )
		// que seria como: setLiked(estadoPrevio => !estadoPrevio)
	};

	return (
		<div className="likes_contenedor">
			{liked ? (
				<FaHeart
					color="red"
					size="2em"
					style={{ cursor: "pointer" }}
					onClick={handleToggleLike}
					// tambien se puede hacer onClick={setLiked(false)}
				/>
			) : (
				<FaRegHeart
					size="2em"
					style={{ cursor: "pointer" }}
					onClick={handleToggleLike}
					// onClick={setLiked(true)} en este caso que tiene una condicion.
				/>
			)}

			{cantidadLikes > 0 && (
				<p className="likes_contador">
					<span className="likes_cantidad">{cantidadLikes}</span>
					{cantidadLikes === 1 ? " like" : " likes"}
				</p>
			)}
		</div>
	);
};
