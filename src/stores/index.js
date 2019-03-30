import Easy, { createModel } from 'redux-easy-action';

import LoginModel from './model/login';

const easy = Easy({
    devtool: true,
    initState: {},
    model: {
        login: createModel('login', LoginModel),
    },
});

export default easy.store;
export const actions = easy.actions;
export const models = easy.models;
