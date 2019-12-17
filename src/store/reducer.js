import {INPUT_CHANGE} from "./actionTypes";

const initialState = {
    plain: "",
    cypher: "",
    keyToCypher: "",
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            let field = action.e.target.name;
            let value = action.e.target.value;
            return {...state, [field]: value};
        default:
            return state;
    }
};

export default reducer;