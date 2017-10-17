import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import NewCampus from './NewCampus'
import Navbar from './Navbar'
// import Header from './Header.jsx'
// import Main from './Main.jsx'
// import { NavLink } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <Navbar />
      <Root>
          <Switch>
            <Route path="/new-campus" component={NewCampus} />
          </Switch>
      </Root>
    </div>
  )
}