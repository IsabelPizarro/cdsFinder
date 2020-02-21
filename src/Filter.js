import React from 'react';
import { Link } from "react-router-dom";


export default function Filter(props) { 
    const {handleInput, handleSubmit, value} = props;
  return (
    <form className="prueba" noValidate autoComplete="off">
      <div className="containerFilter">
        <input
          id="standard-basic"
          className="tal"
          label="Find your cd"
          margin="normal"
           onChange={handleInput}
          value={value} 
        />
        <div className={"contenedor"}>
            <button variant="outlined" color="secondary" onClick={handleSubmit} value={value}>
            <Link to="/List">Search</Link> 
            </button>
        </div>
      </div>
    </form>
  );
}