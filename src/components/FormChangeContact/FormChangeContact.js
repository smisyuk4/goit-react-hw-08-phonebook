import { useDispatch, useSelector } from "react-redux";
import { clearChange } from 'redux/contacts/contactsSlice';
import { useChangeMutation } from 'redux/auth/apiSlice';
import { selectItemChange } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { StyledTextField, StyledButton } from "./FormChangeContact.styled"

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
    <Container component="main" maxWidth="xs">     
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTextField                    
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
                    <StyledTextField
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
                <StyledButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Change
                </StyledButton>
            </Box>    
    </Container>
    )
};