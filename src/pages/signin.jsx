import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Box, Button, FormControl, FormControlLabel, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import userServices from '../services/getUserAPI';

const useStyles = makeStyles((theme) => ({
    iconStyle: {
        color: 'white', backgroundColor: 'rgb(220, 0, 78)'
        , padding: '10px', borderRadius: '100%'
    },
    formSignIn: {
        marginTop: '64px'
    },
    title: {
        fontWeight: '500',
        color: 'grey'
    },
    smallLabel : {
        color : '#1976d2',
        fontSize : '12px'
    },
    boxContainer : {
        height : '100%'
    },
    formControlStyle : {
        width : '400px'
    },
    textLeft : {
        textAlign : 'left'
    },
    Icon : {
        textAlign : 'center'
    }
}));


export default function SignIn(props) {
    const classes = useStyles();
    const [data,setData] = useState([])
    useEffect(() => {
        userServices.getUserInfo().then(
          res => setData(res.data)
        )
  
    },[])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState('')
    const history = useHistory()



    const SignIn = () => {
        let isCorrect = false
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email && data[i].password === password){
                isCorrect = true
                break;
            }
        }

        if (isCorrect){
            history.push('/home')
            swal(
                {
                    title: "SUCCESS",
                    text: "Your account has been registered succesfully",
                    icon: "success",
                    button: "OK",
                  }
            )
        }else {
            swal(
                {
                    title: "FAIL",
                    text: "Email or Password wrong!!!",
                    icon: "error",
                    button: "OK",
                  }
            )
            setEmail('')
            setPassword('')
            setRememberMe('')
        }
    }

    const EnterSignIn = (value) => {
        if (value === 'Enter') {
            SignIn()
        }
    }
    return (
        <>
        <Box display = 'flex' justifyContent= 'center' alignItems= 'center' className={classes.boxContainer} onKeyDown = {(e)=> EnterSignIn(e.key)}>
        <FormControl className = {classes.formControlStyle}>
                <Box className={classes.Icon}>
                <LockIcon fontSize="large" className={classes.iconStyle} />
                </Box>
                <h2 className={classes.title} >Sign In</h2>
                <TextField
                    id="outlined-secondary"
                    label="Email *"
                    variant="outlined"
                    color="secondary"
                    margin = "normal"
                    onChange = {(e)=> setEmail(e.target.value)}
                    value = {email}
                />
                <TextField
                    id="outlined-secondary"
                    label="Password *"
                    variant="outlined"
                    color="secondary"
                    margin = "normal"
                    type = 'password'
                    onChange = {(e)=> setPassword(e.target.value)}
                    value = {password}
                />
                <FormControlLabel
                    control={<Checkbox name="antoine" onChange = {(e)=> setRememberMe(e.target.checked)} checked={rememberMe} value = {rememberMe}/>}
                    label="Remember me"
                />
                <Button variant="contained" color="primary" onClick = {SignIn} 
                >
                    Sign In
                </Button>
                <Grid container spacing={3} >
                    <Grid item xs={6} className={classes.textLeft}>
                        <Link className ={ classes.smallLabel}>Forgot password?</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/sign-up' className ={ classes.smallLabel}>Don't have an account? Sign Up</Link>
                    </Grid>
                </Grid>

            </FormControl>
        </Box>

        </>
    )
}
