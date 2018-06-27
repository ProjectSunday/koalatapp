import store from 'Store';

export const setTest = (val) => {

    var action = {
        type: 'SET_TEST_VALUE',
        value: val
    }

    store.dispatch(action)
}