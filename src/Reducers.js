import { combineReducers } from 'redux';
import {
    REQUEST_DATA,
    RECEIVE_DATA
} from './Actions';

const isLoading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return true;
        default:
            return state;
    }
}

const reducer = combineReducers({
    isLoading
})

export default reducer;