import { FormRegUser } from "../components/FormRegUser"
import { useSelector } from "react-redux";
import { getToken } from '../redux/selectors';


export const Registration = () => {
    const token = useSelector(getToken)
    console.log(token)
    return(     
        <>
        <p>token: {token}</p>
        <FormRegUser/>
        </>
    )
}