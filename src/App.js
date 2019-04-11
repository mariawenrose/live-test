import React, { Component } from 'react';
import ContactsList from './ContactsList'
import './App.css';

let contacts = [
{
  name: 'Scott',
  phone: '555 222 111'
}, 
{
  name: 'Courtney',
  phone: '222 111 333'
}, 
{
  name: 'Koda',
  phone: '444 111 333'
},
{
  name: 'Lorenz',
  phone: '888 777 111'
}
];

// console.log(this.props.contact)

const title = "live search test";

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    myContactsFromApp: contacts
  };
}

  render() {
    return (
      <div className="App backgroundColour">
       <h1>Contacts List</h1>
       <ContactsList myContactsFromApp = {this.state.myContactsFromApp} />
      </div>
    );
  }
}


export default App;
