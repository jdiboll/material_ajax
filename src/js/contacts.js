import React, { Component } from 'react';
import { ajax } from 'jquery';
import { Link } from 'react-router';


export default class Contacts extends Component {
	constructor(...props) {
		super(...props);
		this.state = {contacts: [] };
	}

	
	
	 render () {
	 	let contacts = this.state;
	 	return (
	 		<div className="contact-list">
	 			<header>Github Users</header>
	 				<ul>{users.map(this.getContact)}</ul>
	 		</div>

		)
	 }
}