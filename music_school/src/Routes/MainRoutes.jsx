import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home'
import Courses from "../Pages/Courses";

const MainRoutes =()=>{

    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/courses' element={<Courses/>}/>
        </Routes>
        </>
    )
}
export default MainRoutes