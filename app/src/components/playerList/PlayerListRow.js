import React from 'react';

import {PlayerListGmSelector} from './PlayerListGmSelector.js';
import {PlayerListCostInput} from './PlayerListCostInput.js';

export class PlayerListRow extends React.Component{
	constructor(props){
		super(props);

		this.handleUpdateGm = this.handleUpdateGm.bind(this);
		this.handleUpdatePlayerCost = this.handleUpdatePlayerCost.bind(this);

		this.state = {
			rowClass: ''
		}

	}

	componentDidMount(){
		//set row class
		const rowClass = (this.props.data.GmId != 0 ) ? "table-danger" : "";
		this.setState({rowClass:rowClass});
	}

	handleUpdateGm(params){
		//Pass to update function
		this.props.onUpdateGm(params);

		//Set row state color;
		//console.log(params.gmId);
		if(params.gmId != 0){
			this.setState({rowClass:'table-danger'});
		}else{
			this.setState({rowClass:''});
		}
	}

	handleUpdatePlayerCost(params){
		this.props.onUpdatePlayerCost(params);
	}

	render(){
		//const rowClass = (this.props.data.GmId != 0 ) ? "table-danger" : "";
		//this.setState({rowClass:rowClass});
		//this.state.rowClass = (this.props.data.GmId != 0 ) ? "table-danger" : "";


		return(
		<tr key={this.props.index} className={this.state.rowClass}>
			<td>{this.props.data.id}</td>
			<td>{this.props.data.TeamCity}</td>
			<td>{this.props.data.TeamName}</td>
			<td>{this.props.data.FirstName}</td>
			<td>{this.props.data.LastName}</td>
			<td>{this.props.data.Age}</td>
			<td>{this.props.data.GamesPlayed}</td>
			<td>{this.props.data.Goals}</td>
			<td>{this.props.data.Assists}</td>
			<td>{this.props.data.Points}</td>
			<td>
				<PlayerListCostInput onUpdatePlayerCost={this.handleUpdatePlayerCost} playerId={this.props.data.id} defaultValue={this.props.data.Cost} />
			</td>
			<td>
				<PlayerListGmSelector onUpdateGm={this.handleUpdateGm} currentGm={this.props.data.GmId} playerId={this.props.data.id} gmList={this.props.gmList} />
			</td>
		</tr>
		)
	}
}