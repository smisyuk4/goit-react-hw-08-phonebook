import { useSelector } from "react-redux";
import { selectCurrentUser } from '../redux/selectors'; 

const Profile = () => {
    const user = useSelector(selectCurrentUser)
    return (<>
        <p>user name: <b>{user.name}</b></p>
        <p>total contacts: <b>{100500}</b></p>
    </>)
}

export default Profile