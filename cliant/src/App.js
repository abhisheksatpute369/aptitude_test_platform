import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
		</Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
