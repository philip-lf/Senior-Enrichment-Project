// take in state object
// take in input name ex. first, last, campus...
// make iterator condition for each key in state
// return this.setState({}) with those conditions

let obj = {}

export function handlerHelper(state, event) {
    Object.keys(state).map(key => {
        obj[key] = event.target.name === key ? event.target.value : state[key]
    })
}

export default obj


