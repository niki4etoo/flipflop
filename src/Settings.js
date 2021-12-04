import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

export default class Settings extends React.Component {
	constructor(props) {
		super(props);
		
		
		var defaultCardsCount = window.localStorage.getItem('cardsCount') !== null ? JSON.parse(window.localStorage.getItem('cardsCount')) : "8";
		this.state = { selected: defaultCardsCount }; //default value
		this.handleSelection = this.handleSelection.bind(this);
		
		this.cardsOptions = [
			{
				value: 8,
				label: "8",
			},
			{
				value: 16,
				label: "16",
			},
			{
				value: 24,
				label: "24",
			},
			{
				value: 32,
				label: "32",
			},
			{
				value: 64,
				label: "64",
			}
		];
	}
	
	handleSelection(e) {
		this.setState({ selected: e.target.value });
		
		window.localStorage.setItem('cardsCount', e.target.value);
	}
  
	render () {
		return (
			<>
				<div className="menu">
					<div>Settings</div>
					<div>Style</div>
					<div>
						<label htmlFor="cards">Cards Count:</label>
						<select name="cards" id="cards" value={this.state.selected} onChange={this.handleSelection}>
						  {this.cardsOptions.map((option) => (
								<option value={option.value} key={option.value}>{option.label}</option>
							))}
						</select>
					</div>
					<div><Link to="/">Back</Link></div>
				</div>
			</>
		  );
	}
}
