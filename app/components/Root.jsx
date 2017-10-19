import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
// import NewCampus from './NewCampus'
import Navbar from './Navbar'
import Footer from './Footer'
import Campuses from './Campuses'
import OneCampus from './OneCampus'
import HomePage from './HomePage'
import Students from './Students'
// import NewStudent from './NewStudent'
import OneStudent from './OneStudent'
// import EditStudent from './EditStudent'

export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage} /> 
          <Route exact path="/campuses" component={Campuses} />
          <Route path="/campuses/:campusId" component={OneCampus} />
          {/* <Route path="/new-campus" component={NewCampus} /> */}
          <Route exact path="/students" component={Students} />
          {/* <Route exact path="/students/edit/:studentId" component={EditStudent} /> */}
          <Route path="/students/:studentId" component={OneStudent} />
          {/* <Route path="/new-student" component={NewStudent} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

// Routes home, campuses, and students are linked in the navbar component