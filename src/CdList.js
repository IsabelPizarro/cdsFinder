import React from "react";
import CdCard from "./CdCard";


const CdList = props => {
  console.log(props);
  // console.log(match);
  const {data}=props;
  return (
    <div className="cardsContainer">
    
    <ul className="ulList">
        <li >
          {data.map(dat=>
           <CdCard data={dat}/>
            
            )}
    
       
      
        </li>
   
     
    </ul>
    </div>
  );
};

export default CdList;