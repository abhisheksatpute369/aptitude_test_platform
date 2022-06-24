import React, { useEffect, useState } from 'react';
import "../css/paper.css"

const Paper = ({user, selectedexam, selectedpaper}) => {

    const [minuts, setminuts] = useState(49);
    const [seconds, setseconds] = useState(60);

    //for setting exam name on navbar of paper page
    var finalexam;
    if(selectedexam === "1"){
        finalexam = "NEET Physics";
    }
    if(selectedexam === "2"){
        finalexam = "NEET Chemistry";
    }
    if(selectedexam === "3"){
        finalexam = "NEET Biology";
    }
    if(selectedexam === "4"){
        finalexam = "JEE Physics";
    }
    if(selectedexam === "5"){
        finalexam = "JEE Chemistry";
    }
    if(selectedexam === "6"){
        finalexam = "JEE Biology";
    }
    if(selectedexam === "7"){
        finalexam = "ADV Physics";
    }
    if(selectedexam === "8"){
        finalexam = "ADV Chemistry";
    }
    if(selectedexam === "9"){
        finalexam = "ADV Biology";
    }

    // for setting time on navbar 
    var timer;
    useEffect(()=>{
        timer = setInterval(()=>{
            setseconds(seconds-1);
            if(seconds === 1)
            {
                setminuts(minuts-1);
                setseconds(60);
            }
            if(minuts === 0)
            {    
                clearInterval(timer);
                setminuts(0);
                setseconds(0);
            }
        }, 1000)
        return ()=> clearInterval(timer)
    })
    // timer end 

    return (
        <div>
            <div id="paperupper">
                <div>
                    <p>Name : <i>{user.firstName} {user.lastName}</i><br></br>
                    Exam : <i>{selectedpaper}</i><br></br>
                    Subject : <i>{finalexam}</i></p>
                </div>
                <div id="papertimer">{minuts} : {seconds}</div>
                <div>
                    <button id="papersubmitbtn">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Paper;