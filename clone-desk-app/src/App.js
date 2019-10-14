import React ,{ Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios'; 

import LoginForm from './Components/Forms/LoginForm';
import MainPage from './Components/MainPage/MainPage';

class App extends Component {
  state = {
   isLoggedIn: false,
   dataIsFetched: false,
   data: {
    channels: [],
    organizations: [],
    projects: [],
    success: false
   },
   showChannels: false,
   showOrganizations: false,
   showProjects: false,
  }

  isUserLoggedInHandler = () => {
    this.props.history.push('/main-page')
    this.setState({isLoggedIn: true})
  };
  componentDidUpdate () {
    !this.state.dataIsFetched && this.getSideBarContent()
  }
  
  getSideBarContent = () => {
    const baseURL = `https://test-api.clonedesk.com/api/v2/sidebar`;
    const queryParams = `?organizationID=1&projectID=2`;
    const finalURL = `${baseURL}${queryParams}`
    axios.get(finalURL)
    .then(response => {
        response.status === 200
        && 
        this.setState({
          data: {
            channels: response.data.channels,
            organizations: response.data.organizations,
            projects: response.data.projects,
            success: response.data.success
          },
          dataIsFetched: true
        })
        console.log(this.state.data)
    })
    .catch(error => console.log(error))
}
  toggleElementHandler = (event) => {
    
  console.log(this.state);
   return event.target.id === 'channels'
    ? this.setState((prevState) => {return {showChannels: !prevState.showChannels}})
    : event.target.id === 'organizations'
    ? this.setState((prevState) => {return {showOrganizations: !prevState.showOrganizations}})
    : event.target.id === 'projects'
    ? this.setState((prevState) => {return {showProjects: !prevState.showProjects}})
    : null
  }
  

  render () {
    return (
      <div className="App">
        <Switch>
        <Route path='/' exact render={() => (<LoginForm isLoggedIn={this.isUserLoggedInHandler}/> )} />
        <Route path='/main-page' exact render = {() => <MainPage data={this.state.data} toggleElement={this.toggleElementHandler}/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
