import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Gms extends React.Component{
	constructor(props){
	    super(props);
	}

	componentDidMount(){

	}

	render(){
		return(
			<div>
				<h2>GM List</h2>
				<BootstrapTable 
		          version='4'>
		          <TableHeaderColumn dataField='ID' isKey>Player ID</TableHeaderColumn>
		          <TableHeaderColumn dataField='Name' dataSort={ true }>Name</TableHeaderColumn>
		          <TableHeaderColumn dataField='TeamName' dataSort={ true }>Team Name</TableHeaderColumn>
		          <TableHeaderColumn dataField='DraftedPlayers' dataSort={ true }>Drafted Players</TableHeaderColumn>
		          <TableHeaderColumn dataSort={ true }><button className="btn btn-primary">View GM</button></TableHeaderColumn>
		        </BootstrapTable>
			</div>
		)
	}
}