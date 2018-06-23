function test1(state = {}, action) {
    switch(action.type) {
        case 'TEST_1':
          return {
              test: action.testValue
          }
    }
}

import { combineReducers, createStore } from 'redux';
const reducer = combineReducers({test1});
const store = createStore(reducer);