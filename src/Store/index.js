function testReducer(state = { test: 'this is a test aaaa' }, action) {
    switch(action.type) {
        case 'TEST_1':
          return {
              test: action.testValue
          }
        case 'SET_TEST_VALUE':
          return {
              test: state.test + action.value
          }
        default:
          return state;
    }
}

function userReducer(state = { BLAH: 'blah' }, action) {
    switch(action.type) {
        case 'USER1':
          return {
              test: action.testValue
          }
        case 'USER2':
          return {
              test: state.test + action.value
          }
        default:
          return state;
    }
}


import { combineReducers, createStore } from 'redux';
const reducer = combineReducers({
    testing: testReducer,
    user: userReducer
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;