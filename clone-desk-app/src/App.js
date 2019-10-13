import React ,{ Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginForm from './Components/Forms/LoginForm';

class App extends Component {
  state = {
    myName: 'Alex',
    formData: {
      email: '',
      password: ''
    },
    isSubmitting: false
  }
  
  render () {
    return (
      <div className="App">
        <Route path='/' exact component = { LoginForm } />
      </div>
    );
  }
}

export default App;
