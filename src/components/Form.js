import React, { Fragment,Component } from 'react';
import ImageIn from '../utils/ImageIn'
import serializeForm from 'form-serialize';




 class Form extends Component{
      onSubmit = (event) =>{
          event.preventDefault()
          const data = serializeForm(event.target,{hash:true})
          console.log(data);
          this.props.onCreatePlace(data)
      }
     render(){
       return(
         this.props,
           <Fragment> 
           <div className='form-container'>              
            <form onSubmit={this.onSubmit} className="place-form">
                    <div className="">
                        <ImageIn
                            className="create-place-image"
                            name="img"
                            maxHeight={100}
                        />
                     </div>
                    <div className="create-place-details">
                        <input type='text' name='name' placeholder='Name'/>
                        <input type='text' name='type' placeholder='Type'/>
                            <button>Add Place</button>
                    </div>
            </form>
          </div> 
         </Fragment>
         )
       }
     }

     export default Form
