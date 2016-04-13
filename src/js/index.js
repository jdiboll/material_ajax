// Javascript Entry Point
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Contacts from './contacts';
import ContactDetails from './contactDetails';

render ((
	<Router history = {hashHistory}>
	<Route path="/" component={Contacts}/>
	<Route path="/contactDetails" component={ContactDetails}/>
	</Router>
	), document.querySelector('.app'))