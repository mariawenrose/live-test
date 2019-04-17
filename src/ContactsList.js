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
    let filteredContacts = this.props.myContactsFromApp.filter(
      (myContactsFromApp) => {
        return myContactsFromApp.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    console.log(filteredContacts)

    var contacts = {contacts}
    return (
    <div>

      <input type = "text" placeholder = "search" value = {this.state.search}
        onChange = {this.updateSearch.bind(this)}
      />

      <ul>
        {filteredContacts.map((contact)=> {
          return <Contact contact = {contact} />
        })}
      </ul>

   
    </div>
    )
  }
}

export default ContactsList;