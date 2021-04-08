// styles
import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// libs
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import VideoList from './components/Videos';
import VideoForm from './components/Videos/Form';
import Navbar from './components/Navbar';

ReactDOM.render(
	<BrowserRouter>
		<Navbar />
		<div className="container p-4">
			<Switch>
				<Route exact path="/" component={VideoList} />
				<Route path="/new-video" component={VideoForm} />
				<Route path="/update/:id" component={VideoForm} />
			</Switch>
			{/* <ToastContainer position="top-right" /> */}
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
