import { useDispatch, useSelector} from "react-redux";
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from "redux/auth/apiSlice";
import { showFormAddContact } from 'redux/contacts/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { StyledList, StyledIconButton } from "./ContactList.styled"

export const ContactsList = () => {
    const {data, isLoading, error, isSuccess} = useGetContactsQuery()
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()

    const handleAddContact = ()=>{
        dispatch(showFormAddContact(true))
    }

    if(isLoading && !error){
        return (
            <b>Request in progress...</b>
        )
    }

    if (error){
        Notify.failure(error, { position: 'center-top' })
        return (    
            <>{!isLoading && <b>Error</b>}</>                         
        )
    }      

    if (isSuccess) {
        const findName = filter.toLowerCase();        

        const visibleContacts = data
            .filter(({ name }) => name.toLowerCase().includes(findName))
            .sort((firstContact, secondContact) => {
                return firstContact.name.localeCompare(secondContact.name)
            })
  
        return (
            <>
                <StyledIconButton 
                    aria-label="add" 
                    size="large"
                    onClick={handleAddContact}
                >
                    <PersonAddIcon/>
                </StyledIconButton>

                <Filter/>

                <StyledList>
                    {visibleContacts.length !== 0 && visibleContacts.map(item => <Contact key={item.id} contact={item}/>)}                        
                </StyledList>
            </>
        )   
    } 
}