import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './LoginForm.css';
import img13 from './images/img13.jpg';

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const [actual] = useState({
    name: "ashwin",
    pwd: "ashwin123"
  })

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const validateForm = () => {
  
    const isValid = username.trim() !== '' && password.trim() !== '';
    setFormValid(isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === actual.name && password === actual.pwd) {
      // Navigate to the next page using the navigate function
      navigate('/Home');
      return;
    }
    else {
      alert('Invalid username or password')
    }
  };

  return (
    <>
      <section>
        <img className="img" src={img13} alt="background" />
        <div className="body">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <h2 className="lf">
                <b>𝖫𝗈𝗀𝗂𝗇 𝖿𝗈𝗋𝗆</b>
              </h2>
              <div className="input-box">
                <span className="icon">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <label><span style={{ color: 'black' }}>𝓾𝓼𝓮𝓻𝓷𝓪𝓶𝓮</span></label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <label><span style={{ color: 'black' }}>𝓹𝓪𝓼𝓼𝔀𝓸𝓻𝓭</span></label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  𝔯𝔢𝔪𝔢𝔪𝔟𝔢𝔯 𝔪𝔢
                </label>
                <a href="#">𝖿𝗈𝗋𝗀𝗈𝗍 𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽?</a>
              </div>
              <button className="btn" type="submit"><span style={{ color: 'green' }}>
                𝓛𝓸𝓰𝓲𝓷</span>
              </button>
              <div className="registered-link">
                <p>
                  𝙳𝚘𝚗'𝚝 𝚑𝚊𝚟𝚎 𝚊𝚗 𝚊𝚌𝚌𝚘𝚞𝚗𝚝?
                  <a className="pa" href="#">
                    𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
