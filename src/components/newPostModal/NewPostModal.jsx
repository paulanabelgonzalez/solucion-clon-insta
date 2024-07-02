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
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { validacionTexto } from "../../utils/Validaciones";

// import { posts } from "../../posts";

import { CgAddR } from "react-icons/cg";

export const NewPostModal = ({
	userName,
	profilePic,
	setPostsArray,
	postsArray,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ criteriaMode: "all" });
	// console.log(errors);
	const onSubmit = (data) => {
		console.log("objeto que crea la libreria:", data);
		console.log("submit");

		const newPost = {
			id: uuidv4(),
			seen: false,
			userName: userName,
			profilePic: profilePic,
			postImg: data.postImg,
			postDescription: data.postDescription,
		};
		const upDatedPosts = [...postsArray, newPost]; //agregando el nuevo posteo al array de posteos.
		console.log(upDatedPosts); //asegurarno que se nods este actualizando
		setPostsArray(upDatedPosts); //para actualizar  la vista del array por medio deun estado (osea que se vaya imprimiendo el agregado)
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
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormControl isInvalid={errors.postImg ? true : false}>
								<FormLabel>Imagen</FormLabel>
								<Input
									type="text"
									name="postImg"
									{...register("postImg", {
										required: "La imagen es obligatoria.",
										minLength: {
											value: 3,
											message: "La url es damsiado corta.",
											// value: 10,
										},
										maxLength: {
											value: 10,
											message: "La url es demasiado extensa.",
											// value: 10000,
										},
										pattern: {
											value: /\d+/,
											message: "Este input acepta solo números.",
											// Para que funcione correctamente
											// value: /^(ftp|http|https):\/\/[^ "]+$/,
											// message: "Este input acepta solo direcciones url.",
										},
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="postImg" //este nombre es el que usamos en el register.
									render={({ messages }) => {
										console.log(messages);
										return (
											messages &&
											Object.entries(messages).map(([type, message]) => (
												<FormErrorMessage key={type}>
													{message}
												</FormErrorMessage>
											))
										);
									}}
								/>
							</FormControl>
							<FormControl
								mt="20px"
								isInvalid={errors.postDescription ? true : false} // si existe la propiedad de ese objeto se renderiza sino no.
							>
								<FormLabel>Descripción</FormLabel>
								<Textarea
									name="postDescription"
									{...register("postDescription", { required: true })} //validacionTexto)} para hacerlo con hook form y traernos una constante.
								/>
								<FormErrorMessage>
									La descripción es obligatoria.
								</FormErrorMessage>
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
