import { useState } from "react";


const Login = ( token ) => {
    const [error, setError] = useState (null);
    const [successMessage, setSuccessMessage] = useState (null);
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = async () => {
        try {
        const response = await fetch ('https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({user:{username, password}})

        });
        const result = await response.json();
        
        setSuccessMessage (result.message);
        setUserData (result.data);
        console.log(result)
        } catch (error){
            setError (error.message);
        }
    }
    return (
        
        <div className='container'>
        {error && <p className='error-message'>Error: {error}</p>}
        <form onSubmit={handleSubmit}>
          <label className='form-input'>
            <input
            id="username"
              placeholder='Username'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label className='form-input'>
            <input
            placeholder='Password'
            id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br /><br />
          <button type="submit">Login</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      {userData && <p>Welcome, {userData.username}!</p>}
      </div>
    )
};

export default Login;