import { FormRegUser } from "../components/FormRegUser"
import { useSelector } from "react-redux";
import { selectCurrentToken } from '../redux/selectors';


export const Registration = () => {
    const token = useSelector(selectCurrentToken)
    console.log(token)
    return(     
        <>
        <p>token: {token}</p>
        <FormRegUser/>
        </>
    )
}