import React from 'react';

//Import Components
import {PlayerListRow} from '../../components/playerList/PlayerListRow.js';
 

export class PlayerList extends React.Component {
  constructor(props){
    super(props);

    this.options = {
      defaultSortName: 'TeamName',  // default sort column name
      defaultSortOrder: 'asc',  // default sort order
      onSortChange: this.props.onSortChange
    };

    this.editProps = {
      mode: 'click'
    };

  }

  handleUpdatePlayerGm(params){
    // SET DATA
    var playerData = {
      GmId:params.gmId,
      id: params.playerId
    }

    //UPDATE PLAYER GM
    fetch('http://localhost:3001/api/Players',{
      method:'PATCH',
      body: JSON.stringify(playerData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      return console.log('Player GM updated');
    }).catch(function(err){
      alert(err);
    });
  }

  //Update Player Cost
  handleUpdatePlayerCost(params){
    // SET DATA
    var playerData = {
      Cost:params.cost,
      id: params.playerId
    }

    //UPDATE PLAYER GM
    fetch('http://localhost:3001/api/Players',{
      method:'PATCH',
      body: JSON.stringify(playerData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(function(response) {
      return console.log('Player Cost updated');
    }).catch(function(err){
      alert(err);
    });
  }

  render(){
    //console.log(this.props.players);
    return(
      <div>

        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Player ID</th>
              <th>City</th>
              <th>Team Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Games Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Points</th>
              <th>Cost</th>
              <th>Gm</th>
            </tr>
          </thead>
          <tbody>
          {this.props.players.map(( player, index ) => {
            return (
              <PlayerListRow key={index} data={player} gmList={this.props.gms} onUpdatePlayerCost={this.handleUpdatePlayerCost} onUpdateGm={this.handleUpdatePlayerGm} />
            );
          })}
          </tbody>
        </table>
      </div>
    )
  }
}