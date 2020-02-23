import React from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';

import { Button, Icon } from 'antd';




export default function Filter(props) { 
    const {handleInput, handleSubmit, value, handlePage, handlePageBack} = props;
    
  return (
    <form className="form" noValidate autoComplete="off">
      <div className="containerFilter">
   
        <Input
        placeholder="Nirvana"
        
          id="standard-basic"
          className="tal"
          label="Find your cd"
          margin="normal"
          onChange={handleInput}
          value={value} 
        />
        <div className="btnContainer">
        <Button variant="outlined" color="primary" onClick={handlePageBack}>
        <Icon type="left" />
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleSubmit} value={value}>
       
            <Link to="/List">Buscar</Link> 
        </Button>
       
        <Button variant="outlined" color="primary" onClick={handlePage}>
        <Icon type="right" />
        </Button>
        </div>
      </div>
    </form>
  );
}