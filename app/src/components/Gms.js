import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Gms extends React.Component{
	constructor(props){
	    super(props);

		this.options = {
			defaultSortName: 'id',  // default sort column name
			defaultSortOrder: 'asc'  // default sort order
		};
	}

	componentDidMount(){

	}

	render(){
		console.log(this.props);
		return(
			<div>
				<BootstrapTable 
					data={this.props.gms} 
					version='4'
					remote={ true }
					options={ this.options }>
					<TableHeaderColumn dataField='id' isKey>GM ID</TableHeaderColumn>
					<TableHeaderColumn dataField='FirstName' dataSort={ true }>First Name</TableHeaderColumn>
					<TableHeaderColumn dataField='LastName' dataSort={ true }>Last Name</TableHeaderColumn>
				</BootstrapTable>
			</div>
		)
	}
}