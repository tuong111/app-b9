import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory } from 'react-router-dom';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles((theme) => ({
    navContainer: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 3
    },
    logo: {
        fontSize : '20px',
        margin : '20px'
    },
    menu: {
        color: 'white',
        textDecoration: 'none'
    }
}));
export default function Albums(props) {
    const history = useHistory()
    const classes = useStyles()

    return (
        <div className={classes.navContainer}>
            <AppBar position="static" color = 'primary'>
                <Toolbar>
                <CameraAltIcon fontSize = 'large'/>
                    <Typography className =  {classes.logo}>
                        Album Layout
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    )
}
