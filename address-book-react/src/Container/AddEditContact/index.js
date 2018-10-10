import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../Component/ContactForm';
import { translate } from 'react-i18next';
import './addeditcontact.css';
import { updateContact, addContact } from '../../actions';

class AddEditContact extends Component {

  render() {
    const { contacts, location, updateContact, addContact, t } = this.props;
    let contactId = location.pathname.split("/")[2];
    contactId = parseInt(contactId, 10);
    let contact = {
      name: '',
      gender: 'male',
      country: 'ca',
      other: '',
      email: '',
      postalCode: ''
    };
    let screenLabel = t('screens.contacts.addTitle');

    // Check if url contains contact Id, if it doesn't, we are adding contact.
    contacts.forEach( (con) => {
      if (con.id === contactId) {
        contact = con;
        screenLabel = t('screens.contacts.editTitle');
      }
    });

    return (
      <main className="addeditcontact">
        <h1>{screenLabel}</h1>
        <ContactForm
          contact={contact}
          updateContact={updateContact}
          addContact={addContact}
        >
        </ContactForm>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    },
    updateContact: (contact) => {
      dispatch(updateContact(contact));
    }
  }
}

export default translate()(connect(mapStateToProps, mapDispatchToProps)(AddEditContact));