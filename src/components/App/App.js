import { Routes, Route } from "react-router-dom"
// import { useSelector } from 'react-redux'
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
// import { selectCurrentToken } from 'redux/selectors'
import { Header } from "components/Header";
import { Home, Registration, Login, Profile, Contacts } from "../../pages"

export const App = () => {
  // const token = useSelector(selectCurrentToken)
  useGetCurrentQuery()//'', {skip: token === ''}

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
