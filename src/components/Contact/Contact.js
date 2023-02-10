import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/operations"
import PropTypes from 'prop-types';
// import { IconContext } from 'react-icons';
// import { RiUserUnfollowFill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
    // const dispatch = useDispatch()

    // const { id, name, number } = contact;

    // const handleDeleteContact = ()=>{
    //     dispatch(deleteContact(id))

    //     Notify.success(
    //         'The contact has been delete from storage',
    //         { position: 'center-top' })
    // }

    return (
        <li> item </li>
        // <li>
        //     {name}: {number}
        //     <button
        //         type="button"
        //         onClick={handleDeleteContact}
        //     >
        //         <IconContext.Provider value={{ className: 'global-icon' }}>
        //             <RiUserUnfollowFill />
        //         </IconContext.Provider>
        //         Remove
        //     </button>
        // </li>
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