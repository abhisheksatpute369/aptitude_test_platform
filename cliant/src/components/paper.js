import React from 'react';
import "../css/paper.css"

const Paper = ({user, selectedexam, selectedpaper}) => {
    if(selectedexam === "1"){
        var finalexam = "NEET Physics";
    }
    if(selectedexam === "2"){
        var finalexam = "NEET Chemistry";
    }
    if(selectedexam === "3"){
        var finalexam = "NEET Biology";
    }
    if(selectedexam === "4"){
        var finalexam = "JEE Physics";
    }
    if(selectedexam === "5"){
        var finalexam = "JEE Chemistry";
    }
    if(selectedexam === "6"){
        var finalexam = "JEE Biology";
    }
    if(selectedexam === "7"){
        var finalexam = "ADV Physics";
    }
    if(selectedexam === "8"){
        var finalexam = "ADV Chemistry";
    }
    if(selectedexam === "9"){
        var finalexam = "ADV Biology";
    }


    return (
        <div>
            <div id="paperupper">
                <div>
                    <p>Name : <i>{user.firstName} {user.lastName}</i><br></br>
                    Exam : <i>{selectedpaper}</i><br></br>
                    Subject : <i>{finalexam}</i></p>
                </div>
                <div>Timer</div>
                <div>
                    <button id="papersubmitbtn">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Paper;