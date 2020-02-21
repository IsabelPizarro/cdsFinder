import React from 'react';
// import { Link } from 'react-router-dom';

const CdDetail = (props) => {
    let cosas=[]
    const { routerProps, data } = props;
    console.log(data);
    console.log(routerProps)
    const { id } = routerProps.match.params;
    const CdId = parseInt(id);
    // console.log(id);

    const CdDetail = data.find(item => item.id === CdId);
    cosas.push(CdDetail);
    for(var i in CdDetail){
        console.log(i+": "+ CdDetail[i]);
    }
    // console.log(Object.keys(CdDetail));
    // console.log(typeof(CdDetail));
    console.log(cosas[0]);
    // console.log(cosas[0].title);
   

    return (
        
            
            <div>
                <p>{id}</p>
    
    <p>{cosas[0].title}</p>
    <p>{cosas[0].year}</p>
    <img src={cosas[0].thumb}/>
    {CdDetail[3]}
    
                Detallito aqúi
         
            </div>
     
    );
}


export default CdDetail;