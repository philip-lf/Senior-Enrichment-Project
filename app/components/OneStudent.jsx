import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, putStudent } from '../reducers/index'

class OneStudent extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.getStudents()
    // }

    render() {
        const studentId = this.props.match.params.studentId
        const students = this.props.students
        const campuses = this.props.campuses
        const filteredStudents = students.filter(student => {
            return +student.id === +studentId
        })[0]
        // const campusName = filteredStudents.campus.name

        const campus = campuses.filter(campus => {
            return filteredStudents.campusId === campus.id
        })[0]
        console.log("babababababa", campus)

        const edit = false

        return (
            <div>
                Students Name:
                <p>First Name: {filteredStudents.first_name}</p>
                <p>Last Name: {filteredStudents.last_name}</p>
                <p>Email: {filteredStudents.email}</p>
                <p>Campus:{campus.name}</p>
                <img src={filteredStudents.image} />
                <NavLink to={`/students/edit/${filteredStudents.id}`}>
                    <button>
                        Edit
                    </button>
                </NavLink>
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

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateStudent() {
            return dispatch(putStudent())
            ownProps.history.push('/students')
        }
    }
}

const Container = connect(mapStateToProps)(OneStudent)

export default Container