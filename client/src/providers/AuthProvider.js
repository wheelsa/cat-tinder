import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

export default class AuthProvider extends React.Component{
  state= {user: null}

  //method to handle registration
  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
    .then( res => {
      console.log(res)
      this.setState({ user: res.data.data});
      history.push('/')
    })
    .catch( err => {
      console.log(err)
    })
  };
  
  //method to handle logging in
  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then (res => {
      this.setState({ user: res.data.data,});
      history.push('/login');
    })
    .catch( err =>
      console.log(err))
  };

  //method to handle logging out
  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
    .then(res =>{
      this.setState({user: null})
      history.push('/login')}
    ).catch (err => {
      console.log(err)
    })
  };


  render(){
    return(
      <AuthContext.Provider value={{
        ...this.state, 
        //...this.state === user = this.state.user in this case
        authenticated: this.state.user !== null,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleRegister: this.handleRegister,
        setUser: (user) => this.setState({user})
        }}>

        {this.props.children}

      </AuthContext.Provider>
    )
  }
}