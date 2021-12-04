import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

export default class Settings extends React.Component {
  
	constructor(props) {
		super(props);
		
		this.state = { selected: 8 };
		this.handleSelection = this.handleSelection.bind(this);
	}
	
	handleSelection(e) {
		//to do
		this.state = e.target.value;
	}
  
	render () {
		return (
			<>
				<div className="menu">
					<div>Settings</div>
					<div>Style</div>
					<div>
						<label for="cards">Cards Count:</label>
						<select name="cards" id="cards" onChange={this.handleSelection}>
						  <option value="8">8</option>
						  <option value="16">16</option>
						  <option value="24">24</option>
						  <option value="32">32</option>
						  <option value="64">64</option>
						</select>
					</div>
					<div><Link to="/">Back</Link></div>
				</div>
			</>
		  );
	}
}
