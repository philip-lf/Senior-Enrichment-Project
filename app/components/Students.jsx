import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/index'
import NewStudent from './NewStudent'

class Students extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const students = this.props.students
        const campuses = this.props.campuses

        return (
            <div>
                <NewStudent />
                ALL Students:
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Campus</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length && students.map(student => (

                            <tr key={student.id}>
                                <td>
                                    <NavLink to={`/students/${student.id}`}>
                                        <img src={student.image} width="auto" height="80px" />
                                    </NavLink>
                                </td>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.email}</td>
                                <td>
                                    {campuses.find(campus => campus.id === student.campusId) ? 
                                    campuses.find(campus => campus.id === student.campusId).name : ''}
                                </td>
                                <td>
                                    <button onClick={() => { this.props.removeStudent(student) }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students,
    campuses: state.campuses
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeStudent(student) {
        return dispatch(removeStudent(student))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)