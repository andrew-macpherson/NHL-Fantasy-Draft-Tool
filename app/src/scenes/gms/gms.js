import React from 'react';
import {Link} from 'react-router-dom';

//Import Components
import {AddGmButton} from '../../scenes/gms/components/AddGmButton.js';
import {AddGmForm} from '../../scenes/gms/components/AddGmForm.js';

export class Gms extends React.Component{
	constructor(props){
	    super(props);

	    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	    this.handleLastNameChange = this.handleLastNameChange.bind(this);
	    this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
	    this.handleAddGm = this.handleAddGm.bind(this);

	    this.state = {
	    	gms:[],
	    	add_gm_form: {GmFirstName:"",GmLastName:"",GmTeamName:""}
	    }
	}

	componentDidMount(){
		//Get list of GMs
		fetch('http://localhost:3001/api/Gms',{
			'method': 'get',
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then(function(response){
			return response.json();
		}).then((gmData) => {
			console.log(gmData);
			this.setState({gms:gmData});
		});
	}

	handleFirstNameChange(evt){
		this.setState({add_gm_form:{
			GmFirstName:evt.currentTarget.value,
			GmLastName:this.state.add_gm_form.GmLastName,
			GmTeamName:this.state.add_gm_form.GmTeamName
		}});
	}

	handleLastNameChange(evt){
		this.setState({add_gm_form:{
			GmFirstName:this.state.add_gm_form.GmFirstName,
			GmLastName:evt.currentTarget.value,
			GmTeamName:this.state.add_gm_form.GmTeamName
		}});
	}

	handleTeamNameChange(evt){
		this.setState({add_gm_form:{
			GmFirstName:this.state.add_gm_form.GmFirstName,
			GmLastName:this.state.add_gm_form.GmLastName,
			GmTeamName:evt.currentTarget.value
		}});
	}

	handleAddGm(evt){

		console.log(this.state.add_gm_form.GmFirstName);
		console.log(this.state.add_gm_form.GmLastName);
		console.log(this.state.add_gm_form.GmTeamName);

		const gmData = {
			GmFirstName: this.state.add_gm_form.GmFirstName,
			GmLastName: this.state.add_gm_form.GmLastName,
			GmTeamName: this.state.add_gm_form.GmTeamName
		}

		//Add Gm
	    fetch('http://localhost:3001/api/Gms',{
	      method:'POST',
	      body: JSON.stringify(gmData),
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    }).then(function(response) {
	    	alert("General Manager was added successfully");
			return console.log('GM Added');
	    }).catch(function(err){
	      alert(err);
	    });


		

		// reset form 
		this.setState({add_gm_form:{GmTeamName:"",GmLastName:"",GmTeamName:""}});
	}

	handleDeleteGm(props){
		/*
		const r = confirm('are you sure?');
		if(r == true){

		}
		*/
		//Delete Gm
	    fetch('http://localhost:3001/api/Gms',{
	      method:'DELETE',
	      body: JSON.stringify({id:props.gm_id}),
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    }).then(function(response) {
	    	alert("General Manager was added successfully");
			return console.log('GM Added');
	    }).catch(function(err){
	      alert(err);
	    });

	}

	render(){
		return(
			<div>

				<div className="d-flex">
					<div className="add-gm">
						<h4>Add GM</h4>
						<AddGmForm 
						onFirstNameChange={this.handleFirstNameChange}
						onLastNameChange={this.handleLastNameChange}
						onTeamNameChange={this.handleTeamNameChange}
						onAddGm={this.handleAddGm}
						{...this.state} />
					</div>
					<div className="gm-list">
						<h4>General Manager List</h4>
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
										<td>
											<Link className="btn btn-primary btn-sm" to={'gm/'+gm.id}>View Team</Link>
											<a className="btn btn-danger btn-sm" gm_id={gm.id} onClick={this.handleDeleteGm}>Delete</a>
										</td>
									</tr>
								);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}