import React from 'react';
import {Link} from 'react-router-dom';

export class PlayerListGmSelector extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<select>
				<option>No GM</option>
				<option>GM 1</option>
				<option>GM 2</option>
			</select>
		)
	}
}