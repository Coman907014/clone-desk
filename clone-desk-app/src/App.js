import React ,{ Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import LoginForm from './Components/Forms/LoginForm';
import MainPage from './Components/MainPage/MainPage';

class App extends Component {
  state = {
   isLoggedIn: false
  }

  isUserLoggedIn = () => {
    this.props.history.push('/main-page')
  }
  

  render () {
    return (
      <div className="App">
        <Switch>
        <Route path='/' exact render={() => <LoginForm isLoggedIn={ this.isUserLoggedIn}/> } />
        <Route path='/main-page' exact component = { MainPage } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
