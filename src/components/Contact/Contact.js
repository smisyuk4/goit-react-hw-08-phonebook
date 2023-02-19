import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { changeContact } from "../../redux/contacts/contactsSlice" // deleteContact, 
import { useRemoveMutation } from "../../redux/auth/apiSlice" //useChangeMutation
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledItem, StyledContact, StyledControlCameraIcon, StyledButton} from "./Contact.styled"

export const Contact = ({ contact }) => {
    const { id, name, number } = contact;
    const [ remove ] = useRemoveMutation()
    const dispatch = useDispatch()

    const handleDeleteContact = async ()=>{
        try{
            await remove(id)
            Notify.success(
            'The contact has been remove from storage',
            { position: 'center-top' })
        } catch(error){
            console.log(error)
        } 
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