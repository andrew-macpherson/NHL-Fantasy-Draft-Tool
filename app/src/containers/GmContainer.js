import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//Import Components

export class GmContainer extends React.Component{
	constructor(props){
	    super(props);
	}

	componentDidMount(){

	}

	render(){
		console.log(this.props.match.params.id);

		return(
			<div>

			</div>
		)
	}
}