import React from 'react';
import { Link } from "react-router-dom";


const CdDetail = (props) => {
  debugger;
    let detail=[]
    const { routerProps, data } = props;
    const { id } = routerProps.match.params;
    const CdId = parseInt(id);
    const CdDetail = data.find(item => item.id === CdId);
    detail.push(CdDetail);
    return (       
     <div className="containerDetails">
            <p>{id}</p>
            <p>{detail[0].style}</p>
            <p>{detail[0].title}</p>
            <p>{detail[0].country}</p>
            <p>{detail[0].year}</p>
            <img src={detail[0].thumb}/>
     <ul className="ulFormats"><p>Formato:</p>
      {(detail[0].format==null) ? <p>No hay ningún formato disponible</p>  :
      detail[0].format.map(form=><li>{form}</li>)}</ul> 
            <div className="backToList">
              <Link to="/List">Volver al listado </Link>
            </div>           
 </div>
     
    );
}


export default CdDetail;