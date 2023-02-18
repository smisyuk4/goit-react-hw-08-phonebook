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

const VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short! Min 8 symbols!')
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