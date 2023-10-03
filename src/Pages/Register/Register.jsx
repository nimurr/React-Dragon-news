import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Register() {

    const {createUser}= useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = from.get('name');
        const photo = from.get('photoUrl');
        const email = from.get('email');
        const password = from.get('password');
        // console.log(email, password,name, photo)
        createUser(email, password)
        .then(result => {
            console.log(result, 'successFully done')
        })
        .catch(error => {
            console.log(error , 'error')
        })


        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card flex-shrink-0  max-w-md w-full md:w-4/12 mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                    <p>You Have Already register ? <Link className="text-blue-500 font-semibold" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
