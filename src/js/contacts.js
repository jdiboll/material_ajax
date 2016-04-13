import React, { Component } from 'react';
import { ajax } from 'jquery';


export default class Contacts extends Component {
	constructor(...props) {
		super(...props);
		this.state = {contacts: [] };
	}


	//getContact(contact) {
		//return (
		//<li-key={contact.id}>

			//)
	// //}
	// render () {
	// 	let contacts = this.state;
	// 	return (
	// 		<div className="contact-list">
	// 			<header>Github Users</header>
	// 				<ul>{contacts.map(::getContact)}</ul>
	// 		</div>




	// 		)
	// }
}