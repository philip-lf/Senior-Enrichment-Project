import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/index'
import NewStudent from './NewStudent'

class Students extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getStudents()
    }

    render() {
        return (
            <div>
                <NewStudent />
                ALL Students:
              {this.props.students.map(student => (
                    <p key={student.id}>{student.first_name}</p>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getStudents() {
            dispatch(fetchStudents())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Students)

export default Container