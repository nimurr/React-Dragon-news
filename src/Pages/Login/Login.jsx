import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


export default function Login() {
    const {signIn}= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email , password)
        .then(result => {
            // console.log('successfully done' , result)
            navigate(location.state ? location.state : '/')
        })
        .catch(error => {
            console.log('email and password is not match')
        })


    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New user Need to <Link className="text-blue-500 font-semibold" to='/register'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
