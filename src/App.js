import React from 'react'
import {connect} from 'react-redux'
import {ADD,MINUS} from './store/actions'
import {bindActionCreators} from 'redux'
class App extends React.Component {
    render(){
        const {number, ADD, MINUS} = this.props
        return (
            <div>
                <div>result: {number}</div>
                <div>
                    <input ref="n" />
                    <button onClick={() => ADD(parseInt(this.refs.n.value,10) || 1)}>add</button>
                    <button onClick={() => MINUS(parseInt(this.refs.n.value, 10) || 1)}>minus</button>
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
    // 以下两种方法效果是一样的
    /* 方法一：*/
    // return {
    //     ADD: (n) => dispatch(ADD(n)),
    //     MINUS: (n) => dispatch(MINUS(n))
    // }
    /* 方法二 */
    return bindActionCreators({
        ADD,
        MINUS
    },dispatch)

}
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App