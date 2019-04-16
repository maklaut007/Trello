import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);


ReactDOM.render(
	<Provider store={store }> 
		<App />
	</Provider>, 
	document.getElementById('root'));