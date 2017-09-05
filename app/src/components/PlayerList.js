import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//Import Components
import {PlayerListGmSelector} from '../components/PlayerListGmSelector.js';


//Constants 

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
    }
  }

  render(){
    
    const gmSelector = () => (<PlayerListGmSelector gmList={this.props.gms} />);

    return(
      <div>
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
      </div>
    )
  }
}