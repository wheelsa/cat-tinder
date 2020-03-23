import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

export default class AuthProvider extends React.Component{
  state= {user: null}

  //method to handle registration
  handleRegister = (user, history) => {

  }
  //method to handle logging in
  handleLogin = (user, history) => {

  }

  //method to handle logging out
  handleLogout = (history) => {

  }


  render(){
    return(
      <AuthContext.Provider value={{
        ...this.state, 
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