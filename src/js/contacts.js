import React, { Component } from 'react';
import { ajax } from 'jquery';
import { Link } from 'react-router';


export default class Contacts extends Component {
	constructor(...props) {
		super(...props);
		this.state = {contacts: [] };
	}

	componentWillMount() {
		ajax('http://api.github.com/users/:user.orgs').then(users=> {
			this.setState({users});
		});
	}


	getContact(contact) {
		return (
		<li key={contact.id}>
		<Link to={`/contactDetails/${contact.id}`}>{contact.name}</Link>
		</li>

			)
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