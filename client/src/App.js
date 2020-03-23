import React from 'react';
import './App.css';

import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

function App() {
  return (
   <> 
    <Navbar />
    <Container>
      <Switch>
        <Route exact path ='/' component={Home} />
        {/* <Route exact path ='/login' component={Login} /> */}
        <Route component={NoMatch} />

      </Switch>
   
      </Container>
   </>
  );
}

export default App;
