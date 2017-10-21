import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './Reducers';

const loggerMiddleware = createLogger({
    collapsed: true
});

const configureStore = (preloadedState) => {
    return createStore (
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

export default configureStore;