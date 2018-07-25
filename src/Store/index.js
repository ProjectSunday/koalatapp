import { combineReducers, createStore } from 'redux';
import James from '../_Styles/Imgs/james.jpg';
import '../_Styles/director-dash.scss';


function testReducer(state = { test: 'this is a test aaaa' }, action) {
    switch (action.type) {
    case 'TEST_1':
        return {
            test: action.testValue,
        };
    case 'SET_TEST_VALUE':
        return {
            test: state.test + action.value,
        };
    default:
        return state;
    }
}

function userReducer(state = {
    user: {
        firstName: 'James',
        lastName: 'Boyer',
        img: { James },
        email: 'jamesboyer@boyer.com',
        city: 'indianapolis',
        ID: 123,
        points: 24,
        role: 'user',
    },
}, action) {
    switch (action.type) {
    case 'UPDATE_USER':
        var newUser = {
            user: action.user,
        };
        var newState = Object.assign({}, ...state, newUser);

        return newState;

    default:
        return state;
    }
}

const reducer = combineReducers({
    testing: testReducer,
    user: userReducer,
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;
