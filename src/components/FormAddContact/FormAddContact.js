// import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../redux/operations"
// import { selectContacts } from 'redux/selectors';
// import {Form, Field, Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { IconContext } from 'react-icons';
// import {
//     RiContactsFill,
//     RiUserVoiceFill,
//     RiUserFollowFill,
// } from 'react-icons/ri';

// const REGEX_NAME = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
// const REGEX_NUMBER =
//     /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

// const contactSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2)
//         .max(20)
//         .matches(
//             REGEX_NAME,
//             'Name may contain only letters, apostrophe, dash and spaces'
//         )
//         .required(),
//     number: Yup.string()
//         .matches(
//             REGEX_NUMBER,
//             'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//         )
//         .required(),
// });

// import { useState } from "react"
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/contactsSlice';
import { useCreateMutation } from 'redux/auth/apiSlice';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const FormAddContact = () => {
    const [ create ] = useCreateMutation()
    // console.log(create)
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const newContact = {
            name: form.get('name'),
            number: form.get('number'),            
        }

        event.target.reset()

        try {
            const regContact = await create(newContact)        
            // dispatch(addContact({...regContact}))
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
                    label="Phone number"
                    name="number"
                    type="text"
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
                    Create
                </Button>
            </Box>
        </Box>       
    </Container>
    </ThemeProvider>

    )
};





    // const dispatch = useDispatch();
    // const contacts = useSelector(selectContacts)

    // const sendContact = ({ name, number }, { resetForm }) => {       
    //     const newContact = { name, number };

    //     // check uniq contact
    //     if (!checkUniq(name)) {
    //         //send data to store
    //         dispatch(addContact(newContact));
    //         Notify.success('The contact has been sent to storage', {
    //             position: 'center-top',
    //         });
    //         resetForm();
    //     } else {
    //         Report.warning(
    //             'Sorry',
    //             'Not a unique contact - write a new one!',
    //             'Okay'
    //         );
    //     }
    // };

    // const checkUniq = name => {
    //     const newName = name.toLowerCase();
    //     return contacts.find(({ name }) => name.toLowerCase() === newName);
    // };

    // return (
    //     <p>form</p>
        // <Formik
        //     initialValues={{ name: '', number: '' }}
        //     onSubmit={sendContact}
        //     validationSchema={contactSchema}
        // >
        //     <Form autoComplete="off">
        //         <label>
        //             <IconContext.Provider value={{ className: 'global-icon' }}>
        //                 <RiContactsFill />
        //             </IconContext.Provider>
        //             Name:
        //             <Field type="text" name="name" />
        //             <ErrorMessage name="name" component={'span'} />
        //         </label>
        //         <label>
        //             <IconContext.Provider value={{ className: 'global-icon' }}>
        //                 <RiUserVoiceFill />
        //             </IconContext.Provider>
        //             Number:
        //             <Field type="tel" name="number" />
        //             <ErrorMessage name="number" component={'span'} />
        //         </label>
        //         <button type="submit">
        //             <IconContext.Provider value={{ className: 'global-icon' }}>
        //                 <RiUserFollowFill />
        //             </IconContext.Provider>
        //             Add contact
        //         </button>
        //     </Form>
        // </Formik>
    // );
