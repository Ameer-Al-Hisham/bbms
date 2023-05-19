import Home from './components/Home';
import Login from'./components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import UserView from './components/UserView';
import DonorForm from './components/DonorForm';
import RequestForm from './components/RequestForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserView />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form/donor" element={<DonorForm />}></Route>
          <Route path="/form/request" element={<RequestForm />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
