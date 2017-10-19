import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, removeStudent } from '../reducers/index'

class OneCampus extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getStudents()
    }

    render() {
        const campusId = this.props.match.params.campusId
        const students = this.props.students

        const studentsByCampus = students.filter(student => {
            return Number(student.campusId) === Number(campusId)
        })

        const campus = this.props.campuses.filter(campus => {
            return +campus.id === +campusId
        })[0]

        return (
            <div>
                All Students Enrolled in Campus:
                {campus ? campus.name : ''}
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Campus</th>
                            <th>Edit</th>
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
                                    <button>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => { this.props.removeStudent(student.id) }}>
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

function mapStateToProps(state) {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getStudents() {
            dispatch(fetchStudents())
        },
        removeStudent(studentId) {
            dispatch(removeStudent(studentId))
            dispatch(fetchStudents())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(OneCampus)

export default Container