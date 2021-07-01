import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';
import reportWebVitals from './reportWebVitals';
import Memori from './components/Memori'
const store =createStore (reducer ,compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
       <Memori />
    </Provider>
 ,
  document.getElementById('root')
);
reportWebVitals();
