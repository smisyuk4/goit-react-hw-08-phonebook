import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { changeContact } from "../../redux/contacts/contactsSlice" // deleteContact, 
import { useRemoveMutation } from "../../redux/auth/apiSlice" //useChangeMutation
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
    const { id, name, number } = contact;
    const [ remove ] = useRemoveMutation()
    const dispatch = useDispatch()

    const handleDeleteContact = async ()=>{
        try{
            await remove(id)

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
            {name}: {number}
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