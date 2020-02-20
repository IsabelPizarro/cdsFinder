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
      <Link to={`/cd/${data.id}`}>
      <div className="details"  id={data.id}>
          {data.title}
        <img src={data.thumb} alt="img disc"/>
  
      </div>
      </Link>
    );
  }
};

export default CdCard;