import React from 'react';
import {PlayerList} from '../../components/playerList/PlayerList.js';

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filter:'ALL',
      players: [],
      gms: []
    }

    //Bind Functions 

    this.handlePositionFilter = this.handlePositionFilter.bind(this);
  }

  componentDidMount(){
    //GET Player List
    this.fetchPlayers('ALL');


    //GET GM List
    fetch('http://localhost:3001/api/Gms', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('andrewmac17' + ':' + 'Spo@rt#21')
      },
    }).then(function(response) {
      return response.json();
    }).then(function(gmData){
      const gms = gmData;
      return gms;
    }).then((gms) => {
      this.setState({gms:gms});
    })
    .catch(function(err) {
      console.log(err);
    });

  }


  onSortChange(sortName, sortOrder) {
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

  fetchPlayers(filter = "ALL"){
    //console.log(this.state.filter);

    if(filter == "ALL"){
      var url = 'http://localhost:3001/api/Players?filter[order]=Points%20DESC&[include]=gm';
    }else if(filter == "G"){
      var url = 'http://localhost:3001/api/Players?filter[where][Position]='+filter+'&filter[order]=Points%20DESC&[include]=gm';
    }else{
      var url = 'http://localhost:3001/api/Players?filter[where][Position]='+filter+'&filter[order]=Wins%20DESC&[include]=gm';
    }

    console.log(url);

    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
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

  handlePositionFilter(evt){
    console.log(evt.currentTarget.value);
    console.log('change');
    this.setState({filter:evt.currentTarget.value});
    this.fetchPlayers(evt.currentTarget.value);
  }

  render(){
    return(
      <div>
        <h2>PLayer List</h2>

        <select onChange={this.handlePositionFilter}>
          <option value="ALL">ALL</option>
          <option value="C">C</option>
          <option value="RW">RW</option>
          <option value="LW">LW</option>
          <option value="D">D</option>
          <option value="G">G</option>
        </select>

        <PlayerList onSortChange={this.onSortChange.bind(this)} {...this.state} />
      </div>
    )
  }
}