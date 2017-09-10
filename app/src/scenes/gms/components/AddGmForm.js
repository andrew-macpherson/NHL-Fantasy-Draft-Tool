import React from 'react';

export const AddGmForm = (props) => {
	return (
		<form className="addGmForm">
			<div className="form-group">
				<label>First Name</label>
				<input value={props.add_gm_form.GmFirstName} onChange={props.onFirstNameChange} />
			</div>
			<div className="form-group">
				<label>Last Name</label>
				<input value={props.add_gm_form.GmLastName} onChange={props.onLastNameChange} />
			</div>
			<div className="form-group">
				<label>Team Name</label>
				<input value={props.add_gm_form.GmTeamName} onChange={props.onTeamNameChange} />
			</div>
			<div className="form-group">
				<button type="button" onClick={props.onAddGm} className="btn btn-success btn-sm">Add Gm</button>
			</div>
		</form>
	)
}