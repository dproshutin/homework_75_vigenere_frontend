import {
    INPUT_CHANGE,
    GET_ENCODE_REQUEST,
    GET_ENCODE_SUCCESS,
    GET_ENCODE_FAILURE,
    GET_DECODE_REQUEST,
    GET_DECODE_SUCCESS,
    GET_DECODE_FAILURE
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

export const getTextDecoded = () => {
    return (dispatch, getState) => {
        const password = getState().keyToCypher;
        const message = getState().cypher;
        dispatch(getTextDecodedRequest());
        axios.post('/decode', {password, message}).then(response => {
            dispatch(getTextDecodedSuccess(response.data));
        }, err => {
            dispatch(getTextDecodedFailure(err));
        });
    };
};

export const getTextDecodedRequest = () => {
    return {type: GET_DECODE_REQUEST};
};

export const getTextDecodedSuccess = (decoded) => {
    return {type: GET_DECODE_SUCCESS, decoded};
};

export const getTextDecodedFailure = (error) => {
    return {type: GET_DECODE_FAILURE, error};
};