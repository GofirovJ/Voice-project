import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import PaidUsers from './paid/paid';
import VerifiedUsers from './verified/verified';
import Projects from './projects/projects';
import Login from './login/login';

function App() {
  const [acces, setAccess] = useState(false)

  if (acces) {
    return (
      <Routes>       
        <Route path = '/' element={<Home />} />  
        <Route path = '/verified_users' element={<VerifiedUsers />} />  
        <Route path = '/paid_users' element={<PaidUsers />} />    
        <Route path = '/projects' element={<Projects />} />    
      </Routes>
    );
  }
  else {
    return <Login setAccess={setAccess} />
  }
}

export default App;
