import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FlipFlop from './FlipFlop';
import Settings from './Settings';

ReactDOM.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/FlipFlop" element={<FlipFlop />} />
			<Route path="/Settings" element={<Settings />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
