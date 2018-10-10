import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContactList from '../../Component/ContactList';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { translate } from 'react-i18next';
import './main.css';


const mapStateToProps = state => {
  return {
    filteredContacts: state.filteredContacts
  }
}

class Contacts extends Component {
  render() {

    const { filteredContacts, t } = this.props;
    return (
      <main className="main">
        <ContactList contacts={filteredContacts}/>
        <Button variant="raised" color="primary" component={Link} to="/addeditcontact/">{t('global.add')}</Button>
      </main>
    );
  }
}

export default translate()(withRouter(connect(mapStateToProps)(Contacts)));
