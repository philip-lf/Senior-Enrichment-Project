import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/index'
import NewCampus from './NewCampus'

class Campuses extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCampuses()
    }

    render() {
        return (
            <div>
                <NewCampus />
                ALL Campuses:
              {this.props.campuses.map(campus => (
                    <NavLink to={`/campuses/${campus.id}`} key={campus.id}>
                        <p>Name: {campus.name}</p>
                        <p>Location: {campus.location}</p>
                        <img src={campus.image} width="40%" height="auto"/>
                    </NavLink>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCampuses() {
            dispatch(fetchCampuses())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default Container