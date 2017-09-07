import React from 'react';
import {Link} from 'react-router-dom';

export class PlayerListGmSelector extends React.Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(evt){
		//console.log(evt.currentTarget.value);
		this.props.onUpdateGm({ gmId: evt.currentTarget.value });
	}

	render(){
		const options = [];
		for (var i=0; i < this.props.gmList.length; i++) {
			options.push(<option value={this.props.gmList[i].id}>{this.props.gmList[i].GmTeamName}</option>);
		}

		return(
			<select onChange={this.onChange}>
				<option>No GM</option>
				{options}
			</select>
		)
	}
}