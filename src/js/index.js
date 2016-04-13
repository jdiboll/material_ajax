// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Contacts from './contacts';
import ContactDetails from './contactDetails';

render ((
	<Router history = {hashHistory}>
	<Route path="/" component={Contacts}/>
	<Route path="/contactDetails/:contact.id" component={ContactDetails}/>
	</Router>
	), document.querySelector('.app'))