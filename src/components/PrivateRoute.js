import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/selectors"

export const PrivateRoute = ({component, redirectTo}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return !isLoggedIn ? <Navigate to={redirectTo}/> : component
}