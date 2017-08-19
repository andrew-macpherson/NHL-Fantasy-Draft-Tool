import React from 'react';
import {RecipeBlock} from '../components/RecipeBlock.js';
import {Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
    <div>
      <header className="container">
        <h1>NHL Fantasy Draft Tool</h1>
      </header>

      <div className="container">
        <Route exact={true} path="/" component={Home} />
      </div>
    </div>
    )
  }
}

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    // GET feed data
    fetch('https://api.mysportsfeeds.com/v1.1/pull/nhl/2016-2017-regular/cumulative_player_stats.json?playerstats=G,A,Pts,Sh', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('andrewmac17' + ':' + 'Spo@rt#21')
     },
    }).then(function(response) {
      return response.json();
    }).then(function(playerData){
      const players = playerData.cumulativeplayerstats.playerstatsentry;
      return players;
    }).then((players) => {
      console.log(players);
      this.setState({players:players});
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render(){
    return(
      <div>
        <h2>PLayer List</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Name</th>
              <th>Age</th>
              <th>Games Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map(player => 
              <tr>
                <td>{player.team.City} {player.team.Name}</td>
                <td>{player.player.FirstName} {player.player.LastName}</td>
                <td>{player.player.Age}</td>
                <td>{player.stats.GamesPlayed['#text']}</td>
                <td>{player.stats.stats.Goals['#text']}</td>
                <td>{player.stats.stats.Assists['#text']}</td>
                <td>{player.stats.stats.Points['#text']}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

/*
class Recipe extends React.Component{
  render(){
    return(
      <div>
        <h2>Recipe</h2>

        <div className="recipe-list d-flex justify-content-center flex-wrap">
          <RecipeBlock title="Recipe 1" image="http://via.placeholder.com/350x150" />
        </div>
      </div>
    )
  }
}*/

export default App;