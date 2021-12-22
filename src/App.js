import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

export default class App extends React.Component {
	
	render () {
		return (
			<>
				<div className="menu">
					<div></div>
					<div><Link to="/FlipFlop" title="Flip Flop">Start</Link></div>
					<div><Link to="/Settings">Settings</Link></div>
					<div></div>
				</div>
			</>
		  );
	}
}
