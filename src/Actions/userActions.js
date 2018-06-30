import store from 'Store';

export const updateUser = (user) => {
    
    var action = {
        type: 'UPDATE_USER',
        user: user,
    }

    store.dispatch(action)
}

