import React from 'react';
import '../../style.css'
import '../login/login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="title">
                    Hello, we are glad to be with us! Enter your name:
                </div>
                <div className="name">
                    My name:
                </div>
                <input placeholder='For example Victor' type="text" />
                <div className="button">
                    <button>Start</button>
                </div>
            </div>
          
        </div>
    );
};

export default Login;