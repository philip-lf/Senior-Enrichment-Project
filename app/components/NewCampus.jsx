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
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        // this.handleInput = this.handleInput.bind(this)
    }

    handleNameChange(event) {
        console.log("name: ", event.target.value)
        this.setState({
            nameValue: event.target.value
        })
    }

    handleLocationChange(event) {
        console.log("location: ", event.target.value)
        this.setState({
            locationValue: event.target.value
        })
    }

    handleImageChange(event) {
        console.log("image: ", event.target.value)
        this.setState({
            imageValue: event.target.value
        })
    }

    // handleInput(event) {
    //     event.preventDefault()
    //     this.setState({})
    // }

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
                        onChange={this.handleNameChange} />
                    <br />
                    Campus Location:
                    <br />
                    <input
                        type="text"
                        placeholder="location"
                        name="location"
                        value={this.state.locationValue}
                        onChange={this.handleLocationChange} />
                    <br />
                    Campus Image:
                    <br />
                    <input
                        type="text"
                        placeholder="imageURL"
                        name="imageURL"
                        value={this.state.imageValue}
                        onChange={this.handleImageChange} />
                    <br />
                    <button type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit(event) {
            event.preventDefault()
            const name = event.target.name.value
            const location = event.target.location.value
            const image = event.target.imageURL.value
            dispatch(postCampus({ name, location, image }))
        }
    }
}

const Container = connect(null, mapDispatchToProps)(NewCampus)

export default Container