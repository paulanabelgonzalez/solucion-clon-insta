import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";

import { LoginWrapper } from "./components/layout/loginWrapper/LoginWrapper";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<LoginWrapper />
		</ChakraProvider>
	</React.StrictMode>
);
