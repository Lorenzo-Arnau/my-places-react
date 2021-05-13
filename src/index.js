import ReactDom from 'react-dom';
import Main from './components/Main'

// const element = 
// <div>
//   <h1>Contatti</h1>
// <ol>
//   {contatti.map((contatto,index)=>(
  //     <li key={index}>{contatto.name}</li>
  //   ))}
  // </ol>
  // </div>
  
  
  
  // const element = React.createElement(
    // 'ol',
  //  null,
  //  contatti.map((contatto,index) =>(React.createElement(
    //    'li',
    //    {key:index},
    //    contatto.name
    //  )))
    // )
    // console.log(element);
    
    // const contatti=[
    //   {name:'cosimo'},
    //   {name:'giovanni'},
    //   {name:'martina'}
    // ]
  
     


ReactDom.render(<Main></Main>,document.getElementById('root'))