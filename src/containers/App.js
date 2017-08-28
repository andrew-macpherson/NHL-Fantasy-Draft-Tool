import React from 'react';
import {Route} from 'react-router-dom';
import {PlayerList} from '../components/PlayerList.js';
import {Player} from '../components/Player.js';

import {Home} from '../containers/Home.js';

class App extends React.Component {
  render() {
    return (
    <div>
      <header className="container">
        <h1>NHL Fantasy Draft Tool</h1>
      </header>

      <div className="container">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/player" component={Player} />
      </div>
    </div>
    )
  }
}


export default App;