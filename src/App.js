import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import UserView from "./components/UserView";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/userview" element={<UserView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
