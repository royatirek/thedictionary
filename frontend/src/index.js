import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Switch } from "react-router-dom";
import history from './history';




const store = configureStore()

ReactDOM.render(
<Provider store={store}>
<Router history = {history}>
    <Switch>
    <Route exact path='/browse/:word' render={(params) => {
             return <App queryParam={params} />
         }} />
    <Route path='/' component={App } />

    </Switch>
</Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
