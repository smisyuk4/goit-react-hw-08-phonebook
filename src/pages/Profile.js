import { useSelector } from "react-redux";
import { selectCurrentUser } from '../redux/selectors'; 

export const Profile = () => {
    const user = useSelector(selectCurrentUser)
    return (
        <p>{user.name}</p>
    )
}