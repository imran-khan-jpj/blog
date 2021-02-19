import React from 'react';
import ReactDOM from 'react-dom';
// redux settings
import {Provider} from 'react-redux';
import store from './store';

// React router 
import {BrowserRouter as Router} from 'react-router-dom'
//Styling
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
    	<Provider store={store}>
		    <Router>
			   <App />
		    </Router>
		</Provider>    
    </React.StrictMode>,
  document.getElementById('root')
);

