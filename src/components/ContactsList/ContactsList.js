import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetContactsQuery } from "redux/auth/apiSlice";
import { setContacts } from "../../redux/contacts/contactsSlice"
import { selectVisibleContacts, selectIsLoading, selectError } from 'redux/selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';



export const ContactsList = () => {
    const {data, isLoading, error} = useGetContactsQuery()
    const visibleContacts = useSelector(selectVisibleContacts)
    const isLoadingS = useSelector(selectIsLoading)
    const errorS = useSelector(selectError)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setContacts({data, isLoading, error}));     
    }, [dispatch, data, isLoading, error]);

    if(isLoadingS && !errorS){
        return (
            <b>Request in progress...</b>
        )
    }

    if (errorS){
        // Notify.failure(error, { position: 'center-top' })

        return (    
            <>{!isLoadingS && <b>Error</b>}</>                         
        )
    }

    return (<ul>
            {visibleContacts.length !== 0 && 
                visibleContacts.map(item => <Contact key={item.id} contact={item}/>)}
            </ul>
    )    
}