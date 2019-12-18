import {
    INPUT_CHANGE,
    GET_ENCODE_REQUEST,
    GET_ENCODE_SUCCESS,
    GET_ENCODE_FAILURE
} from "./actionTypes";
import axios from "../axios-api";

export const valueChanged = (e) => {
    e.persist();
    return {type: INPUT_CHANGE, e};
};
export const getTextEncoded = () => {
    return (dispatch, getState) => {
        const password = getState().keyToCypher;
        const message = getState().plain;
        dispatch(getTextEncodedRequest());
        axios.post('/encode', {password, message}).then(response => {
            dispatch(getTextEncodedSuccess(response.data));
        }, err => {
            dispatch(getTextEncodedFailure(err));
        });
    };
};

export const getTextEncodedRequest = () => {
    return {type: GET_ENCODE_REQUEST};
};

export const getTextEncodedSuccess = (encoded) => {
    return {type: GET_ENCODE_SUCCESS, encoded};
};

export const getTextEncodedFailure = (error) => {
    return {type: GET_ENCODE_FAILURE, error};
};