import React from 'react';
import {Route} from 'react-router-dom';
import {PlayerList} from '../components/PlayerList.js';

export class Home extends React.Component{
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