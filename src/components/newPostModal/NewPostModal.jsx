import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import {
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	HStack,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Textarea,
	VStack,
} from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import { posts } from "../../posts";

import { CgAddR } from "react-icons/cg";

export const NewPostModal = ({
	userName,
	profilePic,
	setPostsArray,
	postsArray,
}) => {
	const [input, setInput] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleInputChange = (e) => setInput(e.target.value);

	const isError = input === "";

	const handleSubmitNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: uuidv4(),
			seen: false,
			userName: userName,
			profilePic: profilePic,
			postImg: e.target.imgPost.value,
			postDescripcion: e.target.descripcionPost.value,
		};
		const upDatedPosts = [...postsArray, newPost];

		console.log(upDatedPosts);
		setPostsArray(upDatedPosts);
		onClose();
	};

	return (
		<>
			<Button
				variant="solid"
				bg="#efa4b1"
				color="white"
				_hover={{ bg: "#d2009a" }}
				py="15px"
				leftIcon={<CgAddR style={{ fontSize: "24px" }} />}
				onClick={onOpen}
			>
				Nuevo Post
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Nuevo Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack
							as="form"
							className="new_post__form"
							onSubmit={handleSubmitNewPost}
						>
							<FormControl isInvalid={isError}>
								<FormLabel>Imagen</FormLabel>
								<Input
									type="text"
									onChange={handleInputChange}
									name="imgPost"
								/>
								<FormErrorMessage>La imagen es obligatoria</FormErrorMessage>
							</FormControl>
							<FormControl mt="20px">
								<FormLabel>Descripción</FormLabel>
								<Textarea name="descripcionPost" />
							</FormControl>
							<HStack mb="20px" mt="10px">
								<Button
									colorScheme="blue"
									mr={3}
									onClick={onClose}
									variant="outline"
									borderColor="#efa4b1"
									color="#efa4b1"
									_hover={{ borderColor: "#d2009a", color: "#d2009a" }}
								>
									Cancelar
								</Button>
								<Button
									variant="solid"
									bg="#efa4b1"
									color="white"
									_hover={{ bg: "#d2009a" }}
									type="submit"
								>
									Subir Post
								</Button>
							</HStack>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
