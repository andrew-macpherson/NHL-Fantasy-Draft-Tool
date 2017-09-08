import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

// Import Components
import {PlayerList} from '../components/PlayerList.js';
import {Player} from '../components/Player.js';

//Import Containers
import {Home} from '../containers/Home.js';
import {GmsContainer} from '../containers/GmsContainer.js';
import {GmContainer} from '../containers/GmContainer.js';

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
        <Route exact={true} path="/player/:id" component={Player} />

        <Route exact={true} path="/gms" component={GmsContainer} />
        <Route exact={true} path="/gm/:id" component={GmContainer} />
      </div>
    </div>
    )
  }
}


export default App;