import { useDispatch } from "react-redux";
import { useCreateMutation, useGetContactsQuery } from 'redux/auth/apiSlice';
import { showFormAddContact } from 'redux/contacts/contactsSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { customRegex } from "components/regex";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledTextField, StyledButton } from "./FormAddContact.styled"
import { checkUniq } from 'components/checkUniq';

const DEFAULT_VALUES = {
    name: '',
    number: '',
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
        .required(),
    number: Yup.string()
        .trim()
        .matches(
            customRegex.number,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
});

export const FormAddContact = () => {
    const [ create ] = useCreateMutation()
    const { data } = useGetContactsQuery()
    const dispatch = useDispatch()

    const handleSubmit = async ({ name, number }, { resetForm }) => {
        const newContact = {
            name,
            number,
        }
   
        if (checkUniq(newContact.name, data)) {
            Report.warning(
                'Sorry',
                'Not a unique contact - write a new one!',
                'Okay'
            );
            return   
        }

        try {
            const userData = await create(newContact)    

            if ( userData?.data ) {
                Notify.success('The contact has been sent to storage', {
                    position: 'center-top',
                });
                dispatch(showFormAddContact(false))
                resetForm()   
                return
            }
    
            if ( userData?.error?.status === 400 ) {
                Notify.failure('Error creating contact', {
                    position: 'center-top',
                });
            }

            if ( userData?.error?.status === 401 ) {
                Notify.failure('Missing header with authorization token', {
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
                                title="min 2 symbols"  
                                label="Name"      
                                required          
                            />                                
                        </Grid>

                        <Grid item xs={12}>
                            <Field 
                                component={ StyledTextField }
                                name="number"
                                type="text"                                
                                fullWidth 
                                title="Example: 050-4838779; +972-50-4838779; +38(050)48 38 779"  
                                label="Phone number"      
                                required          
                            />                     
                        </Grid>                
                    </Grid>
                
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!(isValid && dirty)}
                        >
                        Create
                    </StyledButton>
                </Form> 
            )}   
        </Formik>  
    </Container>
    )
};