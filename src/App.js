<<<<<<< Updated upstream
import './App.css';
import Landingpg from './components/Landingpg'
function App() {
  return (
    <div className="App">
      <Landingpg />
=======
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
=======
import './App.css';
import Landingpg from './components/Landingpg'
>>>>>>> 998a94412fd5642c999e962b12fc3c22b04054cd
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
