import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/index'

function Campuses(props) {
  return (
    <div>
        All Campuses:
        {props.campuses.map(campus => {
            return (
                <p key={campus}>{campus}</p>
            )
        })}
    </div>
  )
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

function mapDispatchToProps(dispatch) {
    console.log("im in mapDispatchToProps")
    
    return {
        getCampuses() {
            dispatch(fetchCampuses())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default Container