import { useSelector} from "react-redux";
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from "redux/auth/apiSlice";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';

export const ContactsList = () => {
    const {data, isLoading, error, isSuccess} = useGetContactsQuery()
    const filter = useSelector(selectFilter)

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
        const visibleContacts = data.filter(({ name }) =>
            name.toLowerCase().includes(findName));
 
        return (
            <div>
                <Filter/>
                <ul>
                    {visibleContacts.length !== 0 && visibleContacts.map(item => <Contact key={item.id} contact={item}/>)}                        
                </ul>
            </div>
        )   
    } 
}