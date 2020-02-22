import React from "react";
 import { Link } from "react-router-dom";

import "./App.css";


const Favorites = props => {

  const {favorites}=props;
  console.log(favorites);

  console.log(favorites[0].title);
   for(var i in favorites){
        console.log(i+": "+ favorites[i].title);
    }


    
    return (
  
      <div className="favs"  >
          Favoritos :)
          <ul>
          {favorites
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
        <Link to="/List">Back
      </Link>
      </div>
 
    );
  }


export default Favorites;