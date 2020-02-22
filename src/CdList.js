import React from "react";
import CdCard from "./CdCard";
import Filter from "./Filter";



const CdList = props => {
  const {data,handleFavs, handleInput,handleSubmit, handlePage, value}=props;
  return (
    <div className="cardsContainer">
            <Filter
           handleInput={handleInput}
          handleSubmit={handleSubmit}
          value={value}
          handlePage={handlePage}
          
        />
    
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