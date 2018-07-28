import store from 'Store';

export const setProfile = (profile) => {
    console.log('profile', profile);

    store.dispatch({
        type: 'USER_SET_PROFILE',
        profile,
    });
};
