import axios from 'axios';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const fetchData = () => {
    return dispatch => {
        dispatch(requestData());
    }
}