import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from "./components/home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
		</Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
