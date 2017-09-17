import React from 'react';

export const EditPlayerForm = (props) => {
	return (
		<form className="addGmForm">
			<div className="form-group">
				<label>First Name: </label>
				<input value={props.player.FirstName} onChange={props.onFirstNameChange} />
			</div>
			<div className="form-group">
				<label>Last Name: </label>
				<input value={props.player.LastName} onChange={props.onLastNameChange} />
			</div>
			<div className="form-group">
				<button type="button" className="btn btn-success btn-sm">Update Player</button>
			</div>
		</form>
	)
}