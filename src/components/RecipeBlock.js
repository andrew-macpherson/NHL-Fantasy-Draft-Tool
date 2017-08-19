import React from 'react';
import {Link} from 'react-router-dom';

export class RecipeBlock extends React.Component{

	render(){
		return (
			<div className="card">
				<img className="card-img-top" src={this.props.image} alt="Card image cap" />
				<div className="card-block">
					<h4 className="card-title">{this.props.title}</h4>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link className="btn btn-primary" to={`/recipe/${this.props.id}`}>Go somewhere</Link>
				</div>
			</div>
		);
	}
}