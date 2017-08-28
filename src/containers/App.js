import React from 'react';
import {RecipeBlock} from '../components/RecipeBlock.js';
import {Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


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

      var playersObj = [];
      for(var key in players){
        let player = {
          'ID': players[key].player.ID,
          'City': players[key].team.City,
          'TeamName': players[key].team.Name,
          'FirstName': players[key].player.FirstName,
          'LastName': players[key].player.LastName,
          'Age': players[key].player.Age,
          'GamesPlayed': players[key].stats.GamesPlayed['#text'],
          'Goals': players[key].stats.stats.Goals['#text'],
          'Assists': players[key].stats.stats.Assists['#text'],
          'PTS': players[key].stats.stats.Points['#text'],
        };
        playersObj.push(player);
      }

      this.setState({players:playersObj});
    })
    .catch(function(err) {
      console.log(err);
    });
  }


  onSortChange(sortName, sortOrder) {
    console.log(this.state.players);
    if (sortOrder === 'asc') {
      this.state.players.sort(function(a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return 1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return -1;
        }
        return 0;
      });
    } else {
      this.state.players.sort(function(a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return -1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({
      players: this.state.players
    });
  }

  render(){
    return(
      <PlayerList onSortChange={this.onSortChange.bind(this)} {...this.state} />
    )
  }
}

class PlayerList extends React.Component {
  constructor(props){
    super(props);

    this.options = {
      defaultSortName: 'TeamName',  // default sort column name
      defaultSortOrder: 'asc',  // default sort order
      onSortChange: this.props.onSortChange
    };
  }

  render(){
    return(
      <div>
        <h2>PLayer List</h2>

        <BootstrapTable 
          data={this.props.players} 
          version='4' 
          remote={ true }
          options={ this.options }>
          <TableHeaderColumn dataField='ID' isKey>Player ID</TableHeaderColumn>
          <TableHeaderColumn dataField='City' dataSort={ true }>City</TableHeaderColumn>
          <TableHeaderColumn dataField='TeamName' dataSort={ true }>Team Name</TableHeaderColumn>
          <TableHeaderColumn dataField='FirstName' dataSort={ true }>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField='LastName' dataSort={ true }>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField='Age' dataSort={ true }>Age</TableHeaderColumn>
          <TableHeaderColumn dataField='GamesPlayed' dataSort={ true }>Games Played</TableHeaderColumn>
          <TableHeaderColumn dataField='Goals' dataSort={ true }>Goals</TableHeaderColumn>
          <TableHeaderColumn dataField='Assists' dataSort={ true }>Assists</TableHeaderColumn>
          <TableHeaderColumn dataField='PTS' dataSort={ true }>PTS</TableHeaderColumn>
        </BootstrapTable>

      </div>
    )
  }
}

class Player extends React.Component{

  render(){
    return(
      <div>
        fdsfds
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