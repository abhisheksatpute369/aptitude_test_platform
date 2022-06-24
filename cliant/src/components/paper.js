import React, { useEffect, useState } from 'react';
import "../css/paper.css"
import questions from "../question.json"

const Paper = ({user, selectedexam, selectedpaper}) => {

    const [minuts, setminuts] = useState(49);
    const [seconds, setseconds] = useState(60);
    const [currentquestion, setcurrentquestion] = useState(0);
    const [correctanswer, setcorrectanswer] = useState(false);
    const [score, setscore] = useState(0);
   
    
    const handlenext = ()=>{
        if(currentquestion < questions.length-1)
        {
            setcurrentquestion(currentquestion + 1);
        }
    }

    // //for handle previous button click
    const handleprevious = ()=>{
        if(currentquestion > 0)
        {
            setcurrentquestion(currentquestion - 1);
        }
    }

    //for handle option clicked
    const handleoptionclick = (e) => {
        const clickedoption = e.target.value;
        if(questions[currentquestion].answer === clickedoption)
        {
            setcorrectanswer(true);
        }
        else{
            setcorrectanswer(false);
        }
    }

    //for handle save button
    const handlesave = () =>{
        if(correctanswer === true)
        {
            setscore(score + 1);
            console.log(score);
        }
        alert("saved proceed next")
    }
    
    

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

    // for getting submit pop up after clicking submit button 
    const submitpopup = () =>{
        document.getElementById("submitmodel").style.visibility = "visible";
    }
    const canclepopup = () =>{
        document.getElementById("submitmodel").style.visibility = "hidden";
    }
    // for getting questions ffrom backend 
    // useEffect(()=>{
    //     getquestion();
    // },[]);

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
                    <button id="papersubmitbtn" onClick={submitpopup}>Submit</button>
                </div>
            </div>
            <div id="papermiddle">
                <div id="paperleft">
                    <h3>Question: {questions[currentquestion].number}</h3>
                    <div id="question">
                        <div id="questionquestion">                        
                            <p>{questions[currentquestion].question}</p>
                        </div>
                        <div id="questionoptions">
                            <div className='demooptions'>1: {questions[currentquestion].optionA}</div>
                            <div className='demooptions'>2: {questions[currentquestion].optionB}</div>
                            <div className='demooptions'>3: {questions[currentquestion].optionC}</div>
                            <div className='demooptions'>4: {questions[currentquestion].optionD}</div>
                        </div>
                    </div>
                    <h3>Choose option:</h3>
                    <div id="choseoption">
                        <div>1:<input type="radio" name='op' value="1" onChange={handleoptionclick}></input></div>
                        <div>2:<input type="radio" name='op' value="2" onChange={handleoptionclick}></input></div>
                        <div>3:<input type="radio" name='op' value="3" onChange={handleoptionclick}></input></div>
                        <div>4:<input type="radio" name='op' value="4" onChange={handleoptionclick}></input></div>
                    </div>
                </div>
                {/* <div id="paperright"></div> */}
            </div>
            <div id="lowerbuttons">
                <button className='paperbutton' id="previous" onClick={handleprevious}>PREVIOUS</button>
                <button className='paperbutton' id="saveanswer" onClick={handlesave}>SAVE</button>
                <button className='paperbutton' id="next" onClick={handlenext}>NEXT</button>
            </div>
            <div id="submitmodel">
                <h2>Confirm !</h2>
                <p>Do you want to submit</p>
                <div id="twobuttons">
                    <button id="sumbitwarning">YES</button>
                    <button id="sumbitwarning" onClick={canclepopup}>NO</button>
                </div>
                
            </div>
        </div>
    );
};

export default Paper;