import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { deleteContact, changeContact } from "../../redux/contacts/contactsSlice"
import { useRemoveMutation, useChangeMutation } from "../../redux/auth/apiSlice"
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
    const [ remove ] = useRemoveMutation()
    const [ change ] = useChangeMutation()
    // console.log(remove)
    const dispatch = useDispatch()

    const { id, name, number } = contact;

    const handleDeleteContact = async ()=>{
        try{
            const data = await remove(id)
            dispatch(deleteContact(data))

             // Notify.success(
        //     'The contact has been delete from storage',
        //     { position: 'center-top' })
        } catch(error){
            console.log(error)
        } 
    }

    const handleChangeContact = async ()=>{
        dispatch(changeContact(contact))
    }

    return (
        <li>
            {name}: {number} : {id}
            <button
                type="button"
                onClick={handleDeleteContact}
            >
                Remove
            </button>
            <button
                type="button"
                onClick={handleChangeContact}
            >
                Change
            </button>
        </li>
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