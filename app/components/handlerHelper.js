// take in state object
// take in input name ex. first, last, campus...
// make iterator condition for each key in state
// return this.setState({}) with those conditions

let newState = {}

export function helper(state, event) {
    Object.keys(state).map(key => {
        newState[key] = event.target.name === key ? event.target.value : state[key]
    })
}

export default newState


// ***IMPORTANT***
// state names must equal input names
// PROS:
    // does not require to be binded
    // no unique function to be created 
    // allows for less mistakes 

// import newState, { handlerHelper } from './handlerHelper'

// onChange={e => {helper(this.state,e); this.setState(newState)}}
