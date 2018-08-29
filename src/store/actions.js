import * as Types from './actionTypes'
export const ADD = (n) => {
    return {
        type: Types.ADD,
        payload: n
    }
}

export const MINUS = (n) => {
    return {
        type: Types.MINUS,
        payload: n
    }
}

// 异步action
// 返回一个带有dipatch的函数给 store调用
export const ASYNCMINUS = (n) => (dispatch) => {
    setTimeout(() => {
        dispatch(MINUS(n))
    },1000)
}
