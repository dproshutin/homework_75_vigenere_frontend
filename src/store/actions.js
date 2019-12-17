import {INPUT_CHANGE} from "./actionTypes";

export const valueChanged = (e) => {
    e.persist();
    return {type: INPUT_CHANGE, e};
};