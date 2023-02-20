import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCredentials } from 'redux/auth/authSlice';
import { useLoginMutation } from 'redux/auth/apiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { StyledTextField, StyledGrid, StyledIconButton, StyledButton, StyledLink } from "./FormLoginUser.styled"

const DEFAULT_VALUES = {
    email: '',
    password: '',
}

const REGEX_EMAIL = /^[^\s,\\\\/\\|@][a-zA-Z\d\\-]*@[^\s,\\\\/\\|\\.@][a-zA-Z\d\\-]*\.[a-zA-Z]{2,}$/;
const REGEX_PASSWORD = /^[^\s.][a-zA-Z\d-]{7,}$/

const VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .trim()
        .min(6, 'Too Short! Min 6 symbols')
        .max(50, 'Too Long! Max 50 symbols')
        .matches(
            REGEX_EMAIL,
            'Email may contain only Eng letters. Not use spaces and some symbols / | \\ ,'
        )
        .required('Required'),
    password: Yup.string()
        .trim()
        .min(8, 'Too Short! Min 8 symbols!')
        .max(50, 'Too Long! Max 50 symbols')
        .matches(
            REGEX_PASSWORD,
            'Password may contain only Eng letters and digits, dash. Not use spaces and other symbols.'
        )
        .required('Required'),
});

export const FormLoginUser = () => {
    const [ login ] = useLoginMutation()
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async ({ name, email, password }, { resetForm }) => {
        const user = {
            email,
            password,
        }

        resetForm()

        try {
            const userData = await login(user)    
            if ( userData?.data ) {
                dispatch(setCredentials({...userData}))
            }
            
            if ( userData?.error?.status === 400 ) {
                Notify.failure('Login error', {
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
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!(isValid && dirty)}
                        >
                        Login
                    </StyledButton>

                    <Grid container justifyContent="center">
                        <Grid item>
                            <StyledLink to="/registration">
                                Don't have account? Registration
                            </StyledLink>
                        </Grid>
                    </Grid>
                </Form> 
            )}  
            </Formik>      
        </Container>
    );
}