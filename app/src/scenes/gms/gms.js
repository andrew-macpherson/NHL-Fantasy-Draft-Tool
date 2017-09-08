import React from 'react';
import {Link} from 'react-router-dom';

//Import Components
//import {Gms} from '../components/Gms.js';

export class Gms extends React.Component{
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
				<div>
				<table className="table table-bordered table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{this.state.gms.map(( listValue, index ) => {
						return (
							<tr>
								<td>{listValue.id}</td>
								<td>{listValue.GmFirstName}</td>
								<td>{listValue.GmLastName}</td>
							</tr>
						);
						})}
					</tbody>
				</table>
				
			</div>
			</div>
		)
	}
}