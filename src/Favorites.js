import React from "react";
 import { Link } from "react-router-dom";

import "./App.css";


const Favorites = props => {
    return (
  
      <div className="favs"  >
          Favoritos :)
        <Link to="/List">Back
      </Link>
      </div>
 
    );
  }


export default Favorites;