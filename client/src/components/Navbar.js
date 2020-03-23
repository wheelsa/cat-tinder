import React from 'react'

import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
 
import { AuthConsumer } from '../providers/AuthProvider'

class Navbar extends React.Component {
  
  
  rightNavItems = () => {

    const { auth: {user, handleLogout,}, pathname } = this.props;

    if(user){
      return(
        <Menu.Menu position='right'>
          <Menu.Item
           name='logout'
           onClick= {()=> handleLogout(this.props.history)} //in auth provider have logout method
           />
         </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position='right'> 
        <Link to='/login'>
          <Menu.Item
            id='login'
            name='login'
            active= {this.props.location.pathname === '/login'}
          /> 
        </Link>

        <Link to='/register'>
          <Menu.Item
            id='register'
            name='register'
            active= {this.props.location.pathname === '/register'}
          /> 
        </Link>
        </Menu.Menu>
      )
    }
  }

  render(){
    return (
 
    <Menu>
      <Menu.Menu position='left'> 
        <Link to='/'>
          <Menu.Item 
            name='home'
            id='home'
            active= {this.props.location.pathname === '/'} //this highlights what menu tme you're oni
             > 
      
          </Menu.Item>
          </Link>
      </Menu.Menu>
      {this.rightNavItems()}
     
    </Menu>
    )
  }
}

class ConnectNavbar extends React.Component {
  render(){
    return(
      <AuthConsumer>
        { auth => 
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectNavbar)