import React from 'react';
import {Link} from 'react-router-dom';

export class PlayerListGmSelector extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const options = [];
		for (var i=0; i < this.props.gmList.length; i++) {
			options.push(<option>{this.props.gmList[i].GmTeamName}</option>);
		}

		return(
			<select>
				<option>No GM</option>
				{options}
			</select>
		)
	}
}