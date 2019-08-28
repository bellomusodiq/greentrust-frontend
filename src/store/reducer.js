import { UPDATE_DATA } from "./actionTypes";

const initialState = {
    messages: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case UPDATE_DATA:
            return {
                ...state,
                messages: action.payload
            }
            break;
    }
    return state;
}

export default reducer;