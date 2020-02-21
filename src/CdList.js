import React from "react";
import CdCard from "./CdCard";
import Filter from "./Filter";


const CdList = props => {
  const {data,handleFavs, handleInput, handleSubmit,handlePage, value, discos}=props;
  return (
    <div className="cardsContainer">
    
    <ul className="ulList">
        <li >
              
        <Filter
           handleInput={handleInput}
          handleSubmit={handleSubmit}
          value={value}
          discos={discos}
        />
             <button variant="outlined" color="secondary" onClick={handlePage}>
      Next
    </button>
          {data.map(dat=>
           <CdCard data={dat} handlefavs={handleFavs}/>
            
            )}
        </li>
   
     
    </ul>
    </div>
  );
};

export default CdList;