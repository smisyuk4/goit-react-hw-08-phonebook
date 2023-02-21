import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { changeContact } from "../../redux/contacts/contactsSlice" 
import { useRemoveMutation } from "../../redux/auth/apiSlice" 
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledItem, StyledContact, StyledControlCameraIcon, StyledButton} from "./Contact.styled"

Confirm.init({
        // border: 2px solid <<<<<<<<< index.css,
        borderRadius: '5px',
        titleColor: 'black',
        okButtonColor: 'white',
        okButtonBackground: 'skyblue',
    });

export const Contact = ({ contact }) => {
    const { id, name, number } = contact;
    const [ remove ] = useRemoveMutation()
    const dispatch = useDispatch()

    const handleDeleteContact =  ()=>{
        Confirm.show(
            'Remove confirm',
            'Do you realy want remove it?',
            'Yes',
            'No',
            async () => {
                try{
                    await remove(id)
                    Notify.success(
                    'The contact has been remove from storage',
                    { position: 'center-top' })           
                } catch(error){
                    console.log(error)
                } 
            },
            () => {
                Notify.info('The remove operation has stopped',
                { position: 'center-top' });
            }
        );      
    }

    const handleChangeContact = async ()=>{
        dispatch(changeContact(contact))
    }

    return (
        <StyledItem>
            <StyledContact>
                <StyledControlCameraIcon/>
                {name}: {number}
            </StyledContact>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <StyledButton
                aria-label="delete" 
                onClick={handleDeleteContact}
                >
                    <DeleteIcon/>
            </StyledButton>
            <StyledButton 
                aria-label="change"
                onClick={handleChangeContact}
                >
                    <EditIcon/>
                </StyledButton>
            </ButtonGroup>           
        </StyledItem>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,            
          ]),
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};