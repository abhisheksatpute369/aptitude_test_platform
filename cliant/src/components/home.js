import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import "../css/home.css"
const Home = () => {

    const [exam, setexam] = useState([]);
    const handleselect = (e) =>{
        const selected = e.target.value;
        if(selected === "neet")
        {
            setexam(["NEET Physics", "NEET Chemistry", "NEET Biology"])
        }
        else if(selected === "jeemain")
        {
            setexam(["JEE Physics", "JEE Chemistry", "JEE Biology"])
        }
        else if(selected === "jeeadvance")
        {
            setexam(["ADV Physics", "ADV Chemistry", "ADV Biology"])
        }
    }

    const handleexam = (e) =>{
        const examselected = e.target.value;
        console.log(examselected)
    }
    return (
        <div id="homecontainer">
            <Navbar />
            <div className='examselect'>
                <p>Select your paper</p>
                <select className='selectpaper' onChange={handleselect}>
                    <option>--Select--</option>
                    <option value="neet">NEET</option>
                    <option value="jeemain">JEE Main</option>
                    <option value="jeeadvance">JEE Advance</option>
                </select>
                <p>Select your exam</p>
                <select className='selectexam' onChange={handleexam}>
                    <option >--Select--</option>
                    {
                        exam.map((event)=>{
                            return(
                                <option key={event} value={event}>{event}</option>
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