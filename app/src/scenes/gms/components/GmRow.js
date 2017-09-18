import React from 'react';
import {Link} from 'react-router-dom';

export const GmRow = (props) => {
	return(
		<tr>
			<td>{props.gm.id}</td>
			<td>{props.gm.GmTeamName}</td>
			<td>{props.gm.GmFirstName}</td>
			<td>{props.gm.GmLastName}</td>
			<td>{props.gm.spent}</td>
			<td>{300 - props.gm.spent}</td>
			<td>{props.gm.totalPlayers}</td>
			<td>
				<div className="btn-group" role="group" aria-label="Basic example">
					<Link className="btn btn-primary btn-sm" to={'gm/'+props.gm.id}>View Team</Link>
					<button disabled className="btn btn-danger btn-sm" gm_id={props.gm.id} onClick={() => props.onHandleDeleteGm(props.gm.id)}>Delete</button>
				</div>
			</td>
		</tr>
	);
}