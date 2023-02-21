import { useDispatch, useSelector } from "react-redux";
import { clearChange } from 'redux/contacts/contactsSlice';
import { useChangeMutation, useGetContactsQuery } from 'redux/auth/apiSlice';
import { selectItemChange } from 'redux/selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { customRegex } from "components/regex";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledTextField, StyledButton } from "./FormChangeContact.styled"
import { checkUniq } from "components/checkUniq";

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
        .min(6, 'Too Short! Min 6 symbols')
        .max(18, 'Too Long! Max 18 symbols')
        .matches(
            customRegex.number,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
});

export const FormChangeContact = () => {
    const [ change ] = useChangeMutation()
    const { data } = useGetContactsQuery()
    const {id, name, number} = useSelector(selectItemChange)
    const dispatch = useDispatch()

    const handleSubmit = async ({ name: oldName, number: oldNumber }, { resetForm }) => {
        const newContact = {
            id,
            name: oldName,
            number: oldNumber,
        }  
        
        if (checkUniq(newContact.name, data)) {   
            Report.warning(
                'Attention',
                'Not a unique contact - write a new name!',
                'Okay');
            return
        }

        try {           
            const userData = await change(newContact)  

            if ( userData?.data ) {
                Notify.success('The contact has been change in storage',
                    { position: 'center-top' })  
                dispatch(clearChange())
                resetForm()  
                return
            }

            if ( userData?.error?.status === 400 ) {
                Notify.failure('Contact update failed', {
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


    }

    return (
        <Container component="main" maxWidth="xs">
            <Formik
                initialValues={{ name, number }}
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
                            Change
                        </StyledButton>
                    </Form> 
                )}
            </Formik>      
        </Container>
    )
};