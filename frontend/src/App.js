import './App.css';
import 'antd/dist/antd.min.css'
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
