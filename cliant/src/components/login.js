import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import Navbarlogin from './navbarlogin';
import Footer from './footer';

const Login = ({setloginuser}) => {
    const [data, setdata] = useState({email : "", password : ""})
    const Navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({...data, [name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = "http://localhost:9002/login";
        await axios.post(url, data)
        .then(res => {
            alert(res.data.messege)
            setloginuser(res.data.user)
            // history.push("/home")
            // window.location = "/home"
            Navigate("/home");
        })
    }

    return (
        <div>
            <Navbarlogin />
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
						
						{/* <Link to ="/home"> */}
							<button type="submit" className="submitbtn">
								Sing In
							</button><br></br>
						{/* </Link> */}
                        <p>New Here ?</p>
                        <Link to="/signup">
                            <button type="button" className="signupbtn">
                                Sing Up
                            </button>
                        </Link>
					</form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;