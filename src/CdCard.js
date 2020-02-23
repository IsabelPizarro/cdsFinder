import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import './index.css';
// import { Button } from 'antd';
import { Card, Icon, Button } from "antd";


export default function CdCard(props) {
  const { data, handleFavs } = props;
  
const { Meta } = Card;

    return (
     
       <div className="details"  id={data.id}>
       <Link to={`/cd/${data.id}`}>
      <Card
    style={{ width: 150 }}
    cover={
      <img
        alt="example"
        src={data.thumb}
      />
    }
   
  >
    <Meta title={data.title} description={data.style} />
  </Card>
  </Link>
  <div>
 
       
      
      <button onClick={handleFavs} className={data.id}> <Icon type="heart" key="ellipsis" /></button>
      </div>
  </div>
//       <div className="details"  id={data.id}>
//           <Link to={`/cd/${data.id}`}>
       
//           {data.title}
//         <img src={data.thumb} alt="img disc"/>
      
//       </Link>
//       <div>
  

//   <Button type="danger">Danger</Button>
 
// </div>
      
//      
      
//       </div>
 
    );
  
};

