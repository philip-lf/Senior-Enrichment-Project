import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/index'

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

        return (
            <div>
                Students Name:
                {filteredStudents.first_name}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         getStudents() {
//             dispatch(fetchStudents())
//         }
//     }
// }

const Container = connect(mapStateToProps)(OneStudent)

export default Container