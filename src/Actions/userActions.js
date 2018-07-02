import store from 'Store';

export const updateUser = (user) => {
    const action = {
        type: 'UPDATE_USER',
        user,
    };

    store.dispatch(action);
};
