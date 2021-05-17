import React, {Fragment,Component} from 'react';
  import escapeRegExp from 'escape-string-regexp'
  import sortBy from 'sort-by'
    import { withStyles } from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';

    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: 20,
        marginRight: 20,
        //width: 200,
        display:'flex'
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
    });
    const divStyle = (src) => ({
      backgroundImage: 'url(' + src + ')'
    })

    class MyPlacesList extends Component {
      state = {
        query:'',
      }
      handleQuery= (query)=>{
        this.setState({
          query:query
        })
      }
      render(){
        const { classes } = this.props;
        let filteredPlaces
        if(this.state.query){
          const searchMatch = new RegExp(escapeRegExp(this.state.query),'i')
          filteredPlaces= this.props.myplaces.filter((place) => searchMatch.test(place.name)
          )}else{
           filteredPlaces = this.props.myplaces   
        }
        filteredPlaces.sort(sortBy('name'))
        return (
          <Fragment>
            <TextField
                id="standard-search"
                label="Search Place"
                type="search"
                className={classes.textField}
                margin="normal"
                value={this.state.query}
                onChange={(event)=>this.handleQuery(event.target.value)}
              />
              <p className='results-p'>Risutati per :  {this.state.query.length > 0 ? JSON.stringify(this.state.query) : 'nessuna ricerca'}</p>
              <ol className ='place-list'>
              {
               filteredPlaces.map((myplace,index) => (
                  <li key={index} className ='place-list-item'>

                  <div className = 'place-avatar'style={divStyle(myplace.img)}></div>
                  <div className='place-details'>
                    <p className='place-title'>{myplace.name}</p>
                    <p>{myplace.type}</p>
                  </div>
                  <button className='place-remove'>
                    Remove
                  </button>

                  </li>
                ))
              }
            </ol>
          </Fragment>
        )


    }
    }

    export default withStyles(styles)(MyPlacesList)