import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn, selectCurrentToken } from "redux/selectors"
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
import { setCurrent } from "redux/auth/authSlice";

export const PrivateRoute = ({component, redirectTo}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const token = useSelector(selectCurrentToken)
    const { data } = useGetCurrentQuery('', {skip: token === null})
    const dispatch = useDispatch()
  
    useEffect(()=>{
      if (token){
        dispatch(setCurrent(data))
      }
    },[dispatch, data, token])

    return !isLoggedIn ? <Navigate to={redirectTo}/> : component
}