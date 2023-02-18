import { useSelector } from "react-redux";
import { selectCurrentUser } from '../redux/selectors'; 
import { useGetContactsQuery } from "redux/auth/apiSlice";

const Profile = () => {
    const user = useSelector(selectCurrentUser)
    const {data, isSuccess} = useGetContactsQuery()
    
    if (isSuccess) {
        return (<>        
            <p>User name: <b>{user.name}</b></p>
            <p>User email: <b>{user.email}</b></p>
            <p>Total contacts: <b>{data.length}</b></p>
        </>)
    }   
}

export default Profile