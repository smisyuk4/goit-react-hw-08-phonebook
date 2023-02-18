import { useCreateMutation, useGetContactsQuery } from 'redux/auth/apiSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledTextField, StyledButton } from "./FormAddContact.styled"
import { checkUniq } from 'components/checkUniq';

const DEFAULT_VALUES = {
    name: '',
    number: '',
}

const REGEX_NAME = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const REGEX_NUMBER =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const VALIDATION_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short! Min 2 symbols')
        .max(20, 'Too Long! Max 20 symbols')
        .matches(
            REGEX_NAME,
            'Name may contain only letters, apostrophe, dash and spaces'
        )
        .required(),
    number: Yup.string()
        .matches(
            REGEX_NUMBER,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
});

export const FormAddContact = () => {
    const [ create ] = useCreateMutation()
    const { data } = useGetContactsQuery()

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
                                title="must be digits and can contain spaces..."  
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