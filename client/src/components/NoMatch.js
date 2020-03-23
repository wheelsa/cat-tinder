import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <Header as='h3'> 
  Page Not Found
    <span> <Link to='/'>Home</Link> </span>
  </Header>
)

export default NoMatch