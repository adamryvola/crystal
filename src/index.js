import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'antd/dist/antd.css';
import Init from './modules/Init/containers/Root';
import Dashboard from './modules/Dashboard/containers/Root';
import Login from './modules/Login/containers/Root';
import SignUp from './modules/SignUp/containers/Root';
import * as serviceWorker from './serviceWorker';
import createStore from './store';
import './core.css';

const store = createStore({});

const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Init} />
                <Route path="/app" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
