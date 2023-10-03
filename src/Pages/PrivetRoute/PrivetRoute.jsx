import { Children, useContext } from "react"
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

 
export default function PrivetRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation(); 
    console.log(location)


    if(loading){
        return <span className="loading loading-spinner  w-[50px] block my-40 mx-auto"></span>;
    }
    if(user) {
        return children;
    }

  return <Navigate state={location.pathname} to='/login'></Navigate>
}
