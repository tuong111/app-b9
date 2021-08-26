import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    flexGrow: 1,
  },
  title : {
      flexGrow : 3
  },
  logo : {
      float : 'right'
  },
  menu : {
      color : 'white',
      textDecoration : 'none'
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory()
  const Login = () => {
      history.push('/sign-in')
  }
  return (
    <div className={classes.navContainer}>
      <AppBar position="static">
          <Toolbar>
          <HomeIcon fontSize ='large'/>
          <Fragment>
          <Typography variant="h6" className={classes.title} >
            <Link to = '/albums' className={classes.menu}>Albums</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to = '/price'className={classes.menu}>Price</Link>
          </Typography>
          </Fragment>
          <Button variant="contained" onClick={Login}>LOG IN</Button>
          </Toolbar>
      </AppBar>
    </div>
  );
}