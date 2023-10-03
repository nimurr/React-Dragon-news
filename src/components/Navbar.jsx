import { Link, NavLink } from "react-router-dom"
import userImg from '../assets/user.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

export default function Navbar() {
    const { user,logOut } = useContext(AuthContext);

    // console.log(user)
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch( alert('logout success fully'))
    }

    const navList = <>
        <li className="mr-4 cursor-pointer"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-4 cursor-pointer"><NavLink>About</NavLink></li>
        <li className="mr-4 cursor-pointer"><NavLink>Career</NavLink></li>
    </>
    return (
        <div className="my-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-10 mr-2" src={userImg} alt="" />
                    {
                        !user ?
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link> : 
                        <button className="btn capitalize" onClick={handleLogOut}>LogOut</button>
                    }
                </div>
            </div>
        </div>
    )
}
