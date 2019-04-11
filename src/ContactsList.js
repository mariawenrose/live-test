import React from 'react';
import Contact from './Contact'

class ContactsList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0,20)})
    //setting character count
  }

  render () {
    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contacts.name.indexOf(this.state.search) !== -1;
      }
    );
    console.log(this.props.ContactsFromApp)

    var contacts = {contacts}
    return (
    <div>

      <ul>
        {filteredContacts.map((contact)=> {
          return <Contact contact = {contact} />
        })}
      </ul>
      <input type = "text" placeholder = "search" value = {this.state.search}
       onChange = {this.updateSearch.bind(this)}
     />
   
    </div>
    )
  }
}

export default ContactsList;