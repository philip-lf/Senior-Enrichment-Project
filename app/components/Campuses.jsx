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
                    <p key={campus.id}>{campus.name}</p>
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