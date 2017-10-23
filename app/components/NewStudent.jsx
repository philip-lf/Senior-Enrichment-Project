import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../reducers/index'

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
        this.handleAllInput = this.handleAllInput.bind(this)
    }

    handleAllInput(event) {
        this.setState({
            firstNameValue: event.target.name === 'first' ? event.target.value : this.state.firstNameValue,
            lastNameValue: event.target.name === 'last' ? event.target.value : this.state.lastNameValue,
            emailValue: event.target.name === 'email' ? event.target.value : this.state.emailValue,
            imageValue: event.target.name === 'imageURL' ? event.target.value : this.state.imageValue,
            campusValue: event.target.name === 'campus' ? event.target.value : this.state.campusValue
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
                            onChange={this.handleAllInput} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="last name"
                            name="last"
                            value={this.state.lastNameValue}
                            onChange={this.handleAllInput} />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            placeholder="email address"
                            name="email"
                            value={this.state.emailValue}
                            onChange={this.handleAllInput} />
                    </div>
                    <div className="form-group">
                        <label>Profile Image</label>
                        <input
                            type="text"
                            placeholder="imageURL"
                            name="imageURL"
                            value={this.state.imageValue}
                            onChange={this.handleAllInput} />
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Campus to Attend</label>
                            <select
                                name="campus"
                                value={this.state.campusValue}
                                onChange={this.handleAllInput}>
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

const mapStateToProps = state => ({
    campuses: state.campuses
})

const mapDispatchToProps = dispatch => ({
    handleSubmit(event) {
        event.preventDefault()
        const studentToAdd = {
            first_name: event.target.first.value,
            last_name: event.target.last.value,
            email: event.target.email.value,
            image: event.target.imageURL.value,
            campusId: event.target.campus.value
        }
        dispatch(postStudent(studentToAdd))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent)