// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import reducer from './reducer'
import {rootSaga} from './redux/saga'

import './reset.less';
import './index.less';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, 
    // applyMiddleware(sagaMiddleware),
    compose(
        applyMiddleware(sagaMiddleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>)
    , 
    document.getElementById('root')
);
