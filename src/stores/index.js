import Easy, { createModel } from 'redux-easy-action';

import UserModel from './model/user';

const easy = new Easy({
    devtool: true,
    initState: {},
    model: {
        user: createModel('user', UserModel),
    },
});

export default easy.store;
export const actions = easy.actions;
export const models = easy.models;
