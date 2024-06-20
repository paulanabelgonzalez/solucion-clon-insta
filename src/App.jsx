import { Carrousel } from "./components/carrousel/Carrousel";
import { Post } from "./components/post/Post";

import perfilPlaceholder from "./assets/imagen1.jpeg";

function App() {
	return (
		<>
			<Carrousel />

			<div className="contenedor_posteos" style={{ marginTop: "40px" }}>
				<Post
					seen={false}
					userName="juanita"
					profilePic={perfilPlaceholder}
					postImg="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"
					postDescripcion="Diversión extrema"
				/>
				<Post
					seen={false}
					userName="pepita"
					profilePic={perfilPlaceholder}
					postImg="https://img.europapress.es/fotoweb/fotonoticia_20190222082934_1200.jpg"
					postDescripcion="Merienda en familia"
				/>
				<Post
					seen={false}
					userName="Paulita"
					profilePic={perfilPlaceholder}
					postImg="https://i.pinimg.com/originals/2a/e4/2e/2ae42e3b5f82dd758d58f33a73444bfb.jpg"
					postDescripcion="Desayunando con mis amores"
				/>
				<Post
					seen={false}
					userName="juanita"
					profilePic={perfilPlaceholder}
					postImg="https://www.shutterstock.com/image-photo/little-girl-her-brother-walk-600nw-2340860701.jpg"
					postDescripcion="Siempre esten unidos. Amarlos"
				/>
			</div>
		</>
	);
}

export default App;
