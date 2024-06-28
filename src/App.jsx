import { useState } from "react";

import { Carrousel } from "./components/carrousel/Carrousel";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Post } from "./components/post/Post";
// import { SlideInfinito } from "./components/slideInfinito/SlideInfinito";

import { posts } from "./posts";

import perfilPlaceholder from "./assets/imagen1.jpeg";

const usuario = {
	nombre: "Paula",
	profilePic: perfilPlaceholder,
};

function App({ setIsLoggedIn }) {
	const [postsArray, setPostsArray] = useState(posts);

	return (
		<>
			<Navbar
				userName={usuario.nombre}
				setIsLoggedIn={setIsLoggedIn}
				profilePic={usuario.profilePic}
				setPostsArray={setPostsArray}
				postsArray={postsArray}
			/>

			<Carrousel />

			{/* <SlideInfinito /> */}

			<div className="contenedor_posteos" style={{ marginTop: "40px" }}>
				{postsArray.map(
					(
						{ userName, seen, profilePic, postImg, postDescripcion, id },
						index
					) => {
						return (
							<Post
								userName={userName}
								seen={seen}
								profilePic={profilePic}
								postImg={postImg}
								postDescripcion={postDescripcion}
								key={`${id}-${index}`}
							/>
						);
					}
				)}
			</div>
		</>
	);
}

export default App;
