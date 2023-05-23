import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Userview from "./components/Userview";
import Adminview from "./components/Adminview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/userview" element={<Userview />}></Route>
          <Route path="/adminview" element={<Adminview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
