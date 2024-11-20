import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext);

    const handleSubmit =(e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name,photo,email,password);
        createNewUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login your account</h1>
          </div>
          <div className="divider"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="enter photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox" className="checkbox" />
    <span className="label-text">Accept Terms and conditions</span>
  </label>
</div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
                <label className="label text-center">
                <p>Already have an account?
                  <Link to="/auth/login"><a href="#" className="label-text-alt link text-[#FF8C47] ml-2">Login</a></Link></p>
                </label>
                
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;