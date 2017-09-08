import React from 'react';
import {Link} from 'react-router-dom';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//Import Components
import {PlayerListRow} from '../components/PlayerListRow.js';
 

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

  updatePlayerGm(params){
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
  updatePlayerCost(params){
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
          {this.props.players.map(( listValue, index ) => {
            return (
              <PlayerListRow onUpdatePlayerCost={this.updatePlayerCost} onUpdateGm={this.updatePlayerGm} key={index} data={listValue} gmList={this.props.gms} />
            );
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

/*
<tr key={index} className={rowClass}>
  <td>{listValue.id}</td>
  <td>{listValue.TeamCity}</td>
  <td>{listValue.TeamName}</td>
  <td>{listValue.FirstName}</td>
  <td>{listValue.LastName}</td>
  <td>{listValue.Age}</td>
  <td>{listValue.GamesPlayed}</td>
  <td>{listValue.Goals}</td>
  <td>{listValue.Assists}</td>
  <td>{listValue.Points}</td>
  <td>
    <PlayerListCostInput updateCost={this.updatePlayerCost} playerId={listValue.id} defaultValue={listValue.Cost} />
  </td>
  <td>
      <PlayerListGmSelector onUpdateGm={this.updatePlayerGm} currentGm={listValue.GmId} playerId={listValue.id} gmList={this.props.gms} />
  </td>
</tr>
*/
/*
<BootstrapTable 
          data={this.props.players} 
          version='4' 
          remote={ true }
          options={ this.options }
          cellEdit={ this.editProps }>
          <TableHeaderColumn dataField='id' isKey editable={ false }>Player ID</TableHeaderColumn>
          <TableHeaderColumn dataField='TeamCity' dataSort={ true } editable={ false }>City</TableHeaderColumn>
          <TableHeaderColumn dataField='TeamName' dataSort={ true } editable={ false }>Team Name</TableHeaderColumn>
          <TableHeaderColumn dataField='FirstName' dataSort={ true } editable={ false }>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField='LastName' dataSort={ true } editable={ false }>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField='Age' dataSort={ true } editable={ false }>Age</TableHeaderColumn>
          <TableHeaderColumn dataField='GamesPlayed' dataSort={ true } editable={ false }>Games Played</TableHeaderColumn>
          <TableHeaderColumn dataField='Goals' dataSort={ true } editable={ false }>Goals</TableHeaderColumn>
          <TableHeaderColumn dataField='Assists' dataSort={ true } editable={ false }>Assists</TableHeaderColumn>
          <TableHeaderColumn dataField='Points' dataSort={ true } editable={ false }>PTS</TableHeaderColumn>
          <TableHeaderColumn dataField="Cost" dataSort={true} editable={ true }>Cost</TableHeaderColumn>
          <TableHeaderColumn dataField="GmId" editable={ true } customEditor={{getElement: gmSelector}}>Player Owned By</TableHeaderColumn>
        </BootstrapTable>
        */