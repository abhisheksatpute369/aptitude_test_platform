import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import "../css/home.css"
const Home = ({user, setselectedexam, setselectedpaper}) => {

    const [exam, setexam] = useState([]);
    const handleselect = (e) =>{
        const selected = e.target.value;
        setselectedpaper(e.target.value)
        if(selected === "NEET")
        {
            // setexam(["NEET Physics", "NEET Chemistry", "NEET Biology"])
            setexam([{id:"1", value:"NEET Physics"},{id:"2", value:"NEET Chemistry"},{id:"3", value:"NEET Biology"}])
        }
        else if(selected === "JEE Main")
        {
            // setexam(["JEE Physics", "JEE Chemistry", "JEE Biology"])
            setexam([{id:"4", value:"JEE Physics"},{id:"5", value:"JEE Chemistry"},{id:"6", value:"JEE Biology"}])
        }
        else if(selected === "JEE Advance")
        {
            // setexam(["ADV Physics", "ADV Chemistry", "ADV Biology"])
            setexam([{id:"7", value:"ADV Physics"},{id:"8", value:"ADV Chemistry"},{id:"9", value:"ADV Biology"}])
        }
    }

    const handleexam = (e) =>{
        const examselected = e.target.value;
        setselectedexam(e.target.value);
        console.log(examselected)
        
    }
    return (
        <div id="homecontainer">
            <Navbar user = {user}/>
            <div className='examselect'>
                <p>Select your paper</p>
                <select className='selectpaper' onChange={handleselect}>
                    <option>--Select--</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advance">JEE Advance</option>
                </select>
                <p>Select your exam</p>
                <select className='selectexam' onChange={handleexam}>
                    <option >--Select--</option>
                    {
                        exam.map((event)=>{
                            return(
                                <option key={event.id} value={event.id}>{event.value}</option>
                            )
                        })
                    }
                </select>
                <Link to="/instruction">
                    <button className='starttest'>START TEST</button>
                </Link>
            </div>
            <h2 id="homemessege">Welcome Folk! please select your Exam and start MOCK TEST </h2>
            <div id="line"></div>
        </div>
    );
};

export default Home;