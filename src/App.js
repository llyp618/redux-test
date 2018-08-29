import React from 'react'
import {connect} from 'react-redux'
import {ADD,MINUS, ASYNCMINUS} from './store/actions'
class App extends React.Component {
    render(){
        const {number, ADD, MINUS, ASYNCMINUS} = this.props
        return (
            <div>
                <div>result: {number}</div>
                <div>
                    <input ref="n" />
                    <button onClick={() => ADD(parseInt(this.refs.n.value,10) || 1)}>add</button>
                    <button onClick={() => MINUS(parseInt(this.refs.n.value,10) || 1)}>minus</button>
                    <button onClick={() => ASYNCMINUS(parseInt(this.refs.n.value, 10) || 1)}>ASYNCminus</button>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        number: state.number
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        ADD: (n) => dispatch(ADD(n)),
        MINUS: (n) => dispatch(MINUS(n)),
        ASYNCMINUS: (n) => dispatch(ASYNCMINUS(n))
    }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App