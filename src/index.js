import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = React.lazy(() => import('./App'));
const FlipFlop = React.lazy(() => import('./FlipFlop'));
const Settings = React.lazy(() => import('./Settings'));

ReactDOM.render(
  <React.StrictMode>
	<Suspense fallback={<div> Loading ... </div>}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/FlipFlop" element={<FlipFlop />} />
				<Route path="/Settings" element={<Settings />} />
			</Routes>
		</BrowserRouter>
	</Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
