import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, putStudent } from '../reducers/index'

class OneStudent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const studentId = this.props.match.params.studentId
        const students = this.props.students
        const campuses = this.props.campuses
        const oneStudent = students.filter(student => +student.id === +studentId)[0]
        const campus = campuses.filter(campus => oneStudent.campusId === campus.id)[0]

        return (
            <div>
                Students Name:
                <p>First Name: {oneStudent.first_name}</p>
                <p>Last Name: {oneStudent.last_name}</p>
                <p>Email: {oneStudent.email}</p>
                <p>Campus: {campus.name}</p>
                <img src={oneStudent.image} />
                <NavLink to={`/students/edit/${oneStudent.id}`}>
                    <button>
                        Edit
                    </button>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students,
    campuses: state.campuses
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateStudent() {
        dispatch(putStudent())
        ownProps.history.push('/students')
    }
})

export default connect(mapStateToProps)(OneStudent)