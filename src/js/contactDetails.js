import React, { Component } from 'react';


export default class ContactDetails extends Component {
	constructor(...props) {
		super(...props);
		this.state = {orgs: [] };
	}


	componentWillMount() {
		ajax('http://api.github.com/users/:user.orgs').then(orgs=> {
			this.setState({orgs});
		});
}
	getContact(contact) {
		return (
		<li key={contact.id}>
		<Link to={`/contactDetails/${contact.id}`}>{contact.name}</Link>
		</li>

			)
		}
	


}