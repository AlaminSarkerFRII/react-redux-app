import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstant";

// 1  reducers -> increment -> count -> count + 1.
// 2  reducers -> decrement -> count -> count - 1.
// 3  reducers -> reset -> count -> 0


const initialStateCount = {
    count : 0
};
// reducers
const CounterReducer = (state=initialStateCount,action)=>{

    switch (action.type) {
        case INCREMENT: 
            return {
                ...state,
                count : action.count + 1 ,
            }
        case DECREMENT: 
            return {
                ...state,
                count : action.count - 1 ,
            }
        case RESET: 
            return {
                ...state,
                count : 0 ,
            }
        
        default:
             return state;
    }
}

export default CounterReducer;