import React from 'react';
import {Link} from 'react-router-dom';

//Import Components

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
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.gms.map(( gm, index ) => {
						return (
							<tr>
								<td>{gm.id}</td>
								<td>{gm.GmFirstName}</td>
								<td>{gm.GmLastName}</td>
								<td><Link className="btn btn-primary btn-sm" to={'gm/'+gm.id}>View Team</Link></td>
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