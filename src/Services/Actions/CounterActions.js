import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstant"

// increment counter
export const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

// decrement counter
export const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

// resetCounter

export const resetCounter = () => {
    return {
        type: RESET,
    }
}