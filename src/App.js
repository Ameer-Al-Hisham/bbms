import Home from './components/Home';
import Login from'./components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Requestform from './components/Requestform';
import Userview from './components/Userview';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Userview />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form" element={<Requestform />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
