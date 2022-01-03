import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {handleGoogle,setUser,setError,loginUser} = UseAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/home'

  // Email and Password
  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const submitBtn = e =>{
    loginUser(loginData.email, loginData.password)
    .then((result) => {
      setUser(result.user)
      history.push(redirect_url)
    })
    .catch((error) => {
        setError(error.message)
    });
    e.preventDefault();
  }

  // google login
  const handleGoogleAndRedirect = () => {
      handleGoogle()
      .then((result) => {
          setUser(result.user)
          history.push(redirect_url)
  })
  .catch((error) => {
      setError(error.message)
  });
 
  }
    return (
        <div>
            <div className="btn-style login-style row">
               
                <Col lg={12}>
                  <div className="input">
                  <h2>Login</h2>
                  <form onSubmit={submitBtn}>
                    <label htmlFor="email"></label>
                      <input
                       type="email"
                       name='email'
                       placeholder='Enter your email'
                       id="email"
                       onChange={handleOnChange}
                         />
                      <br /><br />

                      <label htmlFor="password"></label>
                      <input 
                      type="password"
                      name='password'
                      onChange={handleOnChange}
                      placeholder='Enter your password'
                      id="password"/>
                      <br /><br />
                      <input type="submit" value="Submit"/>
                      <br />
                  </form>
                    <p>haven't any account?<Link to='/register'>Create Account</Link></p>
                    <button onClick={handleGoogleAndRedirect} className="button-style"><i class="fab fa-google"></i>{' '}Google Sign In</button>
                  </div>
               
                </Col>
            </div>
        </div>
    );
};

export default Login;