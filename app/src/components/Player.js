import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Player extends React.Component{
	constructor(props){
	    super(props);
	}

	render(){
		console.log(this.props.match.params.id);

		return(
			<div>
				fdsfds
			</div>
		)
	}
}