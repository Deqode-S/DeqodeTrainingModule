import { createStore, combineReducers } from 'redux';
import { Reducer } from 'react';

const rootReducer = combineReducers(
{ update: Reducer }
);

const Store = () => {
    return createStore(rootReducer)
}

export default Store;

