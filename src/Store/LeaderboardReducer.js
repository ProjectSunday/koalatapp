// import cloneDeep from 'lodash.clonedeep';

const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LEADERBOARD_SET': {
            return action.leaderboard;
        }
        default:
            return state;
    }
};
