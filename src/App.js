import Home from './components/Home';
import Login from'./components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
