import James from '../_Styles/Imgs/james.jpg';
import '../_Styles/director-dash.scss';

const initialState = {
    profile: {
        firstName: 'James',
        lastName: 'Boyer',
        img: { James },
        email: 'jamesboyer@boyer.com',
        city: 'indianapolis',
        ID: 123,
        points: 24,
        role: 'user',
    },
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
            const blah = Object.assign({}, state, user);
            return blah;
        }

        default:
            return state;
    }
};
