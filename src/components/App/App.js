import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"; //useState
import { useGetCurrentQuery } from 'redux/auth/apiSlice'; 
import { setCurrent } from "redux/auth/authSlice";
import { selectCurrentToken } from 'redux/selectors'
import { Header } from "components/Header";
import { Home, Registration, Login, Profile, Contacts } from "../../pages"

export const App = () => {
  const token = useSelector(selectCurrentToken)
  console.log(token)
  // const [isSkip, setIsSkip] = useState(true)
  // const {data, isSuccess} = useGetCurrentQuery()//'', isSkip
  console.log("token === null ", token === null)
    const {data, isSuccess} = useGetCurrentQuery('', {skip: token === null})//'', isSkip
  console.log(data, isSuccess)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log('token inside - effect: ', token)
    if (token){
      console.log('token inside - if: ', token)
      dispatch(setCurrent(data))
    }

    // setIsSkip(prev => !prev)
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
