import { useState } from 'react';

const Register = ( setToken ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState (null);
  const [error, setError] = useState(null);
    
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 6) {
      setError('Username must be at least 6 characters long.');
      return;
    }
    try {
      const response = await fetch ('https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/users/register', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify ({user:{username, password}}),
      });
      const data = await response.json();
      setToken(data.token);
      setSuccessMessage(data.data.message);
    } catch (error) {
      setError (error.message);
    }
  
  }

  return (
    <div className='container'>
      {error && <p className='error-message'>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label className='form-input'>
          <input
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Register</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Register;