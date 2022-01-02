import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="btn-style login-style row">
               
                <Col lg={12}>
                  <div className="input">
                  <h2>Login</h2>
                  <form>
                    <label htmlFor="email"></label>
                      <input type="email" placeholder='Enter your email' id="email"/>
                      <br /><br />

                      <label htmlFor="password"></label>
                      <input type="password" placeholder='Enter your password'id="password"/>
                      <br /><br />
                      <input type="submit" value="Submit"/>
                      <br />
                  </form>
                    <p>haven't any account?<Link to='/register'>Create Account</Link></p>
                    <button className="button-style"><i class="fab fa-google"></i>{' '}Google Sign In</button>
                  </div>
               
                </Col>
            </div>
        </div>
    );
};

export default Login;