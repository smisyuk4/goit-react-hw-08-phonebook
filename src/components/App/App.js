import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
import { setCurrent } from "redux/auth/authSlice";
import { selectCurrentToken } from 'redux/selectors'
import { Header } from "components/Header";
import { Home, Registration, Login, Profile, Contacts } from "../../pages"

export const App = () => {
  const token = useSelector(selectCurrentToken)
  const { data } = useGetCurrentQuery('', {skip: token === null})
  const dispatch = useDispatch()

  useEffect(()=>{
    if (token){
      dispatch(setCurrent(data))
    }
  },[dispatch, data, token])

  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
  );
};
