import style from "./Landing.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

	return (
		<div className={style.container}>
			<div className={style.i1}>
				<p className={style.intro}>
					Nuestra SPA de React te permite explorar diferentes razas de perros de
					la API y crear tu propio perro personalizado a través de un
					formulario. También puedes ordenar los perros por razas y pesos. La
					página de inicio muestra una lista de razas de perros con sus
					características destacadas, mientras que la página de resultados
					muestra la imagen y las características detalladas del perro que has
					creado. Es fácil de usar y está diseñada para que encuentres el perro
					perfecto para ti. ¡Explora nuestro sitio web y crea tu perro
					personalizado hoy mismo!
				</p>
				<Link to="/dogs" className={style.link}>
						Adelante
				</Link>
			</div>
		</div>
	);
};

export default Login;
