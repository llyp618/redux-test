import * as Types from './actionTypes'

/** 纯 action */
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




/** 带'副作用'的异步 action */

// 返回一个带有dipatch的函数给 store调用
export const ASYNCMINUS = (n) => (dispatch) => {
    setTimeout(() => {
        dispatch(MINUS(n))
    },1000)
}
