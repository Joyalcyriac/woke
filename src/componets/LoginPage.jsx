import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="background">
      <div className="blur-box">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" /><br></br>
      
        <Link to="/type">Login </Link>


          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;