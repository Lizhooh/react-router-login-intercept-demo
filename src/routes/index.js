
import Index from '../views/Index';
import Login from '../views/Login';
import User from '../views/User';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/user',
        component: User,
    },
];

