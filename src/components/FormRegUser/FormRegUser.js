import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCredentials } from 'redux/auth/authSlice';
import { useSignupMutation } from 'redux/auth/apiSlice';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),    
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short! Min 8 symbols!')
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
        console.log(newUser)

        resetForm()

        try {
            const userData = await signup(newUser)        
            dispatch(setCredentials({...userData}))
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