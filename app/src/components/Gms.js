import React from 'react';
import {Link} from 'react-router-dom';

export class Gms extends React.Component{
	constructor(props){
	    super(props);

		this.options = {
			defaultSortName: 'id',  // default sort column name
			defaultSortOrder: 'asc'  // default sort order
		};
	}

	componentDidMount(){
		
	}

	render(){
		console.log(this.props);
		return(
			<div>
				<table className="table table-bordered table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.gms.map(( listValue, index ) => {
						return (
							<tr>
								<td>{listValue.id}</td>
								<td>{listValue.GmFirstName}</td>
								<td>{listValue.GmLastName}</td>
							</tr>
						);
						})}
					</tbody>
				</table>
				
			</div>
		)
	}
}