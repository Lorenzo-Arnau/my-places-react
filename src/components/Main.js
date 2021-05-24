import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import MyPlacesList from './MyPlacesList';
import '../index.css';
import * as AttractionsApi from '../utils/AttractionsApi';

class Main extends Component{
  state={
    attractions : [],
    screen:'list' //list,create form
  }
  componentDidMount(){
    let getList= localStorage.getItem("Lista");
    console.log(this.state.attractions);
    console.log(getList);
    if(!localStorage.getItem("Lista")){
    AttractionsApi.getAll().then((attractions)=>{
      this.setState({attractions: attractions})
    })
    }else{
        this.setState({attractions: localStorage.getItem("Lista")})
    }
    window.setInterval(localStorage.setItem("Lista", this.state.attractions), 1000);
  }
  // REMOVE IN LOCALE CON FILTER
  removeAttraction=(attraction)=>{
    this.setState((state)=>({
      attractions:state.attractions.filter((attr)=>attr.id !== attraction.id)
    }))
    AttractionsApi.remove(attraction);
  }

  changeView=()=>{
   if(this.state.screen === 'list'){
    this.setState({screen: 'create'})
   }
   if(this.state.screen === 'create'){
    this.setState({screen: 'list'})
   }
  }
  onCreateThisPlace=(place)=>{
    AttractionsApi.create(place).then(place =>{
      this.setState(state =>({
        attractions:state.attractions.concat([place])
      }))
     console.log(this.state.attractions);
    })
  }


    render(){
      return(
        <div>
          <Header
           titolo ={this.state.screen === 'list' ? 'Posti Storici, Torino' : 'Aggiungi un attrazione'} 
           onNavigation={this.changeView} 
           button={this.state.screen === 'list' ? 'Add place' : 'Return'} 
           appState={this.state.screen}></Header>
          <Route exact path='/' render={()=>(
            <MyPlacesList  onremove={this.removeAttraction} myplaces={this.state.attractions}></MyPlacesList>

          )}/>
          <Route path='/create' render={()=>(
          <Form onCreatePlace={this.onCreateThisPlace}></Form>
          )}/>
          <Footer></Footer>
        </div>
      )
    }
  }

  export default Main;