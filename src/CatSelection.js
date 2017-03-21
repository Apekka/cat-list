import React, { Component } from 'react';
import data from './cats.json';

export default class CatSelection extends Component {
	constructor(props) {
		super(props);
	}
	


	render() {
		    const selectedCats = this.props.cats.filter( item => item.selected);
		return (
			<ul className="list-group"> {
				selectedCats.map( item => (

					<li key={item.id}  className="list-groupe-item">
					{item.slug}
					<img src="{item.url}" />
					</li>
				))
			}
        	</ul>
		);
	}
}
