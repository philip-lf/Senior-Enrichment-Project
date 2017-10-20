import React, { Component } from 'react'
import { connect } from 'react-redux'
import { putStudent, fetchStudents, fetchCampuses } from '../reducers/index'

class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNameValue: '',
            lastNameValue: '',
            emailValue: '',
            imageValue: '',
            campusValue: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleCampus = this.handleCampus.bind(this)
    }

    handleFirstNameChange(event) {
        console.log("first name: ", event.target.value)
        this.setState({
            firstNameValue: event.target.value
        })
    }

    handleLastNameChange(event) {
        console.log("last name: ", event.target.value)
        this.setState({
            lastNameValue: event.target.value
        })
    }

    handleEmailChange(event) {
        console.log("email: ", event.target.value)
        this.setState({
            emailValue: event.target.value
        })
    }

    handleImageChange(event) {
        console.log("image: ", event.target.value)
        this.setState({
            imageValue: event.target.value
        })
    }

    handleCampus(event) {
        console.log("campus: ", event.target.value)
        this.setState({
            campusValue: event.target.value
        })
    }

    render() {
        const studentId = this.props.match.params.studentId

        return (
            <div>
                Edit Student:
              <form onSubmit={event => {this.props.handleSubmit(event)}}>
                    Student First Name:
                    <br />
                    <input
                        type="text"
                        placeholder="first name"
                        name="first"
                        value={this.state.firstNameValue}
                        onChange={this.handleFirstNameChange} />
                    <br />
                    Student Last Name:
                    <br />
                    <input
                        type="text"
                        placeholder="last name"
                        name="last"
                        value={this.state.lastNameValue}
                        onChange={this.handleLastNameChange} />
                    <br />
                    Student Email:
                    <br />
                    <input
                        type="text"
                        placeholder="email address"
                        name="email"
                        value={this.state.emailValue}
                        onChange={this.handleEmailChange} />
                    <br />
                    Student Image:
                    <br />
                    <input
                        type="text"
                        placeholder="imageURL"
                        name="imageURL"
                        value={this.state.imageValue}
                        onChange={this.handleImageChange} />
                    <br />
                    <div>
                        Campus to Attend:
                        <select 
                            name="campus"
                            value={this.state.campusValue} 
                            onChange={this.handleCampus}>
                            {this.props.campuses.map(campus => (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <button type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        campuses: state.campuses
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleSubmit(event) {
            event.preventDefault()
            const studentId = ownProps.match.params.studentId
            const first_name = event.target.first.value
            const last_name = event.target.last.value
            const email = event.target.email.value
            const image = event.target.imageURL.value
            const campusId = event.target.campus.value
            dispatch(putStudent(studentId, { first_name, last_name, email, image, campusId }, ownProps.history))
            ownProps.history.push('/students')
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(EditStudent)

export default Container