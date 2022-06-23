import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/signup.css"

const Signup = () => {

    const [data, setdata] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

    const handleChange = () =>{

    }

    const handleSubmit = () => {

    }
    return (
        <div>
            <form className="signupform" onSubmit={handleSubmit}>
				<h1>Create Account</h1>
				<input
					type="text"
					placeholder="First Name"
					name="firstName"
					onChange={handleChange}
					value={data.firstName}
					required
					className="signupinputs"
				/><br></br>
				<input
					type="text"
                    placeholder="Last Name"
					name="lastName"
					onChange={handleChange}
					value={data.lastName}
					required
					className="signupinputs"
				/><br></br>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					value={data.email}
					required
					className="signupinputs"
				/><br></br>
				<input
                	type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
					value={data.password}
					required
                    className="signupinputs"
				/><br></br>
				<button type="submit" className="submitbtn">
					Sing Up
				</button><br></br>
                <p>Have a account  ?</p>
					<Link to="/login">
						<button type="button" className="signupbtn">
							Sing In
						</button>
					</Link>
			</form>
        </div>
    );
};

export default Signup;