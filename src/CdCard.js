import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import './index.css';
import { Card, Icon } from "antd";


export default function CdCard(props) {
  const { data, handleFavs } = props;
  
const { Meta } = Card;

    return (
     
       <div className="singleCard"  id={data.id}>
         <div className="divHover">
       <Link to={`/cd/${data.id}`}>
      <Card
    style={{ width: 180 }}
    cover={
      <img
        alt="example"
        src={data.thumb}
      />
    } 
  >
    <Meta title={data.title} description={data.year} />
  </Card>
  </Link>
  </div>
  <div>
      <button onClick={handleFavs} className={data.id} id="favBtn"> <Icon type="heart" key="ellipsis" /></button>
      </div>
  </div>

 
    );
  
};

