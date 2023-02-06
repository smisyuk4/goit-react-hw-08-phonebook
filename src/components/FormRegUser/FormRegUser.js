import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCredentials } from 'redux/auth/authSlice';
import { useSignupMutation } from 'redux/auth/apiSlice';
import { Link } from "react-router-dom"

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const FormRegUser = () => {
    const [ signup ] = useSignupMutation()
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const newUser = {
            name: form.get('name'),
            email: form.get('email'),
            password: form.get('password'),
        }

        event.target.reset()

        try {
            const userData = await signup(newUser)        
            dispatch(setCredentials({...userData}))
        } catch (error){
            console.log(error)
        }
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField                    
                        name="name"
                        type="text"
                        required
                        fullWidth 
                        label="User Name"
                        autoComplete="off"
                        autoFocus
                        />
                    </Grid>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="center">
                    <Grid item>
                        <Link to="/login">
                        Already have an account? Login
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
            </Box>       
        </Container>
        </ThemeProvider>
    );
}