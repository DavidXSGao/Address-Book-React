import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './help.css';

class Help extends Component {
  render() {
    const { t } = this.props;
    return (
      <main className="help">
        <h1>Help</h1>
        <p>{t("help.part1")}</p>
      </main>
    );
  }
}

export default translate()(Help);