import React, { Component } from 'react';


class Header extends Component{
    render(){
      
      return(
        this.props,
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">{this.props.titolo}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">{this.props.subtitle}</a></li>
          </ul>
        </div>
      </nav>
        )
      }
    }

    export default Header