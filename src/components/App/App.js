import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import { RestrictedRoute } from 'components/RestrictedRoute'
import { PrivateRoute } from 'components/PrivateRoute'

const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));
const Registration = lazy(() => import("pages/Registration"));
const Login = lazy(() => import("pages/Login"));
const Profile = lazy(() => import("pages/Profile"));
const Contacts = lazy(() => import("pages/Contacts"));
const Error = lazy(() => import("pages/Error"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="registration" element={<RestrictedRoute component={<Registration/>} redirectTo='/contacts'/>}/>
          <Route path="login" element={<RestrictedRoute component={<Login/>} redirectTo='/contacts'/>}/>
          
          <Route path="profile" element={<PrivateRoute component={<Profile/>} redirectTo='/login'/>}/>
          <Route path="contacts" element={<PrivateRoute component={<Contacts/>} redirectTo='/login'/>}/>
          <Route path="*" element={<Error />} />
        </Route>   
      </Routes>
    </Suspense>
  );
};
