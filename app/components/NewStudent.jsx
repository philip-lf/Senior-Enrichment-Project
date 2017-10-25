import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../reducers/index'
import newState, { helper } from './handlerHelper'

class NewStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: '',
            last: '',
            email: '',
            imageURL: '',
            campus: ''
        }
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
                            value={this.state.first}
                            onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="last name"
                            name="last"
                            value={this.state.last}
                            onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            placeholder="email address"
                            name="email"
                            value={this.state.email}
                            onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    </div>
                    <div className="form-group">
                        <label>Profile Image</label>
                        <input
                            type="text"
                            placeholder="imageURL"
                            name="imageURL"
                            value={this.state.image}
                            onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Campus to Attend</label>
                            <select
                                name="campus"
                                value={this.state.campus}
                                onChange={e => {helper(this.state,e); this.setState(newState)}}>
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