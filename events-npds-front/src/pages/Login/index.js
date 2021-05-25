import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';
import './style.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/authenticate", { username, password });
      const { jwt } = data;
      localStorage.setItem("@events-npds/token", jwt);
      history.push("/home")
    } catch (err) {
      setPassword("")
      alert(err.response.data.message)
    }
  }

  return (
    <div className="login-container">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="btn-login" type="submit" disabled={username == '' || password == ''}>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;