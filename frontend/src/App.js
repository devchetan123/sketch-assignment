import './App.css';
import 'antd/dist/antd.min.css'
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Home from './components/home/Home';
import { Result } from 'antd';

const NotFound = () => {
  return <Result
  status="warning"
  title={"404"}
  subTitle={"Page not found!"}
/>
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
