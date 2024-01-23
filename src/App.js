
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import UserTypeSelection from './componets/UserTypeSelection';
import ClientRegistration from './componets/ClientRegistration';
import WorkerRegistration from './componets/WorkerRegistration';
import Home from './componets/Home';
import Navigation from './componets/Navigation';
import LoginPage from './componets/LoginPage';
import Admin from './componets/admin/Admin';

function App() {
  return (
    <div >
     {/* <Navigation/> */}
      <BrowserRouter>
 
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home method='get'/>} />
          <Route path="/type" element={<UserTypeSelection method='post'/>} />
          <Route path="/login" element={<LoginPage method='get'/>} />
          <Route path="/client" element={<ClientRegistration method='get' />} />
          <Route path="/worker" element={<WorkerRegistration method='get' />} />
           <Route path="/admin" element={<Admin method='get'/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
