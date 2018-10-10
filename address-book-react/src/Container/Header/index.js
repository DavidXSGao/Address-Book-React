import React, { Component } from 'react';
import AppBar from '../../Component/AppBar';
import { I18n } from 'react-i18next';
import './Header.css';

class Header extends Component {
  render() {
  	const { title, dispatch, location } = this.props;
    return (
      <I18n ns="translations">
      {
        (t) => (
          <header className="header" >
            <AppBar title={t('title.contacts')} dispatch={dispatch} location={location}/>
          </header>
          )
      }
      </I18n>
    );
  }
}

export default Header;
