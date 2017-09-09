import React from 'react';
import {PlayerList} from '../../components/playerList/PlayerList.js';

export class Gm extends React.Component{
	constructor(props){
	    super(props);

	    const gm_id = props.match.params.id;

	    this.state = {
	    	gm_id: gm_id,
	    	gms: [],
	    	gm:[],
	    	players:[]
	    }
	}


	componentDidMount(){
		//GET Full GM List
	    fetch('http://localhost:3001/api/Gms', {
	      method: 'get',
	      headers: {
	        'Content-Type': 'application/json',
	        'Authorization': 'Basic ' + btoa('andrewmac17' + ':' + 'Spo@rt#21')
	      },
	    }).then(function(response) {
	      return response.json();
	    }).then(function(gmData){
	      const gms = gmData;
	      return gms;
	    }).then((gms) => {
	      this.setState({gms:gms});
	    })
	    .catch(function(err) {
	      console.log(err);
	    });

		//Get GM information
		fetch('http://localhost:3001/api/Gms/'+this.state.gm_id, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json();
		}).then((gmData) => {
			this.setState({gm:gmData});
		}).catch(function(err){
			console.log(err);
		});


		//Get GM teams 
		fetch('http://localhost:3001/api/Gms/'+this.state.gm_id+'/player', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json();
		}).then((players) => {
			this.setState({players:players});
		}).catch(function(err){
			console.log(err);
		});
	}

	render(){
		console.log(this.state.players);
		return(
			<div>
				<p>Name: {this.state.gm.GmFirstName} {this.state.gm.GmLastName}</p>

				<h2>Players</h2>
		        <PlayerList players={this.state.players} gms={this.state.gms} />
			</div>
		);
	}
}