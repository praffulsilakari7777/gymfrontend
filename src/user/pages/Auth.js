import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/FormElements/Button';
import Button from '@material-ui/core/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { HiSwitchHorizontal } from 'react-icons/hi';

// import './Auth.css';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: 'rgb(16, 195, 204)',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    Button: {
       color: 'rgb(16, 195, 204)'
    }
  }));

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData]  = useForm({
        email: {
            value: '',
            isValid: false
        },

        password: {
            value: '',
            isValid: false
        }
    }, false);

    const switchModeHandler = () => {
       if (!isLoginMode) {
           setFormData({
               ...formState.inputs,
               name: undefined
           }, formState.inputs.email.isValid && formState.inputs.password.isValid);
       }
       else {
           setFormData({
               ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
           }, 
           false);
               }

        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = async event => {
        event.preventDefault();

        if(isLoginMode) {

              try  {
                 const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/login`,'POST', JSON.stringify({
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),{
                    'Content-Type': 'application/json'
                });
                //console.log(responseData.role);
                auth.login(responseData.userId, responseData.token, responseData.role);

            } catch(err) {
                  
            }

        
        } else {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, 'POST',  JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),  {
                    'Content-Type': 'application/json'
                }
            );

           auth.login(responseData.userId, responseData.token, responseData.role);
        } catch (err) {
            
        }

        }
       

      

        
    };

    const classes = useStyles();

    

    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {/* <Card className="authentication"> */}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        
        {!isLoginMode && ( "Sign up")}
        {isLoginMode && ("  Sign in")}
        </Typography>
        {isLoading && <LoadingSpinner asOverlay/>}
        {/* {!isLoginMode && (  <h4>Signup Here</h4>)}
        {isLoginMode && (<h4>Login Required</h4>)} */}


        <hr />
        <form className={classes.form} onSubmit={authSubmitHandler}>
            {!isLoginMode && (
            <Input 

            element="input" 
            id="name" 
            type="text" 
            label="Name" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
            
            />


            
            )}

          <Input 
             element="input" 
            id="email" 
            type="text" 
            label="E-Mail" 
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput= {inputHandler}
             />
        
        <Input 
            element="input" 
            id="password" 
            type="password" 
            label="Password" 
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput= {inputHandler}
            />

            {/* <Button type="submit" disabled={!formState.isValid}>
               
                </Button> */}

                <Button
                className={classes.Button}
            type="submit"
            fullWidth
            color="dark"
            disabled={!formState.isValid}
            variant="outlined"
           
          > {isLoginMode? 'Login' : 'Sign up'}</Button>

        </form>
      
        <Button inverse  className={classes.Button} onClick={switchModeHandler}>Switch to {isLoginMode ? 'Sign up' : 'Login'} &nbsp;<HiSwitchHorizontal /></Button>
              
             
            
        {/* <Box alignItems="center">  <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button></Box> */}
        {/* </Card> */}
        </div>
        </Container>
        </React.Fragment>
       
        )
};

export default Auth;