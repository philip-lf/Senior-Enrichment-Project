import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import NewCampus from './NewCampus'
import Navbar from './Navbar'
import Footer from './Footer'
import Campuses from './Campuses'
import HomePage from './HomePage'

export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/campuses" component={Campuses} />
          <Route path="/new-campus" component={NewCampus} />
        </Switch>
        <Footer />
      </div>
    )
  }
}