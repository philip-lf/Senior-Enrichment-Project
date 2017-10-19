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
        const filteredStudents = students.filter(student => {
            return +student.id === +studentId
        })[0]
        const campusName = filteredStudents.campus.name

        const edit = false

        return (
            <div>
                Students Name:
                <p>First Name: {filteredStudents.first_name}</p>
                <p>Last Name: {filteredStudents.last_name}</p>
                <p>Email: {filteredStudents.email}</p>
                <p>Campus: {campusName}</p>
                <img src={filteredStudents.image} />
                    {/* <NavLink to="">
                        <button>
                            Edit
                        </button>
                    </NavLink> */}
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
        updateStudent() {
            dispatch(putStudent())
        }
    }
}

const Container = connect(mapStateToProps)(OneStudent)

export default Container