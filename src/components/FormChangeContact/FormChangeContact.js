import { useDispatch, useSelector } from "react-redux";
import { clearChange } from 'redux/contacts/contactsSlice';
import { useChangeMutation } from 'redux/auth/apiSlice';
import { selectItemChange } from 'redux/selectors';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const theme = createTheme();

export const FormChangeContact = () => {
    const [ change ] = useChangeMutation()
    const {id, name, number} = useSelector(selectItemChange)
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const newContact = {
            id,
            name: form.get('name'),
            number: form.get('number'),            
        }

        event.target.reset()

        try {
            if(name !== newContact.name || number !==newContact.number) {
                await change(newContact) 
                Notify.success(
                    'The contact has been change in storage',
                    { position: 'center-top' })           
            }
            dispatch(clearChange())
        } catch (error){
            console.log(error)
        }
    }

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
                    defaultValue={name}
                    required
                    fullWidth 
                    label="User Name"
                    autoComplete="off"             
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    label="Phone number"
                    name="number"
                    type="text"
                    defaultValue={number}
                    autoComplete="off"
                    />
                </Grid>                
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Change
                </Button>
            </Box>
        </Box>       
    </Container>
    </ThemeProvider>

    )
};

// defaultValue