import React from 'react';
import { Link } from "react-router-dom";
import Filter  from "./Filter";
import Favorites from './Favorites';

const Header = props => {
	const {handleInput, handleSubmit, value, handlePage, handlePageBack} = props;


	return(
		<header className="appHeader">
			<h1 className="appTitle">Buscador de Discos.</h1>
            <p> <Link to="/Favs">
            <a className="favoritesLink">Tus Favoritos</a>
            </Link></p>
			<Filter    handleInput={handleInput}
          handleSubmit={handleSubmit}
          value={value}
          handlePage={handlePage}
          handlePageBack={handlePageBack}/>
		</header>
	);
}

export default Header;