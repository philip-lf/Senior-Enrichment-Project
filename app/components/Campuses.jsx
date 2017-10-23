import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NewCampus from './NewCampus'

class Campuses extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="space">
                <NewCampus />
                ALL Campuses:
              {this.props.campuses.map(campus => (
                    <NavLink to={`/campuses/${campus.id}`} key={campus.id}>
                        <p>Name: {campus.name}</p>
                        <p>Location: {campus.location}</p>
                        <img className="campus" src={campus.image} width="40%" height="auto"/>
                    </NavLink>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    campuses: state.campuses
})

export default connect(mapStateToProps)(Campuses)