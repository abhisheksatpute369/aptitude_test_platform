import React from 'react';
import "../css/navbar.css" 
const Navbar = ({user}) => {
    return (
        <div className='navbarcontainer'>
            <div><h2>MOCK TEST</h2></div>
            <div>welcome! {user.firstName}</div>
        </div>
    );
};

export default Navbar;