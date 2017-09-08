import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

// Import Components

//Import Containers
import {Home} from './scenes/home/home.js';
import {Gms} from './scenes/gms/gms.js';


//import any assets we may need
import './libraries/bootstrap/css/bootstrap.min.css';
//import './libraries/bootstrap/js/bootstrap.min.js';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './app.css';


//import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-toggleable-lg navbar-dark">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/">NHL Draft Tool</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gms">GMs</Link>
            </li>
          </ul>
        </div>
      </nav>

      <header className="container-fluid">
        <h1>NHL Fantasy Draft Tool</h1>
      </header>

      <div className="container-fluid">
        <Route exact={true} path="/" component={Home} />

        <Route exact={true} path="/gms" component={Gms} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));
//registerServiceWorker();