import React from 'react';
import {EditPlayerForm} from '../../scenes/player/components/EditPlayerForm.js';

export class Player extends React.Component{
	constructor(props){
	    super(props);

	    const player_id = props.match.params.id;

	    this.state = {
	    	player_id: player_id,
	    	player: [],
	    	add_player_form: {
	    		FirstName: '',
	    		LastName: ''
	    	}
	    }
	}


	componentDidMount(){
		//Get Player information
		fetch('http://localhost:3001/api/Players/'+this.state.player_id, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(function(response){
			return response.json();
		}).then((playerData) => {
			console.log(playerData);
			this.setState({player:playerData});
		}).catch(function(err){
			console.log(err);
		});
	}

	render(){
		return(
			<div>
				<h2>Player: {this.state.player_id}</h2>
		        <EditPlayerForm players={this.state.player} {...this.state}  />
			</div>
		);
	}
}