import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from './routes';
import Loading from './components/Loading';
import { actions } from './stores';

const action = actions.user;

class App extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        action.checkLoginState(
            location.pathname,
            () => history.replace('/login'),
        );
    }
    render() {
        const { isLogin, checkEnd } = this.props.user;
        if (!isLogin && !checkEnd) return <Loading />;

        return (
            <div>
                <Switch>
                    {routes.map((item, index) => (
                        <Route key={index} {...item} />
                    ))}
                </Switch>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state.user }),
)(withRouter(App));

