// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useGetContactsQuery } from "redux/auth/apiSlice";
// import { setContacts } from "../../redux/contacts/contactsSlice"
// import { selectVisibleContacts } from 'redux/selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';



export const ContactsList = () => {
    const {data, isLoading, error, isSuccess} = useGetContactsQuery() //
    console.log(data)
    console.log(!isSuccess)
    // const visibleContacts = useSelector(selectVisibleContacts)
    // console.log(visibleContacts)
    // const dispatch = useDispatch();
    
    // useEffect(() => {
        // dispatch(setContacts({data, isLoading, error}));     
    // }, [dispatch, data, isLoading, error]);

    if(isLoading && !error){
        return (
            <b>Request in progress...</b>
        )
    }

    if (error){
        // Notify.failure(error, { position: 'center-top' })

        return (    
            <>{!isLoading && <b>Error</b>}</>                         
        )
    }

    if (isSuccess) {
        return (
            <ul>
             {data.length !== 0 && 
                data.map(item => <Contact key={item.id} contact={item}/>)}
            </ul>
        )   
    }
   
}