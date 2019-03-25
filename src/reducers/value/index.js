const UPDATE_VALUE = 'UPDATE_VALUE';
const REPLACE_VALUE = 'REPLACE_VALUE';

const initialState = {};

//reducer: takes current state and an action to handle
function partOneReducer(state = initialState, action) {

    switch(action.type){

        case UPDATE_VALUE:
            return { ...state, value: state.value + action.payload }

        case REPLACE_VALUE:
            return { ...state, value: action.payload }

        default:
            return state;
    }
}

export default partOneReducer;

//action creators
export function updateValue(number) {
    return { type: UPDATE_VALUE, payload: number }
}

export function replaceValue(number) {
    return { type: REPLACE_VALUE, payload: number }
}
