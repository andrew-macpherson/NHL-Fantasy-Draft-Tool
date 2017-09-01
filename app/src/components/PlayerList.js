import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class PlayerList extends React.Component {
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