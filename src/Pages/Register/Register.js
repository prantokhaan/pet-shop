import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './Register.css';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {register, isLoading,handleGoogle,setUser,setError} = UseAuth();
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/home'

  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const submitBtn = e =>{
    if(loginData.password !== loginData.password2){
      alert('not match')
      return
    }
    register(loginData.email, loginData.password)
    console.log(loginData.email, loginData.password)
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
            <div className="btn-style contact-style row">
              <Col lg={12} md={6}>
                <div className="input">
                {!isLoading && <form onSubmit={submitBtn}>
                    <h2>Please Register </h2>
                    <label htmlFor="frist"></label>
                    <input 
                    type="name"
                    name='name'
                    placeholder='Full Name'
                    onChange={handleOnChange}
                    id="frist"/>
                    <br /><br />
                    <label htmlFor="mail"></label>
                    <input 
                    type="email"
                    name='email'
                    onChange={handleOnChange}
                    placeholder='enter your email' 
                    id="mail" required/>
                    <br /><br />
                    <label htmlFor="password"></label>
                    <input 
                    type="password"
                    name='password'
                    onChange={handleOnChange}
                    placeholder='enter your password'
                    id="password" required/>
                    <br /><br />
                   <input 
                   type="password2"
                   name='password2'
                   onChange={handleOnChange}
                   placeholder='re-enter your password' required/>
                   <br /><br />
                   <input type="submit" value="Register" />
                </form>}
                <p>Already have an account?<Link to="/login">Login</Link></p>
                <button onClick={handleGoogleAndRedirect} ><i class="fab fa-google"></i>{' '} Google Sign In</button>
                </div>
              </Col>
        </div>
        </div>
    );
};

export default Register;