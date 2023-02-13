// import { useSelector } from "react-redux"; //useDispatch
// import { addContact } from "../../redux/operations"
// import { selectContacts } from 'redux/selectors';
// import {Form, Field, Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
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

import { useCreateMutation, useGetContactsQuery } from 'redux/auth/apiSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { StyledTextField, StyledButton } from "./FormAddContact.styled"

export const FormAddContact = () => {
    const [ create ] = useCreateMutation()
    const { data } = useGetContactsQuery()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const newContact = {
            name: form.get('name'),
            number: form.get('number'),            
        }

            // check uniq contact
        if (!checkUniq(newContact.name, data)) {
            try {
                await create(newContact)                
                Notify.success('The contact has been sent to storage', {
                                position: 'center-top',
                            });
            } catch (error){
                console.log(error)
            }
            event.target.reset()
        } else {
            Report.warning(
                'Sorry',
                'Not a unique contact - write a new one!',
                'Okay'
            );
        }
    };

    return (     
    <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <StyledTextField                    
                name="name"
                type="text"
                required
                fullWidth 
                label="Name"
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
                Create
            </StyledButton>
        </Box>
    </Container>
    )
};

const checkUniq = (name, data) => {
    const newName = name.toLowerCase();
    return data.find(({ name }) => name.toLowerCase() === newName);
};
    
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
