import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCampus, fetchCampuses } from '../reducers/index'

class NewCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            locationValue: '',
            imageValue: ''
        }
        this.handleAllInput = this.handleAllInput.bind(this)
    }

    handleAllInput(event) {
        this.setState({
            nameValue: event.target.name === 'name' ? event.target.value : this.state.nameValue,
            locationValue: event.target.name === 'location' ? event.target.value : this.state.locationValue,
            imageValue: event.target.name === 'imageURL' ? event.target.value : this.state.imageValue,
        })
    }

    render() {
        return (
            <div>
                ADD Campus:
              <form onSubmit={this.props.handleSubmit}>
                    Campus Name:
                    <br />
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.nameValue}
                        onChange={this.handleAllInput} />
                    <br />
                    Campus Location:
                    <br />
                    <input
                        type="text"
                        placeholder="location"
                        name="location"
                        value={this.state.locationValue}
                        onChange={this.handleAllInput} />
                    <br />
                    Campus Image:
                    <br />
                    <input
                        type="text"
                        placeholder="imageURL"
                        name="imageURL"
                        value={this.state.imageValue}
                        onChange={this.handleAllInput} />
                    <br />
                    <button type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleSubmit(event) {
        event.preventDefault()
        const campusToAdd = {
            name : event.target.name.value,
            location : event.target.location.value,
            image : event.target.imageURL.value
        }
        dispatch(postCampus(campusToAdd))
    }
})

export default connect(null, mapDispatchToProps)(NewCampus)