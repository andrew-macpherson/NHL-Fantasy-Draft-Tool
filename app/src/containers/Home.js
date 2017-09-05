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
    fetch('http://localhost:3001/api/Players', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('andrewmac17' + ':' + 'Spo@rt#21')
     },
    }).then(function(response) {
      return response.json();
    }).then(function(playerData){
      const players = playerData;
      return players;
    }).then((players) => {
      this.setState({players:players});
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
      <div>
        <h2>PLayer List</h2>
        <PlayerList onSortChange={this.onSortChange.bind(this)} {...this.state} />
      </div>
    )
  }
}