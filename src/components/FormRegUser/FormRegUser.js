import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCredentials } from 'redux/auth/authSlice';
import { useSignupMutation } from 'redux/auth/apiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { customRegex } from "components/regex";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { StyledTextField, StyledGrid, StyledIconButton, StyledButton, StyledLink } from "./FormRegUser.styled"

const DEFAULT_VALUES = {
    name: '',
    email: '',
    password: '',
}

const VALIDATION_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(4, 'Too Short! Min 4 symbols')
        .max(50, 'Too Long! Max 50 symbols')
        .matches(
            customRegex.name,
            'Name may contain only Eng or Ua letters, apostrophe, spaces and dash'
        )
        .required('Required'),    
    email: Yup.string()
        .trim()
        .min(6, 'Too Short! Min 6 symbols')
        .max(50, 'Too Long! Max 50 symbols')
        .matches(
            customRegex.email,
            'Email may contain only Eng letters. Not use spaces and some symbols / | \\ ,'
        )
        .required('Required'),
    password: Yup.string()
        .trim()
        .min(8, 'Too Short! Min 8 symbols!')
        .max(50, 'Too Long! Max 50 symbols')
        .matches(
            customRegex.password,
            'Password may contain only Eng letters and digits, dash. Not use spaces and other symbols.'
        )
        .required('Required'),
});

export const FormRegUser = () => {
    const [ signup ] = useSignupMutation()
    const [ showPassword, setShowPassword ] = useState(false);
    const dispatch = useDispatch()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async ({ name, email, password }, { resetForm }) => {
        const newUser = {
            name,
            email,
            password,
        }                

        try {
            const userData = await signup(newUser)  
            if ( userData?.data ) {
                dispatch(setCredentials({...userData}))
                resetForm()
                return
            }
  
            if ( userData?.error?.status === 400 ) {
                Notify.failure('User creation error', {
                    position: 'center-top',
                });
            }

            if ( userData?.error?.status === 500 ) {
                Notify.failure('Server error', {
                    position: 'center-top',
                });
            }            
        } catch (error){
            console.log(error)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Formik
                initialValues={ DEFAULT_VALUES }
                validationSchema={ VALIDATION_SCHEMA }
                onSubmit={handleSubmit}
            >       
            {({ isValid, dirty }) => (             
                <Form autoComplete="off">
                        <Grid container spacing={2} sx={{ mt: 3 }}>
                            <Grid item xs={12}>                           
                                <Field 
                                    component={ StyledTextField }
                                    name="name"
                                    type="text"                                
                                    fullWidth 
                                    title="min 4 symbols"  
                                    label="User Name"      
                                    required          
                                />        
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    component={ StyledTextField }
                                    fullWidth
                                    title="Example: segio2023@g7-top.com"  
                                    label="Email"
                                    name="email"
                                    type="email"  
                                    required                
                                />                            
                            </Grid>

                            <StyledGrid item xs={12}>
                                <Field
                                    component={ StyledTextField }
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'} 
                                    title="min 8 symbols"       
                                    required                          
                                />       
                                <StyledIconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}                          
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </StyledIconButton>                     
                            </StyledGrid>
                        </Grid>

                        <StyledButton                      
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit"                           
                            disabled={!(isValid && dirty)}
                            >
                            Sign Up
                        </StyledButton>
                    
                        <Grid container justifyContent="center">
                            <Grid item>
                                <StyledLink to="/login">
                                    Already have an account? Login
                                </StyledLink>    
                            </Grid>
                        </Grid>        
                </Form> 
            )}   
            </Formik>  
        </Container>
    );
}