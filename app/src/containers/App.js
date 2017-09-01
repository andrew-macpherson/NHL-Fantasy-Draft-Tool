import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {PlayerList} from '../components/PlayerList.js';
import {Player} from '../components/Player.js';

import {Gms} from '../components/Gms.js';
import {Gm} from '../components/Gm.js';

import {Home} from '../containers/Home.js';

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

      <header className="container">
        <h1>NHL Fantasy Draft Tool</h1>
      </header>

      <div className="container">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/player/:id" component={Player} />

        <Route exact={true} path="/gms" component={Gms} />
        <Route exact={true} path="/gm/:id" component={Gm} />
      </div>
    </div>
    )
  }
}


export default App;