import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import './index.css';
import { Button } from 'antd';


export default function CdCard(props) {
  const { data, handleFavs } = props;

    return (
  
      <div className="details"  id={data.id}>
          <Link to={`/cd/${data.id}`}>
       
          {data.title}
        <img src={data.thumb} alt="img disc"/>
      
      </Link>
      <div>
  

  <Button type="danger">Danger</Button>
 
</div>
      
      <button onClick={handleFavs} className={data.id}>Add Favs</button>
      
      </div>
 
    );
  
};

