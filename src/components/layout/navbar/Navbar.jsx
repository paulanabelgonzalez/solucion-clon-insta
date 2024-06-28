import { HStack } from "@chakra-ui/react";

import { NewPostModal } from "../../newPostModal/NewPostModal";

import "./navbar.css";

export const Navbar = ({
	userName,
	setIsLoggedIn,
	profilePic,
	setPostsArray,
	postsArray,
}) => {
	const handleLogOut = () => {
		setIsLoggedIn(false);
	};
	return (
		<>
			<HStack
				as="nav"
				maxW={640}
				margin="auto"
				justifyContent="space-between"
				py="15px"
			>
				<p>Bienvenido, {userName}</p>
				<NewPostModal
					userName={userName}
					profilePic={profilePic}
					setPostsArray={setPostsArray}
					postsArray={postsArray}
				/>
				<button onClick={handleLogOut}>Cerrar Sesión</button>
			</HStack>
		</>
	);
};
