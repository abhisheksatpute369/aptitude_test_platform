import React from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import "../css/instruction.css"

const Instruction = ({user}) => {

    const Navigate = useNavigate();

    // function for cheking student accept all instructions 
    const starttest = () => {
        const check = document.getElementById("instructioncheckbox");
        if(!check.checked)
        {
            alert("accept all instructions");
        }
        else{
            Navigate("/paper");
        }
    }
    return (
        <div>
            <Navbar user={user}/>
            <h3 id="instructionhead">Read Instructions Carefully</h3>
            <div className='instructioncontainer'>
                <h4 id="instructiontitle">General Instruction:</h4>
                <ol>
                    <li>Total diration for your test is 50 minuts.</li>
                    <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                    <li>The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</li>
                    <ul>
                        <li>You have not visited the question yet.</li>
                        <li>You have answered the question.</li>
                    </ul>
                </ol>
                <h4 id="instructiontitle">Navigating to a question:</h4>
                <p>To answer a question, do the following:</p>
                <ol>
                    <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question</li>
                    <li>Click on Save & Next to save your answer for the current question and then go to the next question.</li>
                </ol>
                <h4 id="instructiontitle">Answering a question:</h4>
                <p>Procedure for answering a multiple choice type question:</p>
                <ol>
                    <li>To select you answer, click on the button of one of the options.</li>
                    <li>To deselect your chosen answer, click on the button of the chosen option again.</li>
                    <li>To change your chosen answer, click on the button of another option.</li>
                    <li>To save your answer, you MUST click on the Save & Next button.</li>
                    <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
                </ol>
                <p id="instructionwarning">Please note all questions will appear in your default language.</p>
                <div id="acceptcondition">
                    <input type="checkbox" id="instructioncheckbox" ></input>
                    <p>I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations</p>
                </div>
                <button id="instructionstartbutton" onClick={starttest}>START TEST</button>

            </div>
            {/* <div className='instructionpopup'></div> */}

        </div>
    );
};

export default Instruction;