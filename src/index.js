import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//import any assets we may need
import './libraries/bootstrap/css/bootstrap.min.css';
//import './libraries/bootstrap/js/bootstrap.min.js';
import './app.css';

//main app container
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));
//registerServiceWorker();