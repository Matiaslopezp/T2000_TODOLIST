import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="container"> 
		<h1>Hola</h1>
		<ul>
			<li>Hacer ejercicio</li>
			<li>Leer</li>
			<li>Ir de compras al supermercado</li>
			<li>Caminar por el parque</li>	
			<li>Jugar con mi mascota</li>	
		</ul>
		
		</div>

	);
};

export default Home;
