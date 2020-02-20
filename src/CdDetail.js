import React from 'react';
// import { Link } from 'react-router-dom';

const CdDetail = (props) => {
    debugger;
    const { routerProps, data } = props;
    console.log(data);
    console.log(routerProps)
    const { id } = routerProps.match.params;
    const CdId = parseInt(id);
    console.log(id);

    const CdDetail = data.find(item => item.id === CdId);
    console.log(CdDetail);
    console.log(typeof(CdDetail));
   

    return (
        
            
            <div className="detail--general--container">
                {/* <li>{CdDetail}</li> */}
                hola
         
            </div>
     
    );
}


export default CdDetail;