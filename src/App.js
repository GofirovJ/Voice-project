import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import PaidUsers from './paid/paid';
import VerifiedUsers from './verified/verified';
import Projects from './projects/projects'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Home />} />  
      <Route path = '/verified_users' element={<VerifiedUsers />} />  
      <Route path = '/paid_users' element={<PaidUsers />} />    
      <Route path = '/projects' element={<Projects />} />    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
