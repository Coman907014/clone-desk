import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.modeul.css';
import loginImage from '../../Assets/Images/loginImage.png';

const LoginForm = () => {
    const  [ formInformation, setFormInformation ] = useState({email: '',password: ''})

    const submitFormData = (e) => {
        e.preventDefault()
        const CORSHack = 'https://cors-anywhere.herokuapp.com/'
        const baseURL = `${CORSHack}https://test-api.clonedesk.com/api/v2/current-user/login-session`;
        const loginInformation = {...formInformation}
        axios.post(baseURL, {
          'email' : loginInformation.email,
          'password' : loginInformation.password,
        })
        .then(response => {
          const sessionKey = response.data.session_key;
          sessionKey && localStorage.setItem('sessionKey', sessionKey);
          console.log('You are logged in!')
        })
        .catch(error => console.log(error))
      }

    const saveInformationFromForm = (event) => {
        event.target.name === 'email'
        ? setFormInformation({ email:event.target.value }) 
        : event.target.name === 'password'
        ? setFormInformation({ password:event.target.value }) 
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

export default LoginForm;