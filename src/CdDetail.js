import React from 'react';

import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const CdDetail = (props) => {
    let cosas=[]
    const { routerProps, data } = props;
    const { id } = routerProps.match.params;
    const CdId = parseInt(id);
    

    const CdDetail = data.find(item => item.id === CdId);
    cosas.push(CdDetail);
    

    
   

    return (
        
            
     <div className="containerDetails">
            <p>{id}</p>
            <p>{cosas[0].style}</p>
            <p>{cosas[0].title}</p>
            <p>{cosas[0].country}</p>
            <p>{cosas[0].year}</p>
            <img src={cosas[0].thumb}/>
    <ul className="ulFormats"><p>Formato:</p>
      {cosas[0].format.map(form=><li>{form}</li>)}</ul>
            
            <div>
              <Link to="/List">Volver al listado </Link>
            </div>
                
 </div>
     
    );
}


export default CdDetail;