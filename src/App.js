import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

export default function App() {
  return (
    <>
		<div className="menu">
			<div></div>
			<div><Link to="/FlipFlop">Start</Link></div>
			<div><Link to="/Settings">Settings</Link></div>
			<div></div>
		</div>
    </>
  );
}
