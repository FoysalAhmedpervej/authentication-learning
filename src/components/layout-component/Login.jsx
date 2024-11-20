import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  border-red-700 flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login your account</h1>
          </div>
          <div className="divider"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                <label className="label text-center">
                <p>Don&#39;t have an account?
                  <Link to="/auth/register"><a href="#" className="label-text-alt link text-[#FF8C47] ml-2">Register</a></Link></p>
                </label>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;