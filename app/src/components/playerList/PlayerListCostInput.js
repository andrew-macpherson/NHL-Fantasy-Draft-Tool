import React from 'react';

export class PlayerListCostInput extends React.Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);

		this.state = {
			defaultValue: this.props.defaultValue
		}
	}

	onChange(evt){
		//console.log(evt.currentTarget.value);
		this.setState({defaultValue:evt.currentTarget.value});
		this.props.onUpdatePlayerCost({ cost: evt.currentTarget.value, playerId:this.props.playerId });
	}

	render(){
		return(
			<input value={this.state.defaultValue} onChange={this.onChange} />
		)
	}
}