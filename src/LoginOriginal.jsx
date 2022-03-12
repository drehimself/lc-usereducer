import React, { useState } from 'react';
import fakeLogin from './fakeLogin';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    fakeLogin(username, password)
      .then(response => {
        alert('Logged in successfully');
        setUsername('');
        setPassword('');
      })
      .catch(error => {
        setError('Sorry! There was an error logging you in.');
        setPassword('');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <form action="#" method="POST" onSubmit={handleLogin}>
      {error && <p className="error">{error}</p>}
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="input"
          id="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="form-input">
        <button className="button">Login</button>
        {isLoading && <span>Loading...</span>}
      </div>
    </form>
  );
}
