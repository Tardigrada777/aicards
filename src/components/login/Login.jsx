import React, { useState } from 'react';
import '../../style.css'
import '../login/login.css'

const Login = ({ setUser }) => {
  const [nickname, setNickname] = useState('');

  const onStart = () => {
    setUser(nickname);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          Hello, we are glad to be with us! Enter your name:
        </div>
        <div className="name">
          My name:
        </div>
        <input
          placeholder="For example nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="button">
          <button onClick={onStart}>Start</button>
        </div>
      </div>

    </div>
  );
};

export default Login;