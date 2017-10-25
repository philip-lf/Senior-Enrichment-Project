import React, { Component } from 'react'
import { connect } from 'react-redux'
import { putCampus, fetchCampuses } from '../reducers/index'
import newState, { helper } from './handlerHelper'

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            location: '',
            imageURL: ''
        }
    }

    render() {
        return (
            <div>
                Edit Campus:
              <form onSubmit={event => {this.props.handleSubmit(event)}}>
                    Campus Name:
                    <br />
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.name}
                        onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    <br />
                    Campus Location:
                    <br />
                    <input
                        type="text"
                        placeholder="location"
                        name="location"
                        value={this.state.location}
                        onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    <br />
                    Campus Image:
                    <br />
                    <input
                        type="text"
                        placeholder="imageURL"
                        name="imageURL"
                        value={this.state.image}
                        onChange={e => {helper(this.state,e); this.setState(newState)}}/>
                    <br />
                    <button type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
        handleSubmit(event) {
            event.preventDefault()
            const id = ownProps.match.params.campusId            
            const name = event.target.name.value
            const location = event.target.location.value
            const image = event.target.imageURL.value
            return dispatch(putCampus({ id, name, location, image }, ownProps.history))
        }
})

export default connect(null, mapDispatchToProps)(EditCampus)