function testReducer(state = { test: 'this is a test aaaa' }, action) {
    switch(action.type) {
        case 'TEST_1':
          return {
              test: action.testValue
          }
        default:
          return state;
    }
}

import { combineReducers, createStore } from 'redux';
const reducer = combineReducers({ testing: testReducer });
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;