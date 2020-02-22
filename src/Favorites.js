import React from "react";
 import { Link } from "react-router-dom";

import "./App.css";


const Favorites = props => {

  const {favorites,data}=props;
  
	// let arrayFavs=[];
	console.log(favorites);
	
  // console.log(CdFav);
  // arrayFavs.push(CdFav);
   for(var i in favorites){
    const CdFav = data.find(item => item.id === parseInt(favorites[i]));
        console.log( CdFav);
    }
    
    return (
  
      <div className="favs"  >
          Favoritos :)
          <ul>
            {/* {CdFav[0]} */}
          {/* {arrayFavs[0].title} */}

          {/* {arrayFavs.map(dat=>
           <li>{dat.title}
           <img src={dat.thumb}/></li>
            )} */}
            </ul>
        <Link to="/List">Back
      </Link>
      </div>
 
    );
  }


export default Favorites;