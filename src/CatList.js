import React, { Component } from 'react';
import data from './cats.json';

export default class CatList extends Component {
	constructor(props) {
		super(props);
	}
	
	handleClick(e) {
		console.log('e :', e);
		console.log('this : ', this);
	}

	render() {
		return (
			<ul className="list-group">{
          		this.props.cats.map( item => (<li key={item.id} onClick={(e)=> {this.props.selectCat(item)}} className="list-group-item"> {item.slug}</li>))
        	}
        	</ul>
		);
	}
}
