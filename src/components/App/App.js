import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom"
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
import { setCurrent } from 'redux/auth/authSlice';
import { Header } from "components/Header";
import { Home, Registration, Login, Profile, Contacts } from "../../pages"

export const App = () => {
  const { data } = useGetCurrentQuery()
  const dispatch = useDispatch()

  useEffect(()=>{   
      dispatch(setCurrent({...data}))    
  },[dispatch, data, ]) 

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
