import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

export default (initialState) => createStore(
    combineReducers({
        config: (state = {}) => state,
    }),
    initialState,
    applyMiddleware(reduxThunk),
);
