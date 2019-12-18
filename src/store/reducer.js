import {
    INPUT_CHANGE,
    GET_ENCODE_REQUEST,
    GET_ENCODE_SUCCESS,
    GET_ENCODE_FAILURE,
    GET_DECODE_REQUEST,
    GET_DECODE_SUCCESS,
    GET_DECODE_FAILURE
} from "./actionTypes";

const initialState = {
    plain: "",
    cypher: "",
    keyToCypher: "",
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            let field = action.e.target.name;
            let value = action.e.target.value;
            return {...state, [field]: value};
        case GET_ENCODE_REQUEST:
            return {...state, loading: true};
        case GET_ENCODE_SUCCESS:
            return {...state, cypher: action.encoded.encoded, loading: false};
        case GET_ENCODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case GET_DECODE_REQUEST:
            return {...state, loading: true};
        case GET_DECODE_SUCCESS:
            return {...state, plain: action.decoded.decoded, loading: false};
        case GET_DECODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;