import React from "react";
 import { Link } from "react-router-dom";

import "./App.css";


const CdCard = props => {
  const { data } = props;
  console.log(props);
  if (data  === undefined) {
    return <div>Loading..</div>;
  } else {
    return (
  
      <div className="details"  id={data.id}>
          {data.title}
        <img src={data.thumb} alt="img disc"/>
        <Link to={`/cd/${data.id}`}>Más detalles
      </Link>
      </div>
 
    );
  }
};

export default CdCard;