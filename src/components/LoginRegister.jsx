import { useState } from 'react'
import Register from './Register';
import Login from './Login';


export default function LoginRegister() {

  const [token, setToken] = useState (null);
  
    return (
      <div className="log-reg">
      <Register setToken={setToken}/>
      <Login token={token}/>
      </div>
    );
  }