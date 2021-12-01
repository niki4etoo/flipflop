import React from 'react';
import { Link } from 'react-router-dom';

import './css/main.css';

export default function App() {
  return (
    <>
		<div className="menu">
			<div>Settings</div>
			<div>Style</div>
			<div>Cards</div>
			<div><Link to="/">Back</Link></div>
		</div>
    </>
  );
}
