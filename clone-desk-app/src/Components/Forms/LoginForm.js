import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './LoginForm.modeul.css';
import loginImage from '../../Assets/Images/loginImage.png';

const LoginForm = (props) => {
    const [ formInformation, setFormInformation ] = useState({email: '',password: ''})
    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    if( isLoggedIn ) {
      props.isLoggedIn()
    }

    const submitFormData = (e) => {
        e.preventDefault()
        const baseURL = `https://test-api.clonedesk.com/api/v2/current-user/login-session`;
        axios.post(baseURL, {
          'email' : formInformation.email,
          'password' : formInformation.password,
        })
        .then(response => {
          console.log(response)
          const sessionKey = response.data.session_key;
          if(sessionKey) {
            setIsLoggedIn(true);
          }
        })
        .catch(error => console.log('error', error))
      }

    const saveInformationFromForm = (event) => {
        event.target.name === 'email'
        ? setFormInformation({...formInformation ,email:event.target.value }) 
        : event.target.name === 'password'
        ? setFormInformation({...formInformation, password:event.target.value }) 
        : console.log('No data to save!')
      }


    return (
      <div>
        <form onSubmit={submitFormData}>
        <h2>Login Form</h2>
        <div className="imgcontainer">
            <img src={loginImage} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label>Email</label>
            <input type="text" placeholder="Enter Username" name="email" required onChange={saveInformationFromForm}/>
          <label>Password</label>
            <input type="password" autoComplete="false" placeholder="Enter Password" name="password" required onChange={saveInformationFromForm}/>   
          <button type="submit">Login</button>
        </div>
        </form>
      </div>
    );
}

export default withRouter(LoginForm);