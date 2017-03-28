import React from 'react';

export default class CatCreation extends React.Component {
		state = {
			url: ''
		}

	changeHandler = (e) => {
		this.setState({
			url: e.target.value
		});

		
	}

	render() {
		return (<div>
			<h1>Création de chat</h1>
			<div>
				<label htmlFor="url"></label>
				<input type="text" name="url" value={this.state.url} onChange={this.changeHandler}/>
				<button onClick={(e)=> this.props.addCat(this.state.url)}> AJOUT DU GWO CHAT </button>
			</div>
		</div>);
	}
}