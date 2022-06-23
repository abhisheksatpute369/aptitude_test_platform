import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
    const [data, setdata] = useState({email : "", password : ""})
    const handleChange = () => {

    }

    const handleSubmit = () => {


    }

    return (
        <div>
            <div id="container">
            <form className="loginform" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="inputs"
						/><br></br>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="inputs"
						/><br></br>
						
						<Link to ="/home">
							<button type="submit" className="submitbtn">
								Sing In
							</button><br></br>
						</Link>
                        <p>New Here ?</p>
                        <Link to="/signup">
                            <button type="button" className="signupbtn">
                                Sing Up
                            </button>
                        </Link>
					</form>
            </div>
        </div>
    );
};

export default Login;