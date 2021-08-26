import React, { useState } from 'react'
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Box, Button, FormControl, FormControlLabel, Grid } from '@material-ui/core';
import swal from 'sweetalert';
import userServices from '../services/getUserAPI';
import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
    smallLabel: {
        color: '#1976d2',
        fontSize: '12px'
    },
    boxContainer: {
        height: '100%'
    },
    formControlStyle: {
        width: '400px'
    },
    textLeft: {
        textAlign: 'left'
    },
    Icon: {
        textAlign: 'center'
    },
    LabelRight : {
        textAlign : 'right'
    }

}));


export default function Signup(props) {
    const classes = useStyles();
    const history = useHistory()
    const [data,setData] = useState([])
    useEffect(() => {
        userServices.getUserInfo().then(
          res => setData(res.data)
        )
  
    },[])
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [noteRecive , setNoteRecive] = useState(false)
    const clickSignUp = () => {
        let isExist = false
        for ( let i = 0; i < data.length; i++){
            if (data[i].email === email) {
                  isExist =true
                  break;
            }
        }
        if (isExist) {
            swal({
                title: "FAIL",
                text: "Email already exists",
                icon: "error",
                button: "OK",
              });
              setFirstName('')
              setLastName('')
              setEmail('')
              setPassword('')
              setNoteRecive('')
        }else {
            userServices.addUserInfo({
                "first name" : firstname,
                "last name" : lastname,
                "email" : email,
                "password" : password
            })
            swal({
                title: "SUCCESS",
                text: "Your account has been registered succesfully",
                icon: "success",
                button: "OK",
              });

              history.push('/sign-in')
              userServices.getUserInfo().then(
                res => setData(res.data)
              )
        }

    }
    return (
        < >
            <Box display='flex' justifyContent='center' alignItems='center' className={classes.boxContainer}>
                <FormControl className={classes.formControlStyle}>
                    <Box className={classes.Icon}>
                        <LockIcon fontSize="large" className={classes.iconStyle} />
                    </Box>
                    <h2 className={classes.title} >Sign Up</h2>
                    <Grid container spacing={3} >
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-secondary"
                                label="First Name  *  "
                                variant="outlined"
                                color="secondary"
                                margin="normal"
                                onChange = {(e) => setFirstName(e.target.value) }
                                value = {firstname}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-secondary"
                                label="Last Name  *"
                                variant="outlined"
                                color="secondary"
                                margin="normal"
                                onChange = {(e)=> setLastName(e.target.value)}
                                value = {lastname}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="outlined-secondary"
                        label="Email Address *"
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        onChange = {(e)=> setEmail(e.target.value)}
                        value = {email}
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Password *"
                        variant="outlined"
                        color="secondary"
                        margin="normal"
                        type = "password"
                        onChange = {(e)=> setPassword(e.target.value)}
                        value = {password}
                    />
                    <FormControlLabel
                        control={<Checkbox name="antoine"  onChange={(e)=> setNoteRecive(e.target.checked)} value = {noteRecive}
                        />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    
                        className = {classes.textLeft}/>
                    <Button variant="contained" color="primary" onClick= {clickSignUp}>
                        Sign Up
                    </Button>
                    <Grid container spacing={3} >
                        <Grid item xs={12} className = {classes.LabelRight}>
                            <Link to='/sign-in' className={classes.smallLabel}>Already have an account? Sign in</Link>
                        </Grid>
                    </Grid>

                </FormControl>
            </Box>

        </>
    )
}
