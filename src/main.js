import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import config from 'config/config';
import {initialState} from 'config/initialState';
import 'assets/styles/sass/main.scss';

//TO DO for install app locally
//Register service worker
//Check registration point and listen install event
//In callback, set up cache manifest
//listen fetch events to get content from the cache

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
    <Provider store={store}>
    <Root/>
</Provider>, document.getElementById('app'));
