import React from "react";
import CdCard from "./CdCard";

const CdList = props => {
//    console.log(props);
  const {data,i}=props;
  return (
    
    <ul className="ulList">
        <li className={i}>{data.title}
        <img src={data.thumb} alt="img disc"/></li>
      <CdCard data={data}/>
   
     
    </ul>
  );
};

export default CdList;