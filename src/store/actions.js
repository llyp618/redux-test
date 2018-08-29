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

