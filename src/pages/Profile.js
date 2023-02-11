import { useSelector } from "react-redux";
import { selectCurrentUser } from '../redux/selectors'; 

const Profile = () => {
    const user = useSelector(selectCurrentUser)
    return (
        <p>{user.name}</p>
    )
}

export default Profile