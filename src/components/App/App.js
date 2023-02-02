import { Routes, Route } from "react-router-dom"
import { Header } from "components/Header";
import { Home, Registration, Login } from "../../pages"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  );
};
