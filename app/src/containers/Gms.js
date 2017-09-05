import React from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//Import Components
import {Gms} from '../components/Gms.js';

export class GmsContainer extends React.Component{
	constructor(props){
	    super(props);

	    this.state = {
	    	gms:[]
	    }
	}

	componentDidMount(){
		//Get list of GMs
		fetch('http://localhost:3001/api/Gms',{
			'method': 'get',
			'headers': {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + btoa('andrewmac17' + ':' + 'Spo@rt#21')
			}
		}).then(function(response){
			return response.json();
		}).then((gmData) => {
			console.log(gmData);
			this.setState({gms:gmData});
		});
	}

	render(){
		return(
			<div>
				<h2>GM List</h2>
				<Gms gms={this.state.gms} />
			</div>
		)
	}
}