import React from "react";
import CdCard from "./CdCard";
import Loader from "./Loader";


const CdList = props => {
  const {data,handleFavs}=props;
  return (
    <main>
    <div className="cardsContainer">
    <div className="list">        
          {
          data.map(dat=>
           <CdCard data={dat} handleFavs={handleFavs}/> 
            )}
    </div>
    </div>
    </main>
  );
};

export default CdList;