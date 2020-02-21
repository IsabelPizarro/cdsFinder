import React from 'react';
import { Link } from "react-router-dom";
import CdList from './CdList';


export default function Filter(props) {
    
    const {handleInput, handleSubmit, value,} = props;

    

  // const classes = useStyles();

  return (
    <form className="prueba" noValidate autoComplete="off">
      <div className="containerFilter">
        <input
          id="standard-basic"s
          className="tal"
          label="Find your cd"
          margin="normal"
           onChange={handleInput}
          value={value}
          
        />
        <div className={"contenedor"}>
    
        <button variant="outlined" color="secondary" onClick={handleSubmit} value={value}>
        <Link to="/List">
          

      Search
      </Link>
    </button>
    {/* <div className="cardsContainer">
              <CdList data={discos} /> 
          
        </div> */}
  
  </div>
      </div>
    </form>
  );
}