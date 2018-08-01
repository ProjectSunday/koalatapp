import { combineReducers, createStore } from 'redux';
import '../_Styles/director-dash.scss';
import UserReducer from './UserReducer';
import LeaderboardReducer from './LeaderboardReducer';

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

const reducer = combineReducers({
    testing: testReducer,
    user: UserReducer,
    leaderboard: LeaderboardReducer,
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;
