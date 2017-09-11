import React from 'react';
import {Link} from 'react-router-dom';

export const GmRow = (props) => {
	return(
		<tr>
			<td>{props.gm.id}</td>
			<td>{props.gm.GmFirstName}</td>
			<td>{props.gm.GmLastName}</td>
			<td>
				<Link className="btn btn-primary btn-sm" to={'gm/'+props.gm.id}>View Team</Link>
				<a className="btn btn-danger btn-sm" gm_id={props.gm.id} onClick={() => props.onHandleDeleteGm(props.gm.id)}>Delete</a>
			</td>
		</tr>
	);
}