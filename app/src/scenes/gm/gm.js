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
	    	players:[],
	    	gm_spent:0
	    }
	}


	componentDidMount(){
		//GET Full GM List
	    fetch('http://localhost:3001/api/Gms', {
	      method: 'get',
	      headers: {
	        'Content-Type': 'application/json'
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


		//Get GM players 
		fetch('http://localhost:3001/api/Gms/'+this.state.gm_id+'/player', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json();
		}).then((players) => {
			this.setState({players:players});

			var gmSpent = 0;
			for(let i=0; i<players.length; i++){
				console.log(players[i].Cost);
				gmSpent += players[i].Cost;
			}

			//console.log(gmSpent);
			this.setState({gm_spent:gmSpent});

		}).catch(function(err){
			console.log(err);
		});
	}

	render(){
		return(
			<div>
				<p>Name: {this.state.gm.GmFirstName} {this.state.gm.GmLastName}</p>
				<p>Spent: {this.state.gm_spent}</p>
				<p>Drafted: {this.state.players.length}</p>

				<h2>Players</h2>
		        <PlayerList players={this.state.players} gms={this.state.gms} />
			</div>
		);
	}
}