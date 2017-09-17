import React from 'react';
import {AddPlayerForm} from '../../scenes/player/components/AddPlayerForm.js';

export class AddPlayer extends React.Component{
	constructor(props){
	    super(props);

	    const player_id = props.match.params.id;

	    this.state = {
	    	player: {
	    		FirstName: '',
	    		LastName: ''
	    	}
	    }

	    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	    this.handleLastNameChange = this.handleLastNameChange.bind(this);

	    this.handleAddPlayer = this.handleAddPlayer.bind(this);
	}


	componentDidMount(){
		//Get Player information
		
	}

	handleFirstNameChange(evt){
		this.setState({player:{
			FirstName:evt.currentTarget.value,
			LastName:this.state.player.LastName
		}});
	}

	handleLastNameChange(evt){
		this.setState({player:{
			FirstName:this.state.player.FirstName,
			LastName:evt.currentTarget.value
		}});
	}

	handleAddPlayer(props){
		console.log('wee');
		console.log(props);

		const playerData = {
			FirstName: this.state.player.FirstName,
			LastName: this.state.player.LastName
		}

		//Add Gm
	    fetch('http://localhost:3001/api/Players',{
	      method:'POST',
	      body: JSON.stringify(playerData),
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    }).then((response) => {
	    	alert("Player was added successfully");
			return console.log('Player Added');
	    }).catch(function(err){
	      alert(err);
	    });

		// reset form 
		this.setState({
			player: {
	    		FirstName: '',
	    		LastName: ''
	    	}
		});

	}

	render(){
		return(
			<div>
				<h2>Player: {this.state.player_id}</h2>
		        <AddPlayerForm 
		        players={this.state.player} 
		        addPlayer={this.handleAddPlayer}
		        onFirstNameChange={this.handleFirstNameChange}
		        onLastNameChange={this.handleLastNameChange}
		        {...this.state}  />
			</div>
		);
	}
}