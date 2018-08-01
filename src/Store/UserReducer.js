import James from '../_Styles/Imgs/james.jpg';
import '../_Styles/director-dash.scss';
// import cloneDeep from 'lodash.clonedeep';

const initialState = {
    profile: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER': {
            const newUser = {
                user: action.user,
            };
            return Object.assign({}, ...state, newUser);
        }
        case 'USER_SET_PROFILE': {
            const { profile } = action;
            return Object.assign({}, ...state, { profile });
        }
        case 'USER_SET': {
            const { user } = action;
            return { ...state, ...user };
        }
        default:
            return state;
    }
};
