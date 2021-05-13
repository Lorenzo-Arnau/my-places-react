import React, {Component} from 'react';


class MyPlacesList extends Component {
  render(){


    return (
        <ol className ='place-list'>
        {
          this.props.myplaces.map((myplace,index) => (
            <li key={index} className ='place-list-item'>

            <div className = 'place-avatar' style = {{
              backgroundImage:`url(${myplace.img})`
            }}/>
            <div className='place-details'>
              <p className='place-title'>{myplace.name}</p>
              <p>{myplace.type}</p>
            </div>
            <button onClick={()=>this.props.onremove(myplace)} className='place-remove'>Remove</button>
            </li>
          ))
        }
      </ol>
    )


}
}

export default MyPlacesList
