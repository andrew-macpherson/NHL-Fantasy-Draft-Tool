import React from 'react';
import {Link} from 'react-router-dom';

//Import Components
import {AddGmButton} from '../../scenes/gms/components/AddGmButton.js';
import {AddGmForm} from '../../scenes/gms/components/AddGmForm.js';
import {GmRow} from '../../scenes/gms/components/GmRow.js';

export class Gms extends React.Component{
	constructor(props){
	    super(props);

	    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	    this.handleLastNameChange = this.handleLastNameChange.bind(this);
	    this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
	    this.handleAddGm = this.handleAddGm.bind(this);
	    this.handleDeleteGm = this.handleDeleteGm.bind(this);

	    this.state = {
	    	gms:[],
	    	add_gm_form: {GmFirstName:"",GmLastName:"",GmTeamName:""}
	    }
	}

	componentDidMount(){
		this.fetchGms();
	}

	fetchGms(){
		//Get list of GMs
		fetch('http://localhost:3001/api/Gms',{
			'method': 'get',
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then(function(response){
			return response.json();
		}).then((gmData) => {
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
	    }).then((response) => {
	    	this.fetchGms();
	    	alert("General Manager was added successfully");
			return console.log('GM Added');
	    }).catch(function(err){
	      alert(err);
	    });

		// reset form 
		this.setState({add_gm_form:{GmTeamName:"",GmLastName:"",GmTeamName:""}});
	}

	handleDeleteGm(id,evt){
		/*
		const r = confirm('are you sure?');
		if(r == true){

		}
		*/
		//Delete Gm
	    fetch('http://localhost:3001/api/Gms/'+id,{
	      method:'DELETE',
	      body: {},
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    }).then((response) => {
	    	alert("General Manager was deleted successfully");
	    	this.fetchGms();
			return console.log('GM Deleted');
	    })
	    .catch(function(err){
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
							{...this.state} 
						/>
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
									<GmRow 
										key={gm.id}
										gm={gm}
										onHandleDeleteGm={this.handleDeleteGm}
									/>
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