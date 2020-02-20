import React, { Component } from 'react';
import './App.css'
import CdList from './CdList';
import Filter from "./Filter";
import Loader from './Loader';
import { Link, Route, Switch } from 'react-router-dom';
import CdDetail from './CdDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discos:[],
      value:"",
      page:0,
     
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handlePage=this.handlePage.bind(this);
  
  }
  handlePage(e){
     e.preventDefault();
    console.log(this.state.page);
    this.setState({ page: this.state.page+1});
    
    this.handleSubmit(e);
    console.log("LO PILLA");
  }

  handleInput(event) {
    event.preventDefault();
     
    const lookFor = event.currentTarget.value;
    this.setState({ value: lookFor });
  }



  handleSubmit(e){
    
  
    //vaciar el array   aqui
    e.preventDefault();
    this.setState({ discos: [] });
    // console.log(this.state.page);


    const headers = { 'Authorization': 'Discogs token=WZEaJGNygEXhxzmpmOLGcPDnvYdZBHokExnJspHN' }
    fetch(`https://api.discogs.com/database/search?q=${this.state.value}&per_page=30&page=${this.state.page}`, { headers }).then(res => res.json()).then(data =>
     { 
  
          this.setState({ discos: data.results });  
           
         }
        );
  
        }

  
  render() {

     const {value, discos}=this.state;
     console.log(discos);
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Finder Discogs</h2>
        
          <Filter
           handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={value}
          
        />
         <button variant="outlined" color="secondary" onClick={this.handlePage}>
      Next
    </button>
        </div>
        
        <div className="cardsContainer">
           

           
              <CdList data={discos} /> 
          
        </div>
        <Switch>
            <Route  exact path="/List"
            render={() =>
              <CdList  data={discos}
              />
            } />
            
            <Route path="/cd/:id" render={(routerProps)=>{return (
            <CdDetail
            routerProps={routerProps}
            data={discos}
            />
          );
          }}/>
          </Switch>
     
       
       
         
      </div>
      
    );
  }
}

export default App;
