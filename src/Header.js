import React from 'react';
import { Link } from "react-router-dom";
import Favorites from './Favorites';

const Header = props => {
	

	return(
		<header className="appHeader">
			<h1 className="appTitle">Buscador de Discos.</h1>
            <p> <Link to="/Favs">
            Tus Favoritos
		
            </Link></p>
		</header>
	);
}

export default Header;