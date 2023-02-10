import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice"
import PropTypes from 'prop-types';
import { useRemoveMutation } from "../../redux/auth/apiSlice"
// import { IconContext } from 'react-icons';
// import { RiUserUnfollowFill } from 'react-icons/ri';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
    const [ remove ] = useRemoveMutation()
    // console.log(remove)
    const dispatch = useDispatch()

    const { id, name, number } = contact;

    const handleDeleteContact = async ()=>{
        try{
            const data = await remove(id)
            console.log(data)
            dispatch(deleteContact(data))

             // Notify.success(
        //     'The contact has been delete from storage',
        //     { position: 'center-top' })
        } catch(error){
            console.log(error)
        } 
    }

    return (
        <li>
            {name}: {number} : {id}
            <button
                type="button"
                onClick={handleDeleteContact}
            >
                {/* <IconContext.Provider value={{ className: 'global-icon' }}>
                    <RiUserUnfollowFill />
                </IconContext.Provider> */}
                Remove
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