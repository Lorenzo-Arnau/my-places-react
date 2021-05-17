import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import React, {Component} from 'react';


// class Footer extends Component {
//   render(){


//     return (
//         <footer className="page-footer">
//         <div className="container">
//           <div className="row">
//             <div className="col l6 s12">
//               <h5 className="white-text">My Places</h5>
//               <p className="grey-text text-lighten-4">Tutti i miei posti</p>
//             </div>
//             <div className="col l4 offset-l2 s12">
             
//               <ul>
                
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="footer-copyright">
//           <div className="container">
//           ©2021 Copyright Bastet.inc
//           </div>
//         </div>
//       </footer>
//     )


// }
// }

// export default Footer


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>
          ©2021 Copyright Bastet.inc
          </Typography>  
        </Toolbar>
      </AppBar>
    </div>
  );
}