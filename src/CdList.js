import React from "react";
import CdCard from "./CdCard";



const CdList = props => {
  const {data,handleFavs}=props;
  return (
    <div className="cardsContainer">
    
    <ul className="ulList">
        <li >
              
    
          {data.map(dat=>
           <CdCard data={dat} handleFavs={handleFavs}/>
            
            )}
        </li>
   
     
    </ul>
    </div>
  );
};

export default CdList;