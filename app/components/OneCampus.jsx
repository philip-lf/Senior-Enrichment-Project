import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus, removeStudent } from '../reducers/index'

class OneCampus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const campusId = this.props.match.params.campusId
        const students = this.props.students
        const studentsByCampus = students.filter(student => +student.campusId === +campusId)
        const campus = this.props.campuses.filter(campus => +campus.id === +campusId)[0]

        return (
            <div>
                <div className="space">
                    <p>Campus Name: {campus.name}</p>
                    <p>Campus Location: {campus.location}</p>
                    <img className="campus" src={campus.image} width="60%" height="auto" />
                </div>
                <NavLink to={`/campus/edit/${campus.id}`}>
                    <button>
                        Edit
                    </button>
                </NavLink>
                <button onClick={() => { this.props.removeCampus(campus) }}>
                    Delete
                </button>
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
                        {studentsByCampus.map(student => (
                            <tr key={student.id}>
                                <td>
                                    <NavLink to={`/students/${student.id}`}>
                                        <img src={student.image} width="auto" height="80px" />
                                    </NavLink>
                                </td>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.email}</td>
                                <td>{student.campus.name}</td>
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
    removeCampus(campus) {
        dispatch(removeCampus(campus))
        ownProps.history.push('/campuses')
    },
    removeStudent(studentId) {
        dispatch(removeStudent(studentId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCampus)