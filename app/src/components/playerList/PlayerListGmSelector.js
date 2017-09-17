import React from 'react';

export class PlayerListGmSelector extends React.Component{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(evt){
		//console.log(evt.currentTarget.value);
		this.props.onUpdateGm({ gmId: evt.currentTarget.value, playerId:this.props.playerId });
	}

	render(){
		const options = [];
		for (var i=0; i < this.props.gmList.length; i++) {
			if(this.props.gmList[i].id == this.props.currentGm){
				options.push(<option selected key={this.props.gmList[i].id} value={this.props.gmList[i].id}>{this.props.gmList[i].GmTeamName}</option>);
			}else{
				options.push(<option key={this.props.gmList[i].id} value={this.props.gmList[i].id}>{this.props.gmList[i].GmTeamName}</option>);
			}
		}

		return(
			<select className="gmSelect" onChange={this.onChange}>
				<option value="0">No GM</option>
				{options}
			</select>
		)
	}
}