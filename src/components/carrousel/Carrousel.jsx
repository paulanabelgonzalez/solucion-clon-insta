import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Perfil } from "../perfil/Perfil";

import perfilPlaceholder from "../../assets/imagen1.jpeg";
import "@splidejs/react-splide/css";
import "./carrousel.css";

export const Carrousel = () => {
	return (
		<Splide
			aria-label="carrousel de historias"
			options={{
				rewind: false,
				width: 640,
				gap: "0.3rem",
				pagination: false,
				perPage: 6,
				perMove: 1,
			}}
		>
			<SplideSlide>
				<Perfil
					type="historia"
					seen={false}
					userName="pepita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={true}
					userName="nenita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={true}
					userName="monita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={false}
					userName="bebita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={true}
					userName="calita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={false}
					userName="martita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={false}
					userName="pepita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={true}
					userName="nenita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>

			<SplideSlide>
				<Perfil
					type="historia"
					seen={true}
					userName="monita"
					profilePic={perfilPlaceholder}
				/>
			</SplideSlide>
		</Splide>
	);
};
