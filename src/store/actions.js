import {
    INPUT_CHANGE,
    GET_ENCODE_DECODE_REQUEST,
    GET_ENCODE_SUCCESS,
    GET_DECODE_SUCCESS,
    GET_ENCODE_DECODE_FAILURE,
    GET_INFORMED
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
        if (password.length > 0) {
            dispatch(getTextEncodedDecodedRequest());
            axios.post('/encode', {password, message}).then(response => {
                dispatch(getTextEncodedSuccess(response.data));
            }, err => {
                dispatch(getTextEncodedDecodedFailure(err));
            });
        } else {
            dispatch(getInformed());
        }
    };
};

const getTextEncodedDecodedRequest = () => {
    return {type: GET_ENCODE_DECODE_REQUEST};
};

const getTextEncodedSuccess = (encoded) => {
    return {type: GET_ENCODE_SUCCESS, encoded};
};

const getTextEncodedDecodedFailure = (error) => {
    return {type: GET_ENCODE_DECODE_FAILURE, error};
};

export const getTextDecoded = () => {
    return (dispatch, getState) => {
        const password = getState().keyToCypher;
        const message = getState().cypher;
        if (password.length > 0) {
            dispatch(getTextEncodedDecodedRequest());
            axios.post('/decode', {password, message}).then(response => {
                dispatch(getTextDecodedSuccess(response.data));
            }, err => {
                dispatch(getTextEncodedDecodedFailure(err));
            });
        } else {
            dispatch(getInformed());
        }
    };
};

const getTextDecodedSuccess = (decoded) => {
    return {type: GET_DECODE_SUCCESS, decoded};
};

export const getInformed = () => {
    return {type: GET_INFORMED};
};