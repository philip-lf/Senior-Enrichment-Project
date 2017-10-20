import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postStudent, fetchStudents, fetchCampuses } from '../reducers/index'

class NewStudent extends Component {
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

    componentDidMount() {
        this.props.getCampuses()
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
        return (
            <div className="forms">
                ADD Student:
              <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="first name"
                            name="first"
                            value={this.state.firstNameValue}
                            onChange={this.handleFirstNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="last name"
                            name="last"
                            value={this.state.lastNameValue}
                            onChange={this.handleLastNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            placeholder="email address"
                            name="email"
                            value={this.state.emailValue}
                            onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label>Profile Image</label>
                        <input
                            type="text"
                            placeholder="imageURL"
                            name="imageURL"
                            value={this.state.imageValue}
                            onChange={this.handleImageChange} />
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Campus to Attend</label>
                            <select
                                name="campus"
                                value={this.state.campusValue}
                                onChange={this.handleCampus}>
                                {this.props.campuses.map(campus => (
                                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-default">
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

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit(event) {
            event.preventDefault()
            const first_name = event.target.first.value
            const last_name = event.target.last.value
            const email = event.target.email.value
            const image = event.target.imageURL.value
            const campusId = event.target.campus.value
            dispatch(postStudent({ first_name, last_name, email, image, campusId }))
            // dispatch(fetchStudents())
        },
        getCampuses() {
            dispatch(fetchCampuses())
            // dispatch(fetchStudents())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewStudent)

export default Container