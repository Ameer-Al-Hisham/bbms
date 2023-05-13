


import './App.css';
import Home from './components/Home';
import Login from'./components/Login';
import Requestform from './components/Requestform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userview from './components/Userview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Userview/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form" element={<Requestform />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
