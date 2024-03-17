import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/login' Component={Login}/>
    <Route exact path='/register' Component={Register}/>
    <Route exact path='/home' Component={Home}/>
    </Routes>

    </>
  );
}

export default App;
