import React, { Component } from 'react';
import './App.css'
import CdList from './CdList';
import Filter from "./Filter";
import Loader from './Loader';
import { Link, Route, Switch } from 'react-router-dom';
import CdDetail from './CdDetail';
import Favorites from "./Favorites";
import Header from "./Header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discos:[],
      value:"",
      page:1,
      favorites:"",
      favoritesCompleted:[],
     
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handlePage=this.handlePage.bind(this);
    this.handleFavs=this.handleFavs.bind(this);

   
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
    e.preventDefault();
    this.setState({ discos: [] });
    const headers = { 'Authorization': 'Discogs token=WZEaJGNygEXhxzmpmOLGcPDnvYdZBHokExnJspHN' }
    fetch(`https://api.discogs.com/database/search?q=${this.state.value}&per_page=30&page=${this.state.page}`, { headers }).then(res => res.json()).then(data =>
     { 
          this.setState({ discos: data.results });  
           
         }
        );
  
        }
   handleFavs(e){
     e.preventDefault();
     debugger;
    //  let favs;
     
     console.log(e.currentTarget.className);
     const newFav=e.currentTarget.className;
    

     { 
      this.setState({ favorites: [...this.state.favorites, newFav]});  
       
     }
     for(var i in this.state.favorites){
      const CdFav = this.state.discos.find(item => item.id === parseInt(this.state.favorites[i]));
          console.log( CdFav);
          { 
            this.setState({ favoritesCompleted: [...this.state.favorites, CdFav]});  
             
           }
console.log(this.state.favoritesCompleted);
          
      }
        }

  
  render() {

     const {value, discos, favorites}=this.state;
     
    
    return (
      <div className="App">
         <React.Fragment>
        <Header />
            <Filter
           handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={value}
          handlePage={this.handlePage}
          
        />
       
    
    </React.Fragment>
        
        <Switch>
          <Route  path="/Favs" render={
              ()=>{return (
                <Favorites favorites={favorites} data={discos}
                />
              );
              }}/>
            <Route exact path ="/List"
            render={
              ()=>{return (
                <CdList  data={discos} handleFavs={this.handleFavs}   
                value={value}
                />
              );
              }}/>
            
            <Route path="/cd/:id"  render={(routerProps)=>{return (
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
