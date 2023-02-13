import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCredentials } from 'redux/auth/authSlice';
import { useLoginMutation } from 'redux/auth/apiSlice';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { StyledButton, StyledLink } from "./FormLoginUser.styled"

export const FormLoginUser = () => {
    const [ login ] = useLoginMutation()
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const valueForm = {           
            email: form.get('email'),
            password: form.get('password'),
        }

        event.target.reset()

        try {
            const userData = await login(valueForm)           
            dispatch(setCredentials({...userData}))
        } catch (error){
            console.log(error)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            label="Password"
                            name="password"     
                            required                                                   
                            type={showPassword ? 'text' : 'password'}                            
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}      
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }                 
                        />
                        </FormControl>
                    </Grid>
                    </Grid>
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
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
                </Box>      
        </Container>
    );
}