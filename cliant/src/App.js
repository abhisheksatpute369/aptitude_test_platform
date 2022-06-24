import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from "./components/home";
import Instruction from "./components/instruction";
import { useState } from "react";

function App() {
  const [user, setloginuser] = useState({});
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login setloginuser={setloginuser}/>} />
        { user && user._id && <Route path="/home" exact element={<Home user={user}/>} />}
        <Route path="/instruction" exact element={<Instruction user={user}/>}/>
		</Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
