import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./likes.css";

export const Likes = ({ liked, contador }) => {
	return (
		<div className="likes_contenedor">
			{liked ? (
				<FaHeart color="red" size="2em" style={{ cursor: "pointer" }} />
			) : (
				<FaRegHeart size="2em" style={{ cursor: "pointer" }} />
			)}

			{contador > 0 && (
				<p className="likes_contador">
					<span className="likes_cantidad">{contador}</span>
					{contador === 1 ? " like" : " likes"}
				</p>
			)}
		</div>
	);
};
