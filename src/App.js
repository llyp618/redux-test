import React from 'react'
import {connect} from 'react-redux'
class App extends React.Component {
    render(){
        const {number, ADD, MINUS, ASYNCMINUS, ASYNCADD} = this.props
        return (
            <div>
                <div>result: {number}</div>
                <div>
                    <input ref="n" />
                    <button onClick={() => ADD(parseInt(this.refs.n.value,10) || 1)}>add</button>
                    <button onClick={() => MINUS(parseInt(this.refs.n.value,10) || 1)}>minus</button>
                    <button onClick={() => ASYNCMINUS(parseInt(this.refs.n.value, 10) || 1)}>ASYNCminus</button>
                    <button onClick={() => ASYNCADD(parseInt(this.refs.n.value, 10) || 1)}>ASYNCadd</button>
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
        ADD: (n) => dispatch({type: 'ADD', payload: n}),
        MINUS: (n) => dispatch({type: 'MINUS', payload: n}),
        ASYNCMINUS: (n) => dispatch({type: 'ASYNCMINUS', payload: n}),
        ASYNCADD: (n) => dispatch({type: 'ASYNCADD', payload: n})
    }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App