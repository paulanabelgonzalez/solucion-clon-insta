import { HStack } from "@chakra-ui/react";

import { NewPostModal } from "../../newPostModal/NewPostModal";

import "./navbar.css";

export const Navbar = ({ userName, setIsLoggedIn }) => {
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
				<NewPostModal />
				<button onClick={handleLogOut}>Cerrar Sesión</button>
			</HStack>
		</>
	);
};
