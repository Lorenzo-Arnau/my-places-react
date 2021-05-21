import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MyPlacesList from './MyPlacesList';
import '../index.css';
import * as AttractionsApi from '../utils/AttractionsApi';

class Main extends Component{
  state={
    attractions : []
  }
  componentDidMount(){
    AttractionsApi.getAll().then((attractions)=>{
      this.setState({attractions: attractions})
    })
  }
  // REMOVE IN LOCALE CON FILTER
  removeAttraction=(attraction)=>{
    this.setState((state)=>({
      attractions:state.attractions.filter((attr)=>attr.id !== attraction.id)
    }))
    AttractionsApi.remove(attraction);
  }
  // REMOVE IN DB con API
  // removePlace = (attraction)=>{
  //   console.log(attraction);
  //   AttractionsApi.remove(attraction).then((attraction)=>{
  //     console.log(attraction);
  //     this.setState({attractions: attraction})
  //   })
  // }
    render(){
      return(
        <div>
          <Header titolo ='Posti Storici, Torino' subtitle='Lista Attrazioni'></Header>
          <MyPlacesList  onremove={this.removeAttraction} myplaces={this.state.attractions}></MyPlacesList>
          <Footer></Footer>
      
        </div>
      )
    }
  }

  export default Main;