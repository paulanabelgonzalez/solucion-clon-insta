import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import {
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { CgAddR } from "react-icons/cg";

export const NewPostModal = () => {
	const [input, setInput] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleInputChange = (e) => setInput(e.target.value);

	const isError = input === "";
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
						<FormControl isInvalid={isError}>
							<FormLabel>Título</FormLabel>
							<Input type="text" onChange={handleInputChange} />
							<FormErrorMessage>El título es obligatorio</FormErrorMessage>
						</FormControl>
					</ModalBody>

					<ModalFooter>
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
						>
							Subir Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
