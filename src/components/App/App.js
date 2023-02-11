import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
import { setCurrent } from "redux/auth/authSlice";
import { selectCurrentToken } from 'redux/selectors'

const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));
const Registration = lazy(() => import("pages/Registration"));
const Login = lazy(() => import("pages/Login"));
const Profile = lazy(() => import("pages/Profile"));
const Contacts = lazy(() => import("pages/Contacts"));
const Error = lazy(() => import("pages/Error"));

export const App = () => {
  // useGetCurrentQuery()
  const token = useSelector(selectCurrentToken)
  const { data } = useGetCurrentQuery('', {skip: token === null})
  const dispatch = useDispatch()

  useEffect(()=>{
    if (token){
      dispatch(setCurrent(data))
    }
  },[dispatch, data, token])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
