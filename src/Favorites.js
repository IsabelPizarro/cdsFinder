import React from "react";
 import { Link } from "react-router-dom";
 import Loader from './Loader';
import "./App.css";


const Favorites = props => {

  const {favorites}=props;
  console.log(favorites);

    return (
     
  
      <div className="favs"  >
          <h2>Favoritos</h2>
          <ul>
          {(favorites==="") ? <p>No hay favoritos aún</p>  :
          favorites
					.map((fav) => {
						return (
							<li className="pokemon" key={fav.id}>
                {fav.title}
							</li>
						);
					}
					)	
				}
            </ul>
            <div className="backToList">
              <Link to="/List">Volver al listado </Link>
            </div>
      </div>
 
    );
  }


export default Favorites;